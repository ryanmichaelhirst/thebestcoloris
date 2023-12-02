var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/.pnpm/@remix-run+dev@2.3.0_typescript@5.3.2/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/.pnpm/@remix-run+dev@2.3.0_typescript@5.3.2/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/.pnpm/@remix-run+dev@2.3.0_typescript@5.3.2/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import { Links, Meta, Scripts, LiveReload } from "@remix-run/react";

// tailwind.css
var tailwind_default = "/build/_assets/tailwind-2D77OW7K.css";

// app/routes/_layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => Layout
});
import { Outlet } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { route } from "routes-gen";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var linkClass = "hover:text-teal-500 text-white";
function Layout() {
  return /* @__PURE__ */ jsxDEV2("div", { className: "flex flex-col h-[100vh]", children: [
    /* @__PURE__ */ jsxDEV2("div", { className: "flex space-x-4 bg-teal-800 py-2 px-4 items-center justify-center", children: [
      /* @__PURE__ */ jsxDEV2(Link, { to: route("/"), className: linkClass, children: "Home" }, void 0, !1, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("p", { className: "text-xl text-teal-500", children: "|" }, void 0, !1, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Link, { to: route("/votes"), className: linkClass, children: "Votes" }, void 0, !1, {
        fileName: "app/routes/_layout.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
      fileName: "app/routes/_layout.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/root.tsx
import { Toaster } from "react-hot-toast";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV3("html", { children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(Toaster, { position: "top-center" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Layout, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader
});

// app/lib/db.server.ts
import { PrismaClient } from "@prisma/client";
var db = new PrismaClient();

// app/utils/index.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDateTimestamp(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !0
    // Use 12-hour format with am/pm
  }).format(date);
}
function formatDateMMDDYYYY(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

// app/routes/_index.tsx
import { Form } from "@remix-run/react";
import { useEffect, useState } from "react";
import {
  typedjson,
  useTypedActionData,
  useTypedLoaderData
} from "remix-typedjson";
import invariant from "tiny-invariant";
import { toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var loader = async () => {
  let latestVote = await db.vote.findFirstOrThrow({
    orderBy: {
      createdAt: "desc"
    },
    include: {
      geoLocation: {
        select: {
          city: !0,
          stateCode: !0,
          countryCode: !0,
          countryFlag: !0
        }
      }
    }
  }), voteCount = await db.vote.count();
  return typedjson({ latestVote, voteCount });
}, RADAR_API_KEY = "prj_test_sk_f2e275403233a445c71341a35465f040a812452e", action = async (args) => {
  let formData = await args.request.formData(), color = formData.get("color"), comment = formData.get("comment"), author = formData.get("author"), vote = await db.vote.create({
    data: {
      color,
      comment: comment || null,
      author: author || null
    }
  });
  try {
    let geocode = await (await fetch("https://api.radar.io/v1/geocode/ip", {
      headers: {
        Authorization: RADAR_API_KEY
      }
    })).json();
    invariant(geocode.meta.code === 200, "Failed to get geocode");
    let geoLocation = await db.geoLocation.create({
      data: {
        countryCode: geocode.address.countryCode,
        country: geocode.address.country,
        countryFlag: geocode.address.countryFlag,
        state: geocode.address.state,
        stateCode: geocode.address.stateCode,
        city: geocode.address.city,
        postalCode: geocode.address.postalCode,
        ip: geocode.ip,
        voteId: vote.id
      }
    });
  } catch (error) {
    console.log("Error creating GeoLocation record"), console.log(error);
  }
  return typedjson({ vote });
};
function Label(props) {
  return /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-between", children: [
    /* @__PURE__ */ jsxDEV4(
      "label",
      {
        htmlFor: props.htmlFor,
        className: "block text-sm font-medium leading-6 text-gray-900",
        children: props.label
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 113,
        columnNumber: 7
      },
      this
    ),
    props.optional && /* @__PURE__ */ jsxDEV4("span", { className: "text-sm leading-6 text-gray-500", id: "email-optional", children: "Optional" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}
function ColorInput(props) {
  let [selectedColor, setSelectedColor] = useState(
    props.defaultValue ?? "#000000"
  );
  return /* @__PURE__ */ jsxDEV4("div", { className: "relative space-y-1", children: [
    /* @__PURE__ */ jsxDEV4(Label, { htmlFor: "color", label: "Color" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4(
      "div",
      {
        className: "flex items-center justify-center p-2 border border-gray-300 rounded cursor-pointer",
        onClick: () => {
          document.getElementById("color-picker")?.click();
        },
        children: /* @__PURE__ */ jsxDEV4("div", { className: "flex", children: [
          /* @__PURE__ */ jsxDEV4(
            "div",
            {
              className: "w-6 h-6 rounded-full",
              style: { backgroundColor: selectedColor }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 149,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            "input",
            {
              type: "text",
              className: "w-20 ml-2 border-none outline-none text-gray-700 cursor-pointer",
              value: selectedColor,
              readOnly: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 153,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 148,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 142,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV4(
      "input",
      {
        name: "color",
        type: "color",
        id: "color-picker",
        className: "absolute top-0 left-0 opacity-0 cursor-pointer",
        onChange: (e) => {
          let newColor = e.target.value;
          setSelectedColor(newColor);
        },
        value: selectedColor
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 163,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}
function Input(props) {
  return /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4(
      Label,
      {
        htmlFor: props.name,
        label: props.label,
        optional: props.optional
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 183,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV4(
      "input",
      {
        name: props.name,
        className: "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
        placeholder: props.placeholder
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 188,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 182,
    columnNumber: 5
  }, this);
}
function TextArea(props) {
  return /* @__PURE__ */ jsxDEV4("div", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxDEV4(
      Label,
      {
        htmlFor: props.name,
        label: props.label,
        optional: props.optional
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 205,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV4(
      "textarea",
      {
        rows: 2,
        name: props.name,
        className: "block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 210,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 204,
    columnNumber: 5
  }, this);
}
function renderFormToast(submittedColor) {
  toast.custom((t) => /* @__PURE__ */ jsxDEV4(
    "div",
    {
      className: cn(
        t.visible ? "animate-enter" : "animate-leave",
        "flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg w-[300px]"
      ),
      onClick: () => toast.dismiss(t.id),
      children: [
        /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4(
          "div",
          {
            className: "rounded-full p-1",
            style: { background: submittedColor },
            children: /* @__PURE__ */ jsxDEV4(AnimatePresence, { children: /* @__PURE__ */ jsxDEV4(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "3",
                stroke: "white",
                className: "w-4 h-4",
                children: /* @__PURE__ */ jsxDEV4(
                  motion.path,
                  {
                    initial: { pathLength: 0 },
                    animate: { pathLength: 1 },
                    exit: { pathLength: 0 },
                    transition: {
                      type: "tween",
                      duration: 0.5,
                      ease: "easeIn"
                    },
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 243,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 235,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 234,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 229,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 228,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4("p", { className: "text-sm text-gray-900", children: [
          "You're right, ",
          /* @__PURE__ */ jsxDEV4("span", { className: "font-bold", children: submittedColor }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 262,
            columnNumber: 25
          }, this),
          " is the best color"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 261,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 260,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 221,
      columnNumber: 5
    },
    this
  ));
}
function Index() {
  let data = useTypedLoaderData(), actionData = useTypedActionData(), authorName = data.latestVote.author ?? "Anonymous", theBestColor = data.latestVote.color, commentDash = data.latestVote.comment ? "-" : "", comment = data.latestVote.comment ? `"${data.latestVote.comment}"` : "";
  return useEffect(() => {
    actionData?.vote.color && renderFormToast(actionData.vote.color);
  }, [actionData]), /* @__PURE__ */ jsxDEV4(
    "div",
    {
      className: "flex flex-col h-full p-8 space-y-4",
      style: { background: theBestColor },
      children: /* @__PURE__ */ jsxDEV4("div", { className: "container mx-auto lg:px-72 space-y-3", children: [
        /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxDEV4("div", { className: "space-y-2 p-4 bg-white rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsxDEV4("h1", { className: "text-3xl", children: "THE BEST COLOR IS" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 293,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-center space-x-2 mt-1", children: [
            /* @__PURE__ */ jsxDEV4(
              "div",
              {
                className: "rounded-full h-8 w-8",
                style: { background: data.latestVote.color }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 295,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV4("p", { className: "text-xl", children: data.latestVote.color }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 299,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 294,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 292,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 291,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "rounded-lg shadow-lg border border-gray-100 bg-white text-gray-900", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "border-b border-gray-500", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-between px-4 py-1", children: [
            /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-600", children: [
              "Submission #",
              data.voteCount
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 308,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 307,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxDEV4("div", { className: "rounded text-white text-xs bg-teal-800 py-0.5 px-1", children: [
                data.latestVote.geoLocation?.city,
                ",",
                " ",
                data.latestVote.geoLocation?.stateCode
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 311,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV4("p", { className: "text-lg", children: data.latestVote.geoLocation?.countryFlag }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 315,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 310,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 306,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 305,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxDEV4("p", { children: comment }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 323,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV4("p", { className: "font-semibold", children: [
              commentDash,
              " ",
              authorName
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 324,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-600", children: formatDateMMDDYYYY(data.latestVote.createdAt) }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 327,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 322,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 304,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "rounded shadow space-y-2 p-4 bg-white", children: [
          /* @__PURE__ */ jsxDEV4("p", { className: "text-slate-500 text-center text-sm", children: "Hm that doesn't look right. The best color is actually..." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 334,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV4(Form, { method: "post", className: "flex flex-col space-y-4", children: [
            /* @__PURE__ */ jsxDEV4(ColorInput, { defaultValue: theBestColor }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 338,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV4(TextArea, { label: "Comment", name: "comment", optional: !0 }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 339,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV4(Input, { label: "Your Name", name: "author", optional: !0 }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 340,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV4(
              "button",
              {
                type: "submit",
                className: "text-sm rounded py-2 px-4 text-white hover:opacity-60 bg-teal-800",
                children: "Submit"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 341,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 337,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 333,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 290,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 286,
      columnNumber: 5
    },
    this
  );
}

// app/routes/votes/index.tsx
var votes_exports = {};
__export(votes_exports, {
  default: () => Votes,
  loader: () => loader2
});

// app/components/pagination/index.tsx
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link as Link2 } from "@remix-run/react";
import { route as route2 } from "routes-gen";

// app/components/pagination/usePagination.ts
import { useMemo } from "react";
var DOTS = "...", range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}, usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}) => useMemo(() => {
  let totalPageCount = Math.ceil(totalCount / pageSize);
  if (siblingCount + 5 >= totalPageCount)
    return range(1, totalPageCount);
  let leftSiblingIndex = Math.max(currentPage - siblingCount, 1), rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPageCount
  ), shouldShowLeftDots = leftSiblingIndex > 2, shouldShowRightDots = rightSiblingIndex < totalPageCount - 2, firstPageIndex = 1, lastPageIndex = totalPageCount;
  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount;
    return [...range(1, leftItemCount), DOTS, totalPageCount];
  }
  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount, rightRange = range(
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

// app/components/pagination/index.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var currentClass = "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", defaultClass = "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0";
function PageButton(props) {
  return /* @__PURE__ */ jsxDEV5(
    Link2,
    {
      to: route2("/votes") + "?" + new URLSearchParams({ page: String(props.page) }),
      "aria-current": "page",
      className: cn(
        props.page === props.currentPage ? currentClass : defaultClass,
        "relative inline-flex items-center px-4 py-2 text-sm font-medium"
      ),
      children: props.page
    },
    void 0,
    !1,
    {
      fileName: "app/components/pagination/index.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}
function Pagination(props) {
  let numPages = Math.ceil(props.total / props.perPage), startIndex = (props.page - 1) * props.perPage + 1, endIndex = Math.min(props.page * props.perPage, props.total), paginationRange = usePagination({
    currentPage: props.page,
    pageSize: props.perPage,
    totalCount: props.total
  });
  return /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-1 justify-between sm:hidden", children: [
      /* @__PURE__ */ jsxDEV5(
        "a",
        {
          href: "#",
          className: "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
          children: "Previous"
        },
        void 0,
        !1,
        {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 48,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        "a",
        {
          href: "#",
          className: "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
          children: "Next"
        },
        void 0,
        !1,
        {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 54,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/pagination/index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-gray-700", children: [
        "Showing ",
        /* @__PURE__ */ jsxDEV5("span", { className: "font-medium", children: startIndex }, void 0, !1, {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this),
        " to",
        " ",
        /* @__PURE__ */ jsxDEV5("span", { className: "font-medium", children: endIndex }, void 0, !1, {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        " of",
        " ",
        /* @__PURE__ */ jsxDEV5("span", { className: "font-medium", children: props.total }, void 0, !1, {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        " results"
      ] }, void 0, !0, {
        fileName: "app/components/pagination/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/pagination/index.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5(
        "nav",
        {
          className: "isolate inline-flex -space-x-px rounded-md shadow-sm",
          "aria-label": "Pagination",
          children: [
            /* @__PURE__ */ jsxDEV5(
              Link2,
              {
                to: route2("/votes") + "?" + new URLSearchParams({ page: String(props.page - 1) }),
                className: cn(
                  props.page === 1 && "pointer-events-none opacity-30",
                  "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                ),
                children: [
                  /* @__PURE__ */ jsxDEV5("span", { className: "sr-only", children: "Previous" }, void 0, !1, {
                    fileName: "app/components/pagination/index.tsx",
                    lineNumber: 85,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV5(ChevronLeftIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/components/pagination/index.tsx",
                    lineNumber: 86,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/pagination/index.tsx",
                lineNumber: 74,
                columnNumber: 13
              },
              this
            ),
            paginationRange?.map((pageNumber, idx) => typeof pageNumber == "string" ? /* @__PURE__ */ jsxDEV5(
              "div",
              {
                className: cn(
                  defaultClass,
                  "relative inline-flex items-center px-4 py-2 text-sm font-medium"
                ),
                children: DOTS
              },
              idx,
              !1,
              {
                fileName: "app/components/pagination/index.tsx",
                lineNumber: 93,
                columnNumber: 19
              },
              this
            ) : /* @__PURE__ */ jsxDEV5(
              PageButton,
              {
                page: pageNumber,
                currentPage: props.page
              },
              idx,
              !1,
              {
                fileName: "app/components/pagination/index.tsx",
                lineNumber: 106,
                columnNumber: 17
              },
              this
            )),
            /* @__PURE__ */ jsxDEV5(
              Link2,
              {
                to: route2("/votes") + "?" + new URLSearchParams({ page: String(props.page + 1) }),
                className: cn(
                  props.page === numPages && "pointer-events-none opacity-30",
                  "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                ),
                children: [
                  /* @__PURE__ */ jsxDEV5("span", { className: "sr-only", children: "Next" }, void 0, !1, {
                    fileName: "app/components/pagination/index.tsx",
                    lineNumber: 124,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV5(ChevronRightIcon, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, !1, {
                    fileName: "app/components/pagination/index.tsx",
                    lineNumber: 125,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/pagination/index.tsx",
                lineNumber: 113,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/pagination/index.tsx",
          lineNumber: 70,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/pagination/index.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/pagination/index.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/pagination/index.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/votes/index.tsx
import { useSearchParams } from "@remix-run/react";
import { typedjson as typedjson2, useTypedLoaderData as useTypedLoaderData2 } from "remix-typedjson";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var perPage = 20, loader2 = async (args) => {
  let url = new URL(args.request.url), page = parseInt(url.searchParams.get("page") ?? "1"), votes = await db.vote.findMany({
    take: (page - 1) * perPage + perPage,
    skip: (page - 1) * perPage,
    orderBy: {
      createdAt: "desc"
    },
    include: {
      geoLocation: {
        select: {
          countryFlag: !0,
          city: !0,
          stateCode: !0
        }
      }
    }
  }), voteCount = await db.vote.count();
  return typedjson2({ votes, voteCount });
};
function Votes() {
  let data = useTypedLoaderData2(), [searchParams] = useSearchParams(), page = parseInt(searchParams.get("page") ?? "1");
  return /* @__PURE__ */ jsxDEV6("div", { className: "container mx-auto pt-6 lg:px-40 space-y-3", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxDEV6("h1", { className: "text-3xl", children: "Votes" }, void 0, !1, {
        fileName: "app/routes/votes/index.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { className: "text-gray-500 text-sm", children: [
        "(",
        data.voteCount,
        ")"
      ] }, void 0, !0, {
        fileName: "app/routes/votes/index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/votes/index.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "border rounded-lg shadow-lg border-gray-200 p-4", children: [
      /* @__PURE__ */ jsxDEV6("ul", { role: "list", className: "space-y-6", children: data.votes.map((vote, idx) => {
        let author = vote.author ?? "Anonymous";
        return /* @__PURE__ */ jsxDEV6("li", { className: "relative flex gap-x-4", children: [
          /* @__PURE__ */ jsxDEV6(
            "div",
            {
              className: cn(
                idx === data.votes.length - 1 ? "h-6" : "-bottom-6",
                "absolute left-0 top-0 flex w-6 justify-center"
              ),
              children: /* @__PURE__ */ jsxDEV6("div", { className: "w-px bg-gray-200" }, void 0, !1, {
                fileName: "app/routes/votes/index.tsx",
                lineNumber: 59,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/votes/index.tsx",
              lineNumber: 53,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6("div", { className: "relative flex h-6 w-6 flex-none items-center justify-center bg-white", children: /* @__PURE__ */ jsxDEV6(
            "div",
            {
              className: cn(
                "h-3 w-3 rounded-full",
                vote.color === "#ffffff" && "ring-1 ring-gray-200"
              ),
              style: { background: vote.color }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/votes/index.tsx",
              lineNumber: 62,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { className: "flex-auto py-0.5 text-xs leading-5 text-gray-500", children: [
            /* @__PURE__ */ jsxDEV6("span", { className: "font-medium text-gray-900", children: author }, void 0, !1, {
              fileName: "app/routes/votes/index.tsx",
              lineNumber: 71,
              columnNumber: 19
            }, this),
            " ",
            "changed the color to",
            " ",
            /* @__PURE__ */ jsxDEV6("span", { className: "font-medium text-gray-900", children: vote.color }, void 0, !1, {
              fileName: "app/routes/votes/index.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { className: "text-xs leading-5 text-gray-500", children: [
            vote.geoLocation?.city,
            ", ",
            vote.geoLocation?.stateCode
          ] }, void 0, !0, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { children: vote.geoLocation?.countryFlag }, void 0, !1, {
            fileName: "app/routes/votes/index.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6(
            "time",
            {
              dateTime: vote.createdAt.toISOString(),
              className: "text-xs leading-5 text-gray-500",
              children: formatDateTimestamp(vote.createdAt)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/votes/index.tsx",
              lineNumber: 81,
              columnNumber: 17
            },
            this
          )
        ] }, vote.uid, !0, {
          fileName: "app/routes/votes/index.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this);
      }) }, void 0, !1, {
        fileName: "app/routes/votes/index.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "sticky bottom-0", children: /* @__PURE__ */ jsxDEV6(Pagination, { total: data.voteCount, page, perPage }, void 0, !1, {
        fileName: "app/routes/votes/index.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/votes/index.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/votes/index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/votes/index.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-CXDW6XN5.js", imports: ["/build/_shared/chunk-BA6NHEY4.js", "/build/_shared/chunk-AD32ER7E.js", "/build/_shared/chunk-H5ZE7JVG.js", "/build/_shared/chunk-NRH5LTJ7.js", "/build/_shared/chunk-O4OKU2LD.js", "/build/_shared/chunk-XMMNNE6D.js", "/build/_shared/chunk-K6PKGSTD.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-LMHXZY6G.js", imports: ["/build/_shared/chunk-Z6JKNMAI.js", "/build/_shared/chunk-VWC6U5UK.js", "/build/_shared/chunk-5BOSOAUI.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YPRXSQ25.js", imports: ["/build/_shared/chunk-DSJDBLHY.js", "/build/_shared/chunk-SE6AVHRO.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_layout": { id: "routes/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_layout-S2DV7ME3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/votes": { id: "routes/votes", parentId: "root", path: "votes", index: void 0, caseSensitive: void 0, module: "/build/routes/votes-VYE2S4QF.js", imports: ["/build/_shared/chunk-DSJDBLHY.js", "/build/_shared/chunk-SE6AVHRO.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "e77b445f", hmr: { runtime: "/build/_shared/chunk-XMMNNE6D.js", timestamp: 1700710249850 }, url: "/build/manifest-E77B445F.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/votes": {
    id: "routes/votes",
    parentId: "root",
    path: "votes",
    index: void 0,
    caseSensitive: void 0,
    module: votes_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
