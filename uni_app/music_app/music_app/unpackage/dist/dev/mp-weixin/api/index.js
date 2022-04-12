"use strict";
var util_request = require("../util/request.js");
function toJson(data) {
  return JSON.parse(JSON.stringify(data));
}
function getRecommendListApi(data) {
  return util_request.request({
    url: "/personalized",
    data
  });
}
function getRecommendDetailApi(data) {
  return util_request.request({
    url: "/playlist/detail",
    data
  });
}
function getBannerApi(data) {
  console.log(data, "data");
  return util_request.request({
    url: "/banner",
    method: "post",
    data: toJson(data)
  });
}
function getApplicationListApi() {
  return util_request.request({
    url: "/homepage/dragon/ball",
    method: "post"
  });
}
exports.getApplicationListApi = getApplicationListApi;
exports.getBannerApi = getBannerApi;
exports.getRecommendDetailApi = getRecommendDetailApi;
exports.getRecommendListApi = getRecommendListApi;
