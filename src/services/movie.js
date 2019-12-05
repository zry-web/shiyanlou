import { post } from "../utils/request";

/**
 * 获取所有的热映信息
 */
export function allMessage() {
  return post("/api/v2/proxy", {
    url: "http://122.51.169.217:3000/api/course"
  });
}

/**
 * 根据id获取影片详情
 * @param {*} id
 */
// export function movie(id) {
//   return post("/api/v2/proxy", {
//     url:
//       "https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=" +
//       id
//   });
// }
