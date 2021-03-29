<!--商品图文详情-->
<template>
	<div class="box">
		<p class="title">{{shopdesclist.title}}</p>
		<hr />
		<div v-html="shopdesclist.content" class="content"></div>
	</div>
	
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				id:this.$route.params.id,
				shopdesclist:[]
			}
		},
		created(){
			this.getshopdesc()
		},
		methods:{
			getshopdesc(){
				axios.get('api/goods/getdesc/'+this.id).then(result=>{
					this.shopdesclist=result.data.message[0]
					console.log(this.shopdesclist)
				})
			}
		}
	}
</script>

<style>
	.box{
		padding:5px;
	}
	.title{
		color: deepskyblue;
		font-weight: bold;
		font-size: 16px;
		text-align: center;
		line-height: 30px;
	}
	.content{
		font-size: 14px;
		line-height: 28px;
	}
	.content img{
		width: 100%;
	}
</style>