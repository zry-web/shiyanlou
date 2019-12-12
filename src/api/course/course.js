import { post, get } from "../../utils/request";
export function getCourse(page, tag, category) {
  if (tag == "全部") {
    tag = "";
  }
  if (category == "全部") {
    category = "";
  }
  // if (!page) {
  //     page = '1'
  // }
  var api = "/api/course/?";
  if (page) {
    api = api + "page=" + page + "&";
  }
  if (tag) {
    api = api + "tag=" + tag + "&";
  }
  if (category) {
    api = api + "category=" + category;
  }
  return get(api);
}

export function getCourseDetail(name) {
  var api = "/api/coursedetail?title=" + name;
  return get(api);
}

export function addUserList(list) {
  return post("/UserCourse", list);
}
