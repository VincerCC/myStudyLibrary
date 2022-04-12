"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "applicationList",
  props: {
    "applicationList": {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toAppDetail() {
      common_vendor.index.showToast({
        title: "\u522B\u50AC\uFF0Cwdnmd\uFF0C\u529F\u80FD\u8FD8\u6CA1\u505A\uFF01",
        icon: "none"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.applicationList, (item, index, i0) => {
      return {
        a: item.iconUrl,
        b: common_vendor.t(item.name),
        c: common_vendor.o(($event) => $options.toAppDetail(item.url)),
        d: index
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1e922ea3"]]);
wx.createComponent(Component);
