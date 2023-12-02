import Pagination from "@/components/pagination";
import { db } from "@/lib/db.server";
import { cn, formatDateTimestamp } from "@/utils";
import { DataFunctionArgs } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";
import { typedjson, useTypedLoaderData } from "remix-typedjson";

const perPage = 20;

export const loader = async (args: DataFunctionArgs) => {
  const url = new URL(args.request.url);
  const page = parseInt(url.searchParams.get("page") ?? "1");

  const votes = await db.vote.findMany({
    take: (page - 1) * perPage + perPage,
    skip: (page - 1) * perPage,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      geoLocation: {
        select: {
          countryFlag: true,
          city: true,
          stateCode: true,
        },
      },
    },
  });
  const voteCount = await db.vote.count();

  return typedjson({ votes, voteCount });
};

export default function Votes() {
  const data = useTypedLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");

  return (
    <div className="container mx-auto pt-6 lg:px-40 space-y-3">
      <div className="flex items-center space-x-2">
        <h1 className="text-3xl">Votes</h1>
        <p className="text-gray-500 text-sm">({data.voteCount})</p>
      </div>

      <div className="border rounded-lg shadow-lg border-gray-200 p-4">
        <ul role="list" className="space-y-6">
          {data.votes.map((vote, idx) => {
            const author = vote.author ?? "Anonymous";
            return (
              <li key={vote.uid} className="relative flex gap-x-4">
                <div
                  className={cn(
                    idx === data.votes.length - 1 ? "h-6" : "-bottom-6",
                    "absolute left-0 top-0 flex w-6 justify-center"
                  )}
                >
                  <div className="w-px bg-gray-200" />
                </div>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                  <div
                    className={cn(
                      "h-3 w-3 rounded-full",
                      vote.color === "#ffffff" && "ring-1 ring-gray-200"
                    )}
                    style={{ background: vote.color }}
                  />
                </div>
                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                  <span className="font-medium text-gray-900">{author}</span>{" "}
                  changed the color to{" "}
                  <span className="font-medium text-gray-900">
                    {vote.color}
                  </span>
                </p>
                <p className="text-xs leading-5 text-gray-500">
                  {vote.geoLocation?.city}, {vote.geoLocation?.stateCode}
                </p>
                <p>{vote.geoLocation?.countryFlag}</p>
                <time
                  dateTime={vote.createdAt.toISOString()}
                  className="text-xs leading-5 text-gray-500"
                >
                  {formatDateTimestamp(vote.createdAt)}
                </time>
              </li>
            );
          })}
        </ul>
        <div className="sticky bottom-0">
          <Pagination total={data.voteCount} page={page} perPage={perPage} />
        </div>
      </div>
    </div>
  );
}
