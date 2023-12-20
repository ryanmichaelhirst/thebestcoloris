import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import invariant from "tiny-invariant";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function castToDateOrThrow(value: Date | string) {
  const _date = typeof value === "string" ? new Date(value) : value;
  invariant(_date instanceof Date, "Expected a Date");

  return _date;
}

export function formatDateTimestamp(value: Date | string) {
  const date = castToDateOrThrow(value);

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour format with am/pm
  }).format(date);
}

export function formatRelativeTime(value: Date | string) {
  const date = castToDateOrThrow(value);

  const now = new Date();
  // @ts-expect-error Typescript complaining about numerics
  const diffInSeconds = Math.floor((now - date) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffInSeconds < 60) {
    return rtf
      .format(-diffInSeconds, "second")
      .replace("seconds", "sec.")
      .replace("second", "sec.");
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    return rtf
      .format(-diffInMinutes, "minute")
      .replace("minutes", "min.")
      .replace("minute", "min.");
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600);
    return rtf
      .format(-diffInHours, "hour")
      .replace("hours", "hr.")
      .replace("hour", "hr.");
  } else {
    const diffInDays = Math.floor(diffInSeconds / 86400);
    return rtf.format(-diffInDays, "day");
  }
}
