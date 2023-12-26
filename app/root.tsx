import { LinksFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";
import stylesheet from "@/styles/tailwind.css";
import Layout from "@/routes/_layout";
import { Toaster } from "react-hot-toast";
import { db } from "@/lib/db.server";
import { typedjson, useTypedLoaderData } from "remix-typedjson";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader = async () => {
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

export default function App() {
  const data = useTypedLoaderData<typeof loader>();

  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Toaster position="top-center" />
        <Layout latestVote={data.latestVote} />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
