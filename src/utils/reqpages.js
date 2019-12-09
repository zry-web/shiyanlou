import axios from "axios";

const service = axios.create({
  timeout: 5000, // request timeout,
  baseURL: "http://122.51.169.217:3000"
});

/**
 * 发起post请求
 * @param {*} url
 * @param {*} data
 */
export function post(url, data) {
  return service.post(url, data);
}

/**
 * 发起get请求
 * @param {*} url
 * @param {*} params
 */
export function get(url, params) {
  return service.get(url, {
    params
  });
}

export default service;
