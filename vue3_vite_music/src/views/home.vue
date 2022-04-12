<template>
  <div class="home">
    <Header :unReadNum="88">
      <template v-slot:center>
        <div class="search">
          <span class="searchIcon iconfont icon-sousuo1"></span>
          <span class="searchText">搜索</span>
        </div>
      </template>
      <template v-slot:right>
        <span class="icon iconfont icon-maikefeng"></span>
      </template>
    </Header>
    <div class="page">
      <!-- 轮播图 -->
      <Banner :imageList="bannerImageList" @toDetail="toDetail"/>
      <ApplicationList :applicationList="applicationList"/>
      <RecommendationSongList />

    </div>

  </div>
</template>

<script lang="ts">
  import Header from '../components/header.vue';
  import ApplicationList from '../components/applicationList.vue';
  import RecommendationSongList from '../components/recommendationSongList.vue';
  import Banner from '../components/banner.vue';
  import { getBannerApi, getApplicationListApi } from '../api/index'
  import { defineComponent, ref, onMounted } from "vue";
  export default defineComponent({
    name: "home",
    components: {
      Header,
      ApplicationList,
      RecommendationSongList,
      Banner
    },
    setup() {
      // 获取 banner 轮播图
      let bannerImageList = ref([])
      function getBanner() {
        return getBannerApi({type: 2}).then((res) => {
          if(res.code !== 200) return
          bannerImageList.value = res.banners.map((item) => {
            return {
              url: item.pic,
              id: item.bannerId,
              title: item.typeTitle
            }
          })
        })
      }

      // 获取 APP首页圆形图标入口列表
      let applicationList = ref([])
      function getApplicationList() {
        return getApplicationListApi().then(res => {
          if(res.code !== 200) return
          applicationList.value = res.data
        })
      }
      onMounted(async () => {
        await getBanner()
        await getApplicationList()
      })
      const toDetail = (id) => {
        console.log(id)
      }
      return {
        // banner
        bannerImageList,
        toDetail,
        // 首页应用
        applicationList
      }
    },
  });
</script>
<style lang="" scoped>
.page {
  padding-top: 50px;
  /* padding-left: 10px;
  padding-right: 10px; */
  padding-bottom: 60px;
}
.tabItem {
  margin: 0 5px;
  color: gray;
}
.active {
  position: relative;
  color: #000000;
  font-size: 0.4rem;
}
.active::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background-color: #d71345;
  left: 0;
  bottom: -5px;
}
.search {
  width: 75%;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background-color: rgb(250, 250, 250);
  font-size: 16px;
}
.searchIcon {
  font-size: 20px;
  margin: 10px;
  color: #ccc;
}
.searchText {
  margin-left: 5px;
  color: #ccc;
}
.icon {
  font-size: 22px;
}

</style>