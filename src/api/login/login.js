import { post, get } from "../../utils/request";
import axios from "axios";

export function login(logdata) {
  return post("/user/login", logdata);
}
export function reg(data) {
  return post("/user/save");
}

