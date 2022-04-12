
function toJson(data: any) {
  return JSON.parse(JSON.stringify(data))
}
import {
  request
} from "../util/request";
// 获取 每日推荐歌单
export function getRecommendListApi(data:any) {
  return request({
      url: '/personalized',
      data
  })
}
// 获取歌单 详情
export function getRecommendDetailApi(data:any) {
  return request({
      url: '/playlist/detail',
      data
  })
}
// 获取 banner 图片
export function getBannerApi(data:any) {
  console.log(data,'data')
  return request({
      url: '/banner',
      method: 'post',
      data: toJson(data)
  })
}
// 获取 APP首页圆形图标入口列表
export function getApplicationListApi() {
  return request({
      url: '/homepage/dragon/ball',
      method: 'post'
  })
}
export function getSongUrlApi(data:any) {
  const a =  request({
      url: '/song/url',
      data
  })
  console.log(a)

}