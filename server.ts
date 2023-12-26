import { createRequestHandler } from "@remix-run/express";
import express from "express";
import { ServerBuild, broadcastDevReady } from "@remix-run/node";

// notice that the result of `remix build` is "just a module"
import * as _build from "./build/index.js";

const app = express();
app.use(express.static("public"));

const build = _build as any as ServerBuild;
// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  // require the built app so we're ready when the first request comes in
  console.log(`✅ app ready (${NODE_ENV}): http://localhost:${PORT}`);

  if (NODE_ENV === "development") {
    broadcastDevReady(build);
  }
});
