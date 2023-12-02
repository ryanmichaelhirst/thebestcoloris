import {
  __commonJS
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/.pnpm/routes-gen@0.6.1/node_modules/routes-gen/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/routes-gen@0.6.1/node_modules/routes-gen/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function route(path, params) {
      if (params) {
        const segments = path.split(/\/+/).map((segment) => {
          if (segment.startsWith(":")) {
            const key = segment.replace(":", "").replace("?", "");
            if (key in params) {
              return params[key];
            }
            if (segment.endsWith("?")) {
              return null;
            }
          }
          return segment;
        });
        return segments.filter((value) => value != null).join("/");
      }
      return path;
    }
    exports.route = route;
  }
});

export {
  require_dist
};
//# sourceMappingURL=/build/_shared/chunk-5BOSOAUI.js.map
