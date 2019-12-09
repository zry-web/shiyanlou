import { get } from "../../utils/reqpages";
export function picMessage(page) {
  return get("/api/course/bootcamp", {
    page
  });
}
