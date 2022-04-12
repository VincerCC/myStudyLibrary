function toJson(params) {
  return JSON.parse(JSON.stringify(params))
}
import {
  request
} from "../util/request";
// 获取首页信息
export function getHighGualityApi(params) {
  return request({
      url: '/api/top/playlist/highquality',
      params
  })
}
// 获取歌单 详情
export function getHighQualityDetailApi(params) {
  return request({
      url: '/api/playlist/detail',
      params
  })
}
// 获取 banner 图片
export function getBannerApi(params) {
  const data = toJson(params)
  return request({
      url: '/api/banner',
      method: 'post',
      data
  })
}
// 获取 APP首页圆形图标入口列表
export function getApplicationListApi() {
  return request({
      url: '/api/homepage/dragon/ball',
      method: 'post'
  })
}
export function getSongUrlApi(params) {
  const a =  request({
      url: '/api/song/url',
      params
  })
  console.log(a)

}