import { formatDistanceToNowStrict } from "date-fns";
import { id } from "date-fns/locale";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function relativeDate(from: Date) {
  return formatDistanceToNowStrict(from, { addSuffix: true, locale: id });
}
