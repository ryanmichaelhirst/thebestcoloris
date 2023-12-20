import { Outlet } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { route } from "routes-gen";

const linkClass = "hover:text-gray-500 text-white";

export default function Layout(props: { latestVote: any }) {
  return (
    <div className="flex flex-col h-[100vh]">
      <div
        className="flex space-x-4 py-2 px-4 items-center justify-center"
        style={{ background: props.latestVote?.color ?? "#000000" }}
      >
        <Link to={route("/")} className={linkClass}>
          Home
        </Link>
        <p className="text-xl text-white">|</p>
        <Link to={route("/votes")} className={linkClass}>
          Votes
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
