import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import invariant from "tiny-invariant";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTimestamp(date: Date | string) {
  let value = date;
  if (typeof date === "string") {
    value = new Date(date);
  }
  invariant(value instanceof Date, "Expected a Date");

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour format with am/pm
  }).format(value);
}

export function formatDateMMDDYYYY(date: Date | string) {
  let value = date;
  if (typeof date === "string") {
    value = new Date(date);
  }
  invariant(value instanceof Date, "Expected a Date");

  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(value);
}
