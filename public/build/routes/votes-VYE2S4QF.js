import {
  require_dist
} from "/build/_shared/chunk-5BOSOAUI.js";
import {
  cn,
  formatDateTimestamp,
  require_db,
  useTypedLoaderData
} from "/build/_shared/chunk-DSJDBLHY.js";
import "/build/_shared/chunk-SE6AVHRO.js";
import {
  Link,
  useSearchParams
} from "/build/_shared/chunk-AD32ER7E.js";
import "/build/_shared/chunk-H5ZE7JVG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NRH5LTJ7.js";
import {
  require_react
} from "/build/_shared/chunk-O4OKU2LD.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMMNNE6D.js";
import "/build/_shared/chunk-K6PKGSTD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/.pnpm/@heroicons+react@2.0.18_react@18.2.0/node_modules/@heroicons/react/20/solid/esm/ChevronLeftIcon.js
var React = __toESM(require_react(), 1);
function ChevronLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = React.forwardRef(ChevronLeftIcon);
var ChevronLeftIcon_default = ForwardRef;

// node_modules/.pnpm/@heroicons+react@2.0.18_react@18.2.0/node_modules/@heroicons/react/20/solid/esm/ChevronRightIcon.js
var React2 = __toESM(require_react(), 1);
function ChevronRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    fillRule: "evenodd",
    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
    clipRule: "evenodd"
  }));
}
var ForwardRef2 = React2.forwardRef(ChevronRightIcon);
var ChevronRightIcon_default = ForwardRef2;

// app/components/pagination/index.tsx
var import_routes_gen = __toESM(require_dist());

// app/components/pagination/usePagination.ts
var import_react = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/pagination/usePagination.ts"
  );
  import.meta.hot.lastModified = "1700703209299.8076";
}
var DOTS = "...";
var range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
var usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}) => {
  const paginationRange = (0, import_react.useMemo)(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};

// app/components/pagination/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/pagination/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/pagination/index.tsx"
  );
  import.meta.hot.lastModified = "1700703565852.2825";
}
var currentClass = "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
var defaultClass = "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0";
function PageButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: (0, import_routes_gen.route)("/votes") + "?" + new URLSearchParams({
    page: String(props.page)
  }), "aria-current": "page", className: cn(props.page === props.currentPage ? currentClass : defaultClass, "relative inline-flex items-center px-4 py-2 text-sm font-medium"), children: props.page }, void 0, false, {
    fileName: "app/components/pagination/index.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c = PageButton;
function Pagination(props) {
  _s();
  const numPages = Math.ceil(props.total / props.perPage);
  const startIndex = (props.page - 1) * props.perPage + 1;
  const endIndex = Math.min(props.page * props.perPage, props.total);
  const paginationRange = usePagination({
    currentPage: props.page,
    pageSize: props.perPage,
    totalCount: props.total
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 justify-between sm:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50", children: "Previous" }, void 0, false, {
        fileName: "app/components/pagination/index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50", children: "Next" }, void 0, false, {
        fileName: "app/components/pagination/index.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pagination/index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-700", children: [
        "Showing ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: startIndex }, void 0, false, {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 59,
          columnNumber: 21
        }, this),
        " to",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: endIndex }, void 0, false, {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        " of",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: props.total }, void 0, false, {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        " results"
      ] }, void 0, true, {
        fileName: "app/components/pagination/index.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pagination/index.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "isolate inline-flex -space-x-px rounded-md shadow-sm", "aria-label": "Pagination", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: (0, import_routes_gen.route)("/votes") + "?" + new URLSearchParams({
          page: String(props.page - 1)
        }), className: cn(props.page === 1 && "pointer-events-none opacity-30", "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Previous" }, void 0, false, {
            fileName: "app/components/pagination/index.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeftIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/pagination/index.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        paginationRange?.map((pageNumber, idx) => {
          if (typeof pageNumber === "string") {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn(defaultClass, "relative inline-flex items-center px-4 py-2 text-sm font-medium"), children: DOTS }, idx, false, {
              fileName: "app/components/pagination/index.tsx",
              lineNumber: 76,
              columnNumber: 22
            }, this);
          }
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageButton, { page: pageNumber, currentPage: props.page }, idx, false, {
            fileName: "app/components/pagination/index.tsx",
            lineNumber: 80,
            columnNumber: 20
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: (0, import_routes_gen.route)("/votes") + "?" + new URLSearchParams({
          page: String(props.page + 1)
        }), className: cn(props.page === numPages && "pointer-events-none opacity-30", "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Next" }, void 0, false, {
            fileName: "app/components/pagination/index.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRightIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/pagination/index.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pagination/index.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pagination/index.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pagination/index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pagination/index.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(Pagination, "19HqfiXoIUMweeBbakf/FHNBwW4=", false, function() {
  return [usePagination];
});
_c2 = Pagination;
var _c;
var _c2;
$RefreshReg$(_c, "PageButton");
$RefreshReg$(_c2, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/votes/index.tsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/votes/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/votes/index.tsx"
  );
  import.meta.hot.lastModified = "1700703490025.5552";
}
var perPage = 20;
function Votes() {
  _s2();
  const data = useTypedLoaderData();
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto pt-6 lg:px-40 space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl", children: "Votes" }, void 0, false, {
        fileName: "app/routes/votes/index.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-500 text-sm", children: [
        "(",
        data.voteCount,
        ")"
      ] }, void 0, true, {
        fileName: "app/routes/votes/index.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/votes/index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border rounded-lg shadow-lg border-gray-200 p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "space-y-6", children: data.votes.map((vote, idx) => {
        const author = vote.author ?? "Anonymous";
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "relative flex gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn(idx === data.votes.length - 1 ? "h-6" : "-bottom-6", "absolute left-0 top-0 flex w-6 justify-center"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-px bg-gray-200" }, void 0, false, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex h-6 w-6 flex-none items-center justify-center bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("h-3 w-3 rounded-full", vote.color === "#ffffff" && "ring-1 ring-gray-200"), style: {
            background: vote.color
          } }, void 0, false, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 73,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "flex-auto py-0.5 text-xs leading-5 text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-gray-900", children: author }, void 0, false, {
              fileName: "app/routes/votes/index.tsx",
              lineNumber: 78,
              columnNumber: 19
            }, this),
            " ",
            "changed the color to",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-gray-900", children: vote.color }, void 0, false, {
              fileName: "app/routes/votes/index.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs leading-5 text-gray-500", children: [
            vote.geoLocation?.city,
            ", ",
            vote.geoLocation?.stateCode
          ] }, void 0, true, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: vote.geoLocation?.countryFlag }, void 0, false, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("time", { dateTime: vote.createdAt.toISOString(), className: "text-xs leading-5 text-gray-500", children: formatDateTimestamp(vote.createdAt) }, void 0, false, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)
        ] }, vote.uid, true, {
          fileName: "app/routes/votes/index.tsx",
          lineNumber: 68,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/votes/index.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sticky bottom-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Pagination, { total: data.voteCount, page, perPage }, void 0, false, {
        fileName: "app/routes/votes/index.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/votes/index.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/votes/index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/votes/index.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s2(Votes, "ZQU7TWQyc5SjWyZ1pB9JM5PStZk=", false, function() {
  return [useTypedLoaderData, useSearchParams];
});
_c3 = Votes;
var _c3;
$RefreshReg$(_c3, "Votes");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Votes as default
};
//# sourceMappingURL=/build/routes/votes-VYE2S4QF.js.map
