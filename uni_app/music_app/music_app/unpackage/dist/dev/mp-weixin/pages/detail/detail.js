"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
var api_index = require("../../api/index.js");
require("../../util/request.js");
console.log(common_vendor.defineComponent, "defineComponent");
let detailId = "";
const _sfc_main = common_vendor.defineComponent({
  name: "songDetail",
  onLoad(option) {
    detailId = option.detailId;
  },
  setup() {
    function goBack() {
      console.log(common_vendor.index, "uni");
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
    let data = common_vendor.reactive({
      playlist: {
        creator: {}
      },
      privileges: [],
      musicList: [
        {
          name: "\u534E\u5C14\u5179"
        },
        {
          name: "\u674E\u767D"
        }
      ]
    });
    function getRecommendDetail() {
      console.log(detailId, "detailId");
      api_index.getRecommendDetailApi({
        id: detailId
      }).then((res) => {
        console.log(res, "hhhhhhhh");
        if (res.code !== 200)
          return;
        data.playlist = res.playlist;
        data.privileges = res.privileges;
      });
    }
    function toChineseNum(num) {
      const n = new Number(num / 1e4);
      return n.toFixed(1) + "\u4E07";
    }
    common_vendor.onMounted(() => {
      getRecommendDetail();
    });
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      toChineseNum,
      goBack
    });
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.playlist.coverImgUrl,
    b: common_vendor.o((...args) => _ctx.goBack && _ctx.goBack(...args)),
    c: _ctx.playlist.coverImgUrl,
    d: common_vendor.t(_ctx.toChineseNum(_ctx.playlist.playCount)),
    e: common_vendor.t(_ctx.playlist.name),
    f: common_vendor.t(_ctx.playlist.name),
    g: common_vendor.t(_ctx.playlist.name),
    h: common_vendor.t(_ctx.playlist.name),
    i: _ctx.playlist.creator.avatarUrl,
    j: common_vendor.t(_ctx.playlist.creator.nickname),
    k: _ctx.playlist.description,
    l: common_vendor.t(_ctx.playlist.commentCount),
    m: common_vendor.t(_ctx.playlist.shareCount),
    n: common_vendor.f(_ctx.musicList, (item, index, i0) => {
      return {
        a: index
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3e159eb4"]]);
wx.createPage(MiniProgramPage);
