import { get, post } from "../../utils/request";
export function getUserData(token) {
  return post("user/list", token);
}
