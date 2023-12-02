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

app.listen(3000, () => {
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }

  console.log("App listening on http://localhost:3000");
});
