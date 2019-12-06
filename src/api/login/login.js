import { post, get } from "../../utils/request";
import axios from "axios";

export function login(logdata) {
  return post("/user/login", logdata);
}
export function reg(regdata) {
  return post("/user/save", regdata);
}
export function getuser(token) {
  return post("/user/list", token);
}
