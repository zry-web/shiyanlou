import { get } from "../../utils/request";
export function getData() {
  return get("/api/loop");
}
export function pathDetail(data) {
  return get(`/api/PathCourseDetail?pathCourseTit=` + data);
}
export function bootcampDetail(msg) {
  return get(`/api/coursedetail?title=` + msg);
}
