"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "myHeader",
  props: ["unReadNum"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.unReadNum)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b86c55f0"]]);
wx.createComponent(Component);
