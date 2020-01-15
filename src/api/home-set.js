import request from "../utils/request";

export function getBannerList(params) {
  return request({
    url: '/banner/list',
    method: 'get',
    params
  });
}