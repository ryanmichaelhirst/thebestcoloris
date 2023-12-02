import { Outlet } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { route } from "routes-gen";

const linkClass = "hover:text-teal-500 text-white";

export default function Layout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex space-x-4 bg-teal-800 py-2 px-4 items-center justify-center">
        <Link to={route("/")} className={linkClass}>
          Home
        </Link>
        <p className="text-xl text-teal-500">|</p>
        <Link to={route("/votes")} className={linkClass}>
          Votes
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
