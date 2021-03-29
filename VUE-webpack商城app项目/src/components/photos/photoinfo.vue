<template>
	<div class="photoinfo">
		<h3>{{photoinfos.title}}</h3>
		<p class="subtitle">
			<span>发表时间：{{photoinfos.add_time|dataFormat}}</span>
			<span>点击：{{photoinfos.click}}</span>
		</p>
		<hr />
		
		<!--缩略图区域-->
		<div class="thumbs">
			<vue-preview :slides="slide1" @close="handleClose"></vue-preview>
		</div>
		
		<!--文字内容区域-->
		<div class="content" v-html="photoinfos.content"></div>
		
		
		
		<!--评论组件区域-->
		<comment :id="this.id"></comment>
	</div>
</template>

<script>
	import axios from 'axios'
	import comment from '../comment.vue'
	export default{
		data(){
			return {
				id:this.$route.params.id,//从路由中获取到当前图片id
				photoinfos:[],
				slide1: []//缩略图的数组
			}
		},
		components:{
			comment
		},
		created(){
			this.getPhotoInfo()
			this.getslide()
		},
		methods:{
			getPhotoInfo(){
				axios.get('api/getimageInfo/'+this.id).then(result=>{
					this.photoinfos=result.data.message[0]
//console.log(result)
				})
			},
			getslide(){
				axios.get('api/getthumimages/'+this.id).then(result=>{
					result.data.message.forEach(item=>{
						//循环每个图片数据，补全w,h
						item.msrc=item.src//设置小的缩略图
						item.w=600//设置点缩略图后的大图宽高
						item.h=400
					})
					//把完整的数据保存到slide1数组中
					this.slide1=result.data.message
//console.log(this.slide1)
				})
			},
			handleClose () {
        console.log('close event')
      }
		}
	}
	
</script>

<style >
	.photoinfo{
		padding:0 5px;
	}
	.photoinfo h3{
		color: #26a2ff;
		font-size: 15px;
		text-align: center;
		margin: 15px 0;
	}
	.subtitle{
		display: flex;
		justify-content: space-between;
		font-size: 13px;
	}
	hr{
		margin:5px 0;
	}
	.content{
		font-size: 13px;	
		line-height: 25px;
	}
	/*.thumbs.my-gallery{
    	display: flex;
    }
    .thumbs .my-gallery figure {
      width: 30% ;
      margin: 5px;
	}
     .thumbs .my-gallery img {
        width: 100%;
    }*/
   .thumbs .my-gallery figure{
		display: inline-block;
		margin: 5px;
	}
	 .thumbs .my-gallery figure img{
		width: 80px;
		height: 80px;
	}
</style>