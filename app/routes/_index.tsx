import { db } from "@/lib/db.server";
import { cn, formatRelativeTime } from "@/utils";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useEffect, useState, ChangeEvent } from "react";
import {
  typedjson,
  useTypedActionData,
  useTypedLoaderData,
} from "remix-typedjson";
import invariant from "tiny-invariant";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { useLiveLoader } from "@/utils/useLiveLoader";
import { emitter } from "@/utils/emitter.server";
import { ClientOnly } from "remix-utils/client-only";
// import { getClientIPAddress } from "remix-utils/get-client-ip-address";

type LoaderReturnType = Awaited<
  ReturnType<typeof useTypedLoaderData<typeof loader>>
>;
export const loader = async (args: LoaderFunctionArgs) => {
  const latestVote = await db.vote.findFirst({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      geoLocation: {
        select: {
          city: true,
          stateCode: true,
          countryCode: true,
          countryFlag: true,
        },
      },
    },
  });
  const voteCount = await db.vote.count();

  return typedjson({ latestVote, voteCount });
};

// https://ip-api.com/docs/api:json#test
type IpApiResponse = {
  query: string; // "24.48.0.1"
  status: string; // "success"
  country: string; // "Canada"
  countryCode: string; // "CA"
  region: string; // "QC"
  regionName: string; // "Quebec"
  city: string; // "Montreal"
  zip: string; // "H1K"
  lat: number; // 45.6085
  lon: number; // -73.5493
};

export function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    // @ts-expect-error Typescript complaining but this works
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export const action = async (args: ActionFunctionArgs) => {
  const formData = await args.request.formData();
  const color = formData.get("color") as string;
  const comment = formData.get("comment") as string;
  const author = formData.get("author") as string;
  const ipAddress = formData.get("ip-address");

  // create Vote record
  const vote = await db.vote.create({
    data: {
      color,
      comment: comment || null,
      author: author || null,
    },
  });

  try {
    // const ipAddress = get getClientIpAddress(args.request);
    if (!ipAddress) {
      throw new Error("ip address not found");
    }

    const response = await fetch(
      `http://ip-api.com/json/${ipAddress}?fields=57599`
    );
    if (response.status === 429) {
      throw new Error("ip-api rate limit exceeded");
    }

    const data: IpApiResponse = await response.json();
    invariant(data.status === "success", "ip-api request failed");

    // create GeoLocation record
    await db.geoLocation.create({
      data: {
        countryCode: data.countryCode,
        country: data.country,
        countryFlag: getFlagEmoji(data.countryCode),
        state: data.regionName,
        stateCode: data.region,
        city: data.city,
        postalCode: data.zip,
        ip: data.query,
        voteId: vote.id,
      },
    });
  } catch (ipApiError) {
    // number of requests remaining in the current rate limit window
    // const numRequestsLeft = args.request.headers.get("X-Rl");
    // number of seconds until the limit is reset
    const secondsUntilReset = args.request.headers.get("X-Ttl");

    return typedjson({
      error: {
        message: "Geo location could not be determined",
        metadata: {
          secondsUntilReset,
        },
      },
    });
  }

  // Here we are emitting an event to the "chat" event stream
  // which will trigger a revalidation of the data in the useLiveLoader hook
  // for all clients listening to the event stream
  emitter.emit("sse");
  return typedjson({ vote });
};

function Label(props: { htmlFor: string; label: string; optional?: boolean }) {
  return (
    <div className="flex justify-between">
      <label
        htmlFor={props.htmlFor}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props.label}
      </label>
      {props.optional && (
        <span className="text-sm leading-6 text-gray-500" id="email-optional">
          Optional
        </span>
      )}
    </div>
  );
}

function ColorInput(props: { defaultValue?: string }) {
  const [selectedColor, setSelectedColor] = useState(
    props.defaultValue ?? "#000000"
  );

  useEffect(() => {
    if (props.defaultValue && props.defaultValue !== selectedColor) {
      setSelectedColor(props.defaultValue);
    }
  }, [props.defaultValue]);

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
  };

  return (
    <div className="relative space-y-1">
      <Label htmlFor="color" label="Color" />
      {/* Color input container */}
      <div
        className="flex items-center justify-center p-2 border border-gray-300 rounded cursor-pointer"
        onClick={() => {
          document.getElementById("color-picker")?.click();
        }}
      >
        <div className="flex">
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: selectedColor }}
          />
          <input
            type="text"
            className="w-20 ml-2 border-none outline-none text-gray-700 cursor-pointer"
            value={selectedColor}
            readOnly
          />
        </div>
      </div>

      {/* Hidden input for color picker */}
      <ClientOnly>
        {() => (
          <input
            name="color"
            type="color"
            id="color-picker"
            className="absolute top-0 left-0 opacity-0 cursor-pointer"
            onChange={handleColorChange}
            value={selectedColor}
          />
        )}
      </ClientOnly>
    </div>
  );
}

function Input(props: {
  label: string;
  name: string;
  optional?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label
        htmlFor={props.name}
        label={props.label}
        optional={props.optional}
      />
      <input
        name={props.name}
        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={props.placeholder}
      />
    </div>
  );
}

function TextArea(props: {
  label: string;
  name: string;
  optional?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1">
      <Label
        htmlFor={props.name}
        label={props.label}
        optional={props.optional}
      />
      <textarea
        rows={2}
        name={props.name}
        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}

function renderFormToast(submittedColor: string) {
  toast.custom((t) => (
    <div
      className={cn(
        t.visible ? "animate-enter" : "animate-leave",
        "flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg w-[300px]"
      )}
      onClick={() => toast.dismiss(t.id)}
    >
      <div>
        <div
          className="rounded-full p-1"
          style={{ background: submittedColor }}
        >
          {/* Copied from https://www.sabhya.dev/animating-a-check-icon-in-react-with-framer-motion#heading-demo */}
          <AnimatePresence>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="white"
              className="w-4 h-4"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{
                  type: "tween",
                  duration: 0.5,
                  ease: "easeIn",
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </AnimatePresence>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-900">
          You're right, <span className="font-bold">{submittedColor}</span> is
          the best color
        </p>
      </div>
    </div>
  ));
}

function SubmissionCard(props: LoaderReturnType) {
  const authorName = props.latestVote?.author ?? "Anonymous";
  const comment = props.latestVote?.comment ?? "";

  return (
    <div className="rounded-lg shadow-lg border border-gray-100 bg-white text-gray-900">
      <div className="border-b border-gray-500">
        <div className="flex justify-between px-4 py-1">
          <div className="flex items-center">
            <p>{authorName}</p>
            <div
              className="h-1 w-1 mx-2 rounded-full"
              style={{ background: props.latestVote?.color ?? "#000000" }}
            />
            {props.latestVote?.createdAt && (
              <p className="text-gray-600">
                {formatRelativeTime(props.latestVote.createdAt)}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="rounded text-white text-xs py-0.5 px-1"
              style={{ background: props.latestVote?.color ?? "#000000" }}
            >
              {props.latestVote?.geoLocation?.city},{" "}
              {props.latestVote?.geoLocation?.stateCode}
            </div>
            <p className="text-lg">
              {props.latestVote?.geoLocation?.countryFlag}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p>{comment}</p>
      </div>

      <div className="align-bottom pl-4 pb-2">
        <p className="text-gray-600 text-xs">Vote #{props.voteCount}</p>
      </div>
    </div>
  );
}

export default function Index() {
  const data = useLiveLoader<typeof loader>();
  const actionData = useTypedActionData<typeof action>();
  const [ipAddress, setIpAddress] = useState("");

  const theBestColor = data.latestVote?.color;

  // after the form is submitted, render a toast
  useEffect(() => {
    if (!actionData) {
    } else if ("error" in actionData) {
      const secondsUntilReset = actionData.error.metadata.secondsUntilReset;
      toast.error(
        `Api rate limit exceeded. Try again in ${secondsUntilReset} seconds`
      );
    } else if ("vote" in actionData) {
      renderFormToast(actionData.vote.color);
    }
  }, [actionData]);

  // get client ip address
  useEffect(() => {
    async function getIpAddress() {
      if (!ipAddress) {
        const ipAddress = await (await fetch("https://api.ipify.org")).text();
        invariant(ipAddress, "ip address not found");
        setIpAddress(ipAddress);
      }
    }

    getIpAddress();
  }, []);

  return (
    <div
      className="flex flex-col h-full p-8 space-y-4"
      style={{ background: theBestColor }}
    >
      <div className="container mx-auto w-[450px] space-y-3">
        <div className="flex">
          <div className="inline-flex space-x-2 items-center justify-center p-4 bg-white rounded-lg shadow-lg w-full">
            <h1 className="text-3xl text-center">THE BEST COLOR IS</h1>
            <div
              className="rounded-full h-8 w-8 cursor-pointer"
              style={{ background: data.latestVote?.color }}
              title={data.latestVote?.color}
            />
          </div>
        </div>

        <SubmissionCard {...data} />

        <div className="rounded shadow space-y-2 p-4 bg-white">
          <p className="text-slate-500 text-center text-sm">
            Hm that doesn't look right. The best color is actually...
          </p>
          <Form method="post" className="flex flex-col space-y-4">
            <ColorInput defaultValue={theBestColor} />
            <TextArea label="Comment" name="comment" optional />
            <Input label="Your Name" name="author" optional />
            <input type="hidden" name="ip-address" value={ipAddress} />
            <button
              type="submit"
              className="text-sm rounded py-2 px-4 text-white hover:opacity-60"
              style={{ background: theBestColor ?? "#000000" }}
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
