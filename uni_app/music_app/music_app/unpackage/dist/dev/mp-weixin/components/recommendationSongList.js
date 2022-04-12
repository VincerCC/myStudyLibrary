"use strict";
var common_vendor = require("../common/vendor.js");
var api_index = require("../api/index.js");
require("../util/request.js");
const _sfc_main = {
  name: "recommendationSongList",
  data() {
    return {
      list: []
    };
  },
  methods: {
    toChineseNum(num) {
      const n = new Number(num / 1e4);
      return n.toFixed(1) + "\u4E07";
    },
    toDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/detail/detail?detailId=${id}`
      });
    },
    getRecommendList() {
      api_index.getRecommendListApi({ limit: 20 }).then((res) => {
        if (res.code !== 200)
          return;
        console.log(res);
        this.list = res.result;
      });
    }
  },
  mounted() {
    this.getRecommendList();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.picUrl,
        b: common_vendor.t($options.toChineseNum(item.playCount)),
        c: common_vendor.t(item.name),
        d: index,
        e: common_vendor.o(($event) => $options.toDetail(item.id))
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ffbb71b2"]]);
wx.createComponent(Component);
