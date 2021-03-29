<template>
	<div>
		<mt-swipe :auto="2000">
		  <!--<mt-swipe-item v-for="item in lunbotuList" :key="item.src">
		  	<img :src="item.img" alt=""/>
		  </mt-swipe-item>-->
		  <mt-swipe-item >
		  	<img src="../../images/vue.png" alt=""/>
		  </mt-swipe-item>
		  <mt-swipe-item >
		  	<img src="../../images/html5.png" alt=""/>
		  </mt-swipe-item>
		  <mt-swipe-item >
		  	<img src="../../images/js.png" alt=""/>
		  </mt-swipe-item>
		</mt-swipe>
		<div class="ulbox">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
		            	<router-link to='/home/newslist'>
		            		<span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
		                    <div class="mui-media-body">新闻资讯</div>
		            	</router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
		            	<router-link to='/home/photo'>
		                    <span class="mui-icon mui-icon-image"></span>
		                    <div class="mui-media-body">图片分享</div>
		                 </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
		            	<router-link to='/home/shoplist'>
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-gold"></span>
		                    <div class="mui-media-body">商品购买</div>
		            	</router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4" @click="msg"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-topic"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4" @click="msg"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-classroom"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
		            	<router-link to='/member'>
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-addpeople"></span>
		                    <div class="mui-media-body">联系我</div>
		            	</router-link>
		            </li>
		            
		        </ul>
		</div>
		        
	</div>
</template>

<script>
	import axios from 'axios'
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				lunbotuList:[]//保存轮播图数据
			}
		},
		created(){
			this.getLunbotu()
		},
		methods:{
			getLunbotu(){
				//获取轮播图数据
//				this.$http.get('api/getlunbo').then(result=>{
//					if(result.body.status==0){//成功
//						this.lunbotuList=result.body.message;
//					}else{//失败
//						Toast('加载失败~')
//					}
//					
//				})
//			}
				axios.get('api/getlunbo').then(result=>{
					this.lunbotuList=result.data.message
//console.log(result.data.message)
				})
		},
		msg(){
			Toast('暂未开放~')
		}
		}
	}
</script>

<style scoped="scoped">
	.mint-swipe{
		height: 300px;
	}
	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
	.ulbox ul{
		background-color: white;
		border: none;
	}
	.ulbox ul li{
		border: none !important;
	}
	.mui-media-body{
		font-size:12px !important;
	}
</style>