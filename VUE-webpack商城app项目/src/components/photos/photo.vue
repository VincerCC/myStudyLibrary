<template>
	<div>
		<!--顶部滑动部分-->
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for='item in phototitles' :key="item.id" @click="getimages(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>
		
		
		<!--图片列表部分-->
			<ul class="photolist">
			  <router-link tag="li" v-for="item in imagelist" :key="item.id" :to="'/home/photoinfo/'+item.id">
			    <img v-lazy="item.img_url">
			    <div class="info">
			    	<p class="info-title">{{item.title}}</p>
			    	<div class="info-content">{{item.zhaiyao}}</div>
			    </div>
			  </router-link>
			</ul>
	</div>
</template>

<script>
	//导入mui的js
	import mui from '../../lib/mui/js/mui.min.js'
	//初始化滑动控件
	//刚进入 图片分享页面的时候，滑动条无法正常工作，经过我们认真的分析，发现，如果要初始化 滑动条，必须等 dom 元素加载完毕，
	//所以，我们把 初始化 滑动条 的代码，搬到了 mounted 生命周期函数中；
//	mui('.mui-scroll-wrapper').scroll({
//		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
//	});
	import axios from 'axios'
	export default{
		data(){
			return {
				phototitles:[],
				imagelist:[]
			}
		},
		mounted(){
				mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		},
		created(){
			this.getphtotlist()
			this.getimages(0)
		},
		methods:{
			getphtotlist(){
				axios.get('api/getimgcategory').then(result=>{
//					console.log(result)
					result.data.message.unshift({title:"全部",id:0})
					this.phototitles=result.data.message
					this.id=result.data.id
				})
			},
			getimages(cateId){
				axios.get('api/getimages/'+cateId).then(result=>{
//					console.log(result)
					this.imagelist=result.data.message
				})
			}
		}
	}
</script>

<style scoped="scoped">
	 	*{
	 		touch-action:pan-y;
	 	}
	 	/*img[lazy=loading] {
			  width: 40px;
			  height: 300px;
			  margin: auto;
		}*/
		.photolist {
			padding: 0 5px;
		}
		.photolist li{
			background:#CCCACA ;
			text-align: center;
			margin-bottom: 12px;
			box-shadow: 0 0 6px #999;
			position: relative;
			list-style: none;
		}
		.photolist img{
			width: 100%;
			vertical-align: middle;
		}
		img[lazy=loading]{
			width: 40px;
			height: 300px;
			margin: auto;
		}
		.photolist li .info{
			color: white ;
			max-height: 84px;
			text-align: left;
			position: absolute;
			bottom: 0;
			background-color: rgba(0,0,0,0.4);
		}
		.photolist li .info .info-title{
			color: white ;
			font-size: 14px;
		}
		.photolist li .info .info-content{
			font-size: 13px;
		}
</style>