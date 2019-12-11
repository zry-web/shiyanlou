import { get, post, put } from "../../utils/request";
export function getUserData(token) {
  return post("user/list", token);
}

export function putUserData(token, list) {
  return put(`user/${token}`, list);
}
