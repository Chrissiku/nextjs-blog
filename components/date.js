import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  console.log("date", date);
  console.log("dateString", dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
