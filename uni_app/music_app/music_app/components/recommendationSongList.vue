<template>
  <div class="recommendationSongList">
    <div class="titleHead">
      <div class="title">推荐歌单</div>
      <div class="more">更多
        <span class="iconfont icon-gengduo"></span>
      </div>
    </div>
    <div class="songList">
      <div class="songItem" v-for="(item, index) in list" :key="index" @click="toDetail(item.id)">
        <div class="songCount">
          <img :src="item.picUrl" class="songImg">
          <span class="playWrap">
            <span class="playIcon iconfont icon-bofang"></span>
            <span class="playCount">{{toChineseNum(item.playCount)}}</span>
          </span>
        </div>
        <div class="songName maxLineTwo">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getRecommendListApi, getRecommendDetailApi,getSongUrlApi } from '../api/index'
  export default {
    name: "recommendationSongList",
	data() {
		return {
			list: []
		}
	},
	methods: {
		toChineseNum(num) {
			const n = new Number(num/10000)
			return n.toFixed(1) + '万'
		},
		toDetail(id) {
			uni.navigateTo({
				url: `/pages/detail/detail?detailId=${id}`
			})
		},
		getRecommendList() {
			getRecommendListApi({limit: 20}).then((res) => {
			  if(res.code !== 200) return
			  console.log(res);
			  this.list = res.result
			})
		}
	},
	mounted() {
		this.getRecommendList()
	}
  };
</script>
<style lang="less" scoped>
.recommendationSongList {
  border-top: 1px solid rgb(220, 220, 220, .4);
  padding: 10px;
  margin-top: 10px;
  border-bottom: 10px solid rgb(220, 220, 220, .4);
}
.titleHead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.title {
  font-weight: bold;
}
.more {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 25px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 20px;
  font-size: 13px;
}
.songList {
  display: flex;
  overflow-x: scroll;
  padding: 0 10px;
  margin-top: 20px;

}
.songItem {
  border-radius: 20px;
  margin-right: 15px;
}
.songCount {
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 20px;
}
.songImg {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.playWrap {
  position: absolute;
  top: 5px;
  right: 7px;
  color: rgb(255, 255, 255);
  line-height: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 3px;
}
.playIcon {
  font-size: 13px;
  margin-right: 5px;
}
.playCount {
  font-size: 12px;
}
.songName {
  font-size: 13px;
  line-height: 20px;
}
</style>