import { LinksFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";
import stylesheet from "../tailwind.css";
import Layout from "@/routes/_layout";
import { Toaster } from "react-hot-toast";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Toaster position="top-center" />
        <Layout />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
