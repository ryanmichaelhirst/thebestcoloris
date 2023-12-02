import {
  require_dist
} from "/build/_shared/chunk-5BOSOAUI.js";
import {
  Link,
  Outlet
} from "/build/_shared/chunk-AD32ER7E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NRH5LTJ7.js";
import {
  createHotContext
} from "/build/_shared/chunk-XMMNNE6D.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_layout.tsx
var import_routes_gen = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout.tsx"
  );
  import.meta.hot.lastModified = "1700706187474.1816";
}
var linkClass = "hover:text-teal-500 text-white";
function Layout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col h-[100vh]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4 bg-teal-800 py-2 px-4 items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: (0, import_routes_gen.route)("/"), className: linkClass, children: "Home" }, void 0, false, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-teal-500", children: "|" }, void 0, false, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: (0, import_routes_gen.route)("/votes"), className: linkClass, children: "Votes" }, void 0, false, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Layout
};
//# sourceMappingURL=/build/_shared/chunk-Z6JKNMAI.js.map
