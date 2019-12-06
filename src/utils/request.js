import axios from "axios";

const instance = axios.create({
  timeout: 5000, // 超时时间
  baseURL: "http://122.51.169.217:3000" // 表示web服务器的根地址
});

export function get(url, config) {
  return instance.get(url, config);
}

export function post(url, data, config) {
  return instance.post(url, data, config);
}
