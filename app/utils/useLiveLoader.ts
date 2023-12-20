import {
  useLoaderData,
  useResolvedPath,
  useRevalidator,
} from "@remix-run/react";
import { useEffect } from "react";
import { useEventSource } from "remix-utils/sse/react";

// Server-sent events example taken from https://github.com/moishinetzer/remix-live-loader
export function useLiveLoader<T>() {
  const path = useResolvedPath("./stream");
  const data = useEventSource(path.pathname);

  const { revalidate } = useRevalidator();

  useEffect(() => {
    revalidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- "we know better" — Moishi
  }, [data]);

  return useLoaderData<T>();
}