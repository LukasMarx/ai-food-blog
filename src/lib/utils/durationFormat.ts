import { formatDistance } from "date-fns";
import { parse, toSeconds } from "iso8601-duration";

export function durationFormat(duration: string) {
  return formatDistance(0, toSeconds(parse(duration)) * 1000, {
    includeSeconds: true,
  });
}
