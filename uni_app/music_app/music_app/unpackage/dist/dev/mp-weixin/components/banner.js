"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "banner",
  props: {
    "imageList": {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    console.log(this.imageList);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.imageList, (item, index, i0) => {
      return {
        a: item.url,
        b: index,
        c: common_vendor.o(($event) => _ctx.toDetail(item.id))
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1f25ebb2"]]);
wx.createComponent(Component);
