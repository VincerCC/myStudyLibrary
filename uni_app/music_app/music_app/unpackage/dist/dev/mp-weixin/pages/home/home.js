"use strict";
var api_index = require("../../api/index.js");
var common_vendor = require("../../common/vendor.js");
require("../../util/request.js");
const myHeader = () => "../../components/header.js";
const Banner = () => "../../components/banner.js";
const ApplicationList = () => "../../components/applicationList.js";
const RecommendationSongList = () => "../../components/recommendationSongList.js";
const _sfc_main = {
  name: "home",
  components: {
    myHeader,
    Banner,
    ApplicationList,
    RecommendationSongList
  },
  data() {
    return {
      bannerImageList: [],
      applicationList: []
    };
  },
  methods: {
    toDetail() {
      console.log("\u54C8\u54C8\u54C8");
    },
    getBannerImageList() {
      return api_index.getBannerApi({ type: 2 }).then((res) => {
        console.log(res);
        if (res.code !== 200)
          return;
        this.bannerImageList = res.banners.map((item) => {
          return {
            url: item.pic,
            id: item.bannerId,
            title: item.typeTitle
          };
        });
      });
    },
    getApplicationList() {
      return api_index.getApplicationListApi().then((res) => {
        if (res.code !== 200)
          return;
        this.applicationList = res.data;
      });
    }
  },
  async onLoad() {
    this.getBannerImageList();
    this.getApplicationList();
  }
};
if (!Array) {
  const _component_myHeader = common_vendor.resolveComponent("myHeader");
  const _component_Banner = common_vendor.resolveComponent("Banner");
  const _component_ApplicationList = common_vendor.resolveComponent("ApplicationList");
  const _component_RecommendationSongList = common_vendor.resolveComponent("RecommendationSongList");
  (_component_myHeader + _component_Banner + _component_ApplicationList + _component_RecommendationSongList)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      unReadNum: 88
    }),
    b: common_vendor.o($options.toDetail),
    c: common_vendor.p({
      imageList: $data.bannerImageList
    }),
    d: common_vendor.p({
      applicationList: $data.applicationList
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-92bb8f34"]]);
wx.createPage(MiniProgramPage);
