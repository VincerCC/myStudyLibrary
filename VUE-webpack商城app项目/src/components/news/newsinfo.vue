<template>
	<div class="newsinfo">
		<h3 class="title">{{newsinfo.title}}</h3>
		<p class="time">
			<span>发表时间：{{newsinfo.add_time|dataFormat}}</span>
			<span>点击：{{newsinfo.click}}次</span>
		</p>
		<hr>
		<div class="content" v-html="newsinfo.content"></div>
		<!--<div class="content" >{{newsinfo.content}}</div>因为里边数据带有html标签，所以需要用v-html渲染-->
		<comment :id="this.id"></comment>
		<!--通过属性传值，将id传递给子组件评论组件，然后评论组件通过props拿到id -->
	</div>
</template>

<script>
	import axios from 'axios'
	import comment from '../comment.vue'
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				id:this.$route.params.id,//将url地址中传递的id值挂载到data中
				newsinfo:{}
			}
		},
		created(){
			this.getNewsInfo()
		},
		components:{
			comment
		},
		methods:{
			getNewsInfo(){
				//用axios实现数据请求
				axios.get('api/getnew/'+this.id).then(result=>{
					this.newsinfo=result.data.message[0]
//					console.log(result.data.message[0])
				}).catch(err=>{
					Toast("请求失败")
				})
			}
		}
//		getNewsInfo(){
//				this.$http.get('api/getnew/'+this.id).then(result=>{
//					if(result.body.status==0){
//						this.newsinfo=result.body.message[0]
//					}
//				})
//			}
//		}
	}
</script>

<style scoped="scoped">
	.newsinfo{
		padding: 0 4px;
	}
	.newsinfo .title{
		font-size: 16px;
		margin: 15px 0;
		text-align: center;
		color: red;
		white-space: nowrap;/*取消自动换行*/
		overflow: hidden;/*隐藏超出部分*/
		text-overflow: ellipsis;/*超出部分设置为.*/
	}
	.newsinfo .time{
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		color: dodgerblue;
	}
	.newsinfo .content{
		
	}
</style>