import { get, post, put } from "../../utils/request";
export function getUserData(token) {
  return post("user/list", token);
}

export function save(id) {
  return post("/UserCourse", id);
}

export function saves(id) {
  return get(`/UserCourse?id=${id}`);
}
export function putUserData(token, list) {
  return put(`user/${token}`, list);
}
