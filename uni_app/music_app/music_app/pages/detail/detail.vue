<template>
  <view class="songDetail">
    <view class="detailTop">
      <image :src="playlist.coverImgUrl" class="coverImg" />
      <view class="navBar">
        <view class="leftBar">
          <text class="icon iconfont icon-zhixiangzuo" @click="goBack"></text>
          <text class="title ml20">歌单</text>
        </view>
        <view class="rightBar">
          <text class="icon iconfont icon-sousuo1"></text>
          <text class="icon iconfont icon-gengduo-shuxiang ml20"></text>
        </view>
      </view>
      <view class="detailInfo">
        <view class="infoLeft">
          <image :src="playlist.coverImgUrl" />
          <text class="playWrap">
            <text class="playIcon iconfont icon-bofang"></text>
            <text class="playCount">{{toChineseNum(playlist.playCount)}}</text>
          </text>
        </view>
        <view class="infoRight">
          <view class="infoTitle maxLineTwo">{{playlist.name}}{{playlist.name}}{{playlist.name}}{{playlist.name}}</view>
          <view class="infoPerson">
            <image :src="playlist.creator.avatarUrl" class="creatorImg" />
            <text class="creatorName">{{playlist.creator.nickname}}</text>
            <text class="iconfont icon-gengduo icon"></text>
          </view>
          <view class="infoContent">
            <rich-text class="maxLineTwo" :nodes="playlist.description"></rich-text>
            <text class="iconfont icon-gengduo icon"></text>
          </view>
        </view>
      </view>
      <view class="bottomOptions">
        <view class="optionsItem">
          <text class="icon22 iconfont icon-pinglun"></text>
          <text class="optionsName">{{playlist.commentCount}}</text>
        </view>
        <view class="optionsItem">
          <text class="icon22 iconfont icon-fenxiang"></text>
          <text class="optionsName">{{playlist.shareCount}}</text>
        </view>
        <view class="optionsItem">
          <text class="icon22 iconfont icon-yunxiazai"></text>
          <text class="optionsName">下载</text>
        </view>
        <view class="optionsItem">
          <text class="icon22 iconfont icon-a-selbox1x"></text>
          <text class="optionsName">多选</text>
        </view>
      </view>
    </view>
    <view class="musicList">
      <view class="musicHeader">
        <view class="playAll">
          <i class="playIcon iconfont icon-bofang"></i>
          播放全部
          <text class="musicNum">（共 30 首）</text>
        </view>
        <view class="collection">＋ 收藏（10 万）</view>
      </view>
      <view class="musicItem" v-for="(item, index) in musicList" :key="index">

      </view>
    </view>
  </view>
</template>

<script lang="ts">
  import { defineComponent, onMounted, reactive, toRefs, getCurrentInstance } from "vue";
  import { getRecommendDetailApi } from '../../api/index'
 console.log(defineComponent,'defineComponent')
  let detailId = ''
  export default defineComponent({
    name: "songDetail",
    onLoad(option) {
      detailId = option.detailId
    },
    setup() {

      function goBack() {
        console.log(uni,'uni')
        uni.navigateBack({
          delta: 1
        });

      }
      let data = reactive({
        playlist: {
          creator: {}
        },
        privileges: [],
        musicList: [
          {
            name: '华尔兹'
          },
          {
            name: '李白'
          }
        ]
      })
      function getRecommendDetail():void {
        console.log(detailId,'detailId')
        getRecommendDetailApi({
          id: detailId
        }).then((res: any) => {
          console.log(res,'hhhhhhhh')
          if(res.code !== 200) return
          data.playlist = res.playlist
          data.privileges = res.privileges
        })
      }

      function toChineseNum(num:number) {
        const n = new Number(num/10000)
        return n.toFixed(1) + '万'
      }
      onMounted(() => {
        getRecommendDetail()
      })
      return {
        ...toRefs(data),
        toChineseNum,
        goBack
      }
    },
  });
</script>
<style lang="less" scoped>
.songDetail {
  height: 100vh;
}
.detailTop {
  .coverImg {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: auto;
    filter: blur(50px);
  }
  // position: relative;
  .navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    padding: 10px;
    .icon {
      font-size: 20px;
    }
  }
  .detailInfo {
    display: flex;
    color: #ffffff;
    padding: 20px 20px 0 20px;
    .infoLeft {
      position: relative;
      width: 135px;
      height: 135px;
      margin-right: 20px;
      border-radius: 10px;
	  flex-shrink: 0;
      image {
		width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      .playWrap {
        position: absolute;
        top: 5px;
        right: 5px;
        color: rgb(255, 255, 255);
        line-height: 20px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.4);
        padding: 0 3px;
        .playIcon {
          font-size: 13px;
          margin-right: 5px;
        }
        .playCount {
          font-size: 12px;
        }
      }

    }
    .infoRight {
      .infoPerson {
        display: flex;
        align-items: center;
        margin-top: 10px;
        font-size: 12px;
        .creatorImg {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .creatorName {
          color: #dddddd;
        }
        .icon {
          margin-top: 2px;
          margin-left: 10px;
          font-size: 12px;
          color: #dddddd;
        }
      }
      .infoContent {
        margin-top: 10px;
        font-size: 12px;
        color: #dddddd;
        display: flex;
        align-items: center;
      }
    }
  }
  .bottomOptions {
    display: flex;
    margin-top: 10px;
    padding: 0 10px;
    justify-content: space-around;
    align-items: center;
    color: #dddddd;
    font-size: 12px;
    .optionsItem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .optionsName {
        margin-top: 2px;
      }
    }
  }
}
.musicList {
  margin-top: 20px;
  padding: 20px;
  height: 100%;
  background: #ffffff;
  border-radius: 20px 20px 0 0 ;
  .musicHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .playAll {
      display: flex;
      align-items: center;
      .playIcon {
        font-size: 24px;
        margin-right: 10px;
      }
      .musicNum {
        font-size: 10px;
        color: #cccccc;
      }
    }
    .collection {
      padding: 5px 10px;
      height: 35px;
      line-height: 35px;
      border-radius: 35px;
      background: #d71345;
      color: #ffffff;
      font-size: 13px;

    }
  }
}
.ml20 {
  margin-left: 20px;
}
.icon22 {
  font-size: 22px;
}
</style>