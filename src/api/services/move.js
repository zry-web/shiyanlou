import { get } from "../../utils/request";

import axios from "axios";

export function allMessage(tags) {
  return get("/api/list", {
    params: tags
  });
}

export function tagMassage() {
  return get("/api/course/bootcamp");
}

export function oneMassage(names) {
  return get("/api/course/bootcamp?category" + names);
}
