<template>
	<div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id"><!--通过item.id在每一个页面传递各自的id-->
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="text">{{item.title}}</p>
							<p class='mui-ellipsis'>
								<span>发表时间:{{item.add_time | dataFormat}}</span>
								<span>点击：{{item.click}}次</span>
							</p>
						</div>
					</router-link>
				</li>
			</ul>
	</div>
	
</template>

<script>
	import {Toast} from 'mint-ui'
	import axios from 'axios'
	export default{
		data(){
			return {
				newsList:[]
			}
		},
		created(){
			this.getNews();
		},
		methods:{
//			getNews(){
//				//获取轮播图数据
//				this.$http.get('api/getnewslist').then(result=>{
//					if(result.body.status==0){//成功
//						this.newsList=result.body.message;
////						console.log(result.body.message)
//					}else{//失败
//						Toast('加载失败~')
//					}
//					
//				})
//			}
//		}
		getNews(){
				//获取轮播图数据
				axios.get('api/getnewslist').then(result=>{
					//成功
						this.newsList=result.data.message;
//						console.log(result.data.message)
				}).catch(err=>{
					Toast("请求失败")
				})
			}
		}
	}
</script>

<style>
	.mui-table-view li .text{
		color: #000000;
		font-weight: 700;
		font-size:15px;
		margin-bottom: 5px;
		white-space: nowrap;/*取消自动换行*/
		overflow: hidden;/*隐藏超出部分*/
		text-overflow: ellipsis;/*超出部分设置为.*/
	}
	.mui-table-view li .mui-ellipsis{
		color: dodgerblue;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
</style>