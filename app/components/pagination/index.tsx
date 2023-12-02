import { cn } from "@/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";
import { route } from "routes-gen";
import { usePagination, DOTS } from "./usePagination";

const currentClass =
  "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
const defaultClass =
  "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0";
function PageButton(props: { page: number; currentPage: number }) {
  return (
    <Link
      to={
        route("/votes") +
        "?" +
        new URLSearchParams({ page: String(props.page) })
      }
      aria-current="page"
      className={cn(
        props.page === props.currentPage ? currentClass : defaultClass,
        "relative inline-flex items-center px-4 py-2 text-sm font-medium"
      )}
    >
      {props.page}
    </Link>
  );
}

export default function Pagination(props: {
  total: number;
  page: number;
  perPage: number;
}) {
  const numPages = Math.ceil(props.total / props.perPage);
  const startIndex = (props.page - 1) * props.perPage + 1;
  const endIndex = Math.min(props.page * props.perPage, props.total);

  const paginationRange = usePagination({
    currentPage: props.page,
    pageSize: props.perPage,
    totalCount: props.total,
  });

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startIndex}</span> to{" "}
            <span className="font-medium">{endIndex}</span> of{" "}
            <span className="font-medium">{props.total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link
              to={
                route("/votes") +
                "?" +
                new URLSearchParams({ page: String(props.page - 1) })
              }
              className={cn(
                props.page === 1 && "pointer-events-none opacity-30",
                "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              )}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {/* Copied from https://github.com/mayankshubham/react-pagination/blob/master/src/Pagination.js#L47-L70 */}
            {paginationRange?.map((pageNumber, idx) => {
              // pageNumber === DOTS
              if (typeof pageNumber === "string") {
                return (
                  <div
                    key={idx}
                    className={cn(
                      defaultClass,
                      "relative inline-flex items-center px-4 py-2 text-sm font-medium"
                    )}
                  >
                    {DOTS}
                  </div>
                );
              }

              return (
                <PageButton
                  key={idx}
                  page={pageNumber}
                  currentPage={props.page}
                />
              );
            })}
            <Link
              to={
                route("/votes") +
                "?" +
                new URLSearchParams({ page: String(props.page + 1) })
              }
              className={cn(
                props.page === numPages && "pointer-events-none opacity-30",
                "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              )}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
