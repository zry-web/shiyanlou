import { get } from "../../utils/request";
export function getData() {
  return get("/api/loop");
}
