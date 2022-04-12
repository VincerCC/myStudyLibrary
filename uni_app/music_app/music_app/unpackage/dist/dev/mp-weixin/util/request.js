"use strict";
var common_vendor = require("../common/vendor.js");
const baseUrl = "http://localhost:4000";
function request(config) {
  console.log(config);
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + config.url,
      data: config.data,
      header: config.header,
      method: config.method || "POST",
      success: (res) => {
        resolve(res.data);
      },
      fail: (error) => {
        reject(error);
      }
    });
  });
}
exports.request = request;
