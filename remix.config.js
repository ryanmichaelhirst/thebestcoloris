/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverModuleFormat: "cjs",
  serverPlatform: "node",
  tailwind: true,
  ignoredRouteFiles: ["**/.*"],
  // Usage with cjs: https://github.com/sergiodxa/remix-utils?tab=readme-ov-file#usage-with-cjs
  serverDependenciesToBundle: [
    /^remix-utils.*/,
    // If you installed is-ip optional dependency you will need these too
    "is-ip",
    "ip-regex",
    "super-regex",
    "clone-regexp",
    "function-timeout",
    "time-span",
    "convert-hrtime",
    "is-regexp",
  ],
};
