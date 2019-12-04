import { post, get } from "../../utils/request";
import axios from "axios";
export function login(logdata) {
  return post("/user/p", lodata);
}
export function reg() {
  return post("/user/p");
}
