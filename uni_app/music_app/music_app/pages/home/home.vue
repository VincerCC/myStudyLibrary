<template>
  <div class="home">
    <myHeader :unReadNum="88">
      <template v-slot:center>
        <div class="search">
          <span class="searchIcon iconfont icon-sousuo1"></span>
          <span class="searchText">搜索</span>
        </div>
      </template>
      <template v-slot:right>
        <span class="icon iconfont icon-maikefeng"></span>
      </template>
    </myHeader>
    <div class="page">
		<!-- 轮播图 -->
		<Banner :imageList="bannerImageList" @toDetail="toDetail"/>
		<ApplicationList :applicationList="applicationList"/>
		<RecommendationSongList />
    </div>
  </div>
</template>

<script>
import myHeader from '../../components/header.vue'
import Banner from '../../components/banner.vue';
import ApplicationList from '../../components/applicationList.vue';
import RecommendationSongList from '../../components/recommendationSongList.vue';

import { getBannerApi, getApplicationListApi } from '../../api/index'
export default {
	name: 'home',
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
		}
	},
	methods: {
		toDetail() {
			console.log('哈哈哈')
		},
		getBannerImageList(){
			return getBannerApi({type: 2}).then((res) => {
				console.log(res)
			  if(res.code !== 200) return
			  this.bannerImageList = res.banners.map((item) => {
				return {
				  url: item.pic,
				  id: item.bannerId,
				  title: item.typeTitle
				}
			  })
			})
		},
		getApplicationList() {
			return getApplicationListApi().then((res) => {
			  if(res.code !== 200) return
			  this.applicationList = res.data
			})
		  }
	},
	async onLoad() {
	  this.getBannerImageList()
	  this.getApplicationList()
	  
	}
}
</script>
<style lang="less" scoped>

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