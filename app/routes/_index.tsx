import { db } from "@/lib/db.server";
import { cn, formatDateMMDDYYYY } from "@/utils";
import { DataFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { ChangeEvent, useEffect, useState } from "react";
import {
  typedjson,
  useTypedActionData,
  useTypedLoaderData,
} from "remix-typedjson";
import invariant from "tiny-invariant";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

export const loader = async () => {
  const latestVote = await db.vote.findFirstOrThrow({
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

const RADAR_API_KEY = "prj_test_sk_f2e275403233a445c71341a35465f040a812452e";

type GeocodeIpResponse = {
  meta: {
    code: 200;
  };
  address: {
    countryCode: string; // "US"
    country: string; // "United States"
    countryFlag: string; // "🇺🇸";
    state: string; // "South Carolina";
    stateCode: string; // "SC";
    city: string; // "Beaufort";
    postalCode: string; // "29902";
    latitude: number; // 32.4301;
    longitude: number; // -80.6694;
    layer: string; // "locality";
    geometry: {
      type: string; // "Point";
      coordinates: number[]; // [-80.6694, 32.4301];
    };
    dma: string; // "Savannah";
    dmaCode: string; // "507";
  };
  proxy: boolean; // false;
  ip: string; // "207.182.83.177";
};

export const action = async (args: DataFunctionArgs) => {
  const formData = await args.request.formData();
  const color = formData.get("color") as string;
  const comment = formData.get("comment") as string;
  const author = formData.get("author") as string;

  // create Vote record
  const vote = await db.vote.create({
    data: {
      color,
      comment: comment || null,
      author: author || null,
    },
  });

  // create GeoLocation record
  try {
    const response = await fetch("https://api.radar.io/v1/geocode/ip", {
      headers: {
        Authorization: RADAR_API_KEY,
      },
    });
    const geocode: GeocodeIpResponse = await response.json();
    invariant(geocode.meta.code === 200, "Failed to get geocode");

    const geoLocation = await db.geoLocation.create({
      data: {
        countryCode: geocode.address.countryCode,
        country: geocode.address.country,
        countryFlag: geocode.address.countryFlag,
        state: geocode.address.state,
        stateCode: geocode.address.stateCode,
        city: geocode.address.city,
        postalCode: geocode.address.postalCode,
        ip: geocode.ip,
        voteId: vote.id,
      },
    });
  } catch (error) {
    console.log("Error creating GeoLocation record");
    console.log(error);
  }

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
      <input
        name="color"
        type="color"
        id="color-picker"
        className="absolute top-0 left-0 opacity-0 cursor-pointer"
        onChange={handleColorChange}
        value={selectedColor}
      />
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
              stroke-width="3"
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
                stroke-linecap="round"
                stroke-linejoin="round"
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

export default function Index() {
  const data = useTypedLoaderData<typeof loader>();
  const actionData = useTypedActionData<typeof action>();

  const authorName = data.latestVote.author ?? "Anonymous";
  const theBestColor = data.latestVote.color;
  const commentDash = data.latestVote.comment ? "-" : "";
  const comment = data.latestVote.comment ? `"${data.latestVote.comment}"` : "";

  // after the form is submitted, render a toast
  useEffect(() => {
    if (!actionData?.vote.color) return;
    renderFormToast(actionData.vote.color);
  }, [actionData]);

  return (
    <div
      className="flex flex-col h-full p-8 space-y-4"
      style={{ background: theBestColor }}
    >
      <div className="container mx-auto lg:px-72 space-y-3">
        <div className="flex items-center justify-center">
          <div className="space-y-2 p-4 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl">THE BEST COLOR IS</h1>
            <div className="flex items-center justify-center space-x-2 mt-1">
              <div
                className="rounded-full h-8 w-8"
                style={{ background: data.latestVote.color }}
              />
              <p className="text-xl">{data.latestVote.color}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-lg border border-gray-100 bg-white text-gray-900">
          <div className="border-b border-gray-500">
            <div className="flex justify-between px-4 py-1">
              <div className="flex items-center">
                <p className="text-gray-600">Submission #{data.voteCount}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="rounded text-white text-xs bg-teal-800 py-0.5 px-1">
                  {data.latestVote.geoLocation?.city},{" "}
                  {data.latestVote.geoLocation?.stateCode}
                </div>
                <p className="text-lg">
                  {data.latestVote.geoLocation?.countryFlag}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <p>{comment}</p>
            <p className="font-semibold">
              {commentDash} {authorName}
            </p>
            <p className="text-gray-600">
              {formatDateMMDDYYYY(data.latestVote.createdAt)}
            </p>
          </div>
        </div>

        <div className="rounded shadow space-y-2 p-4 bg-white">
          <p className="text-slate-500 text-center text-sm">
            Hm that doesn't look right. The best color is actually...
          </p>
          <Form method="post" className="flex flex-col space-y-4">
            <ColorInput defaultValue={theBestColor} />
            <TextArea label="Comment" name="comment" optional />
            <Input label="Your Name" name="author" optional />
            <button
              type="submit"
              className="text-sm rounded py-2 px-4 text-white hover:opacity-60 bg-teal-800"
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
