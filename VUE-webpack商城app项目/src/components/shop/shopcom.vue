<!--商品评论-->
<template>
	<cmtbox :id="this.id"></cmtbox>
</template>

<script>
	//导入评论组件，然后通过:id="this.id"传值
	import cmtbox from '../comment.vue'
	
	import axios from 'axios'
	export default{
		data(){
			return {
				id:this.$route.params.id
			}
		},
		created(){},
		methods:{},
		components:{
			cmtbox
		}
	}
</script>

<style>
	h1{
		font-size: 18px;
		font-weight: 900;
		color: #000000;
	}
	textarea{
		font-size: 14px;
		height: 85px;
		margin: 0;
	}
	.cmt-list{
		margin: 5px 0;
	}
	.cmt-list .cmt-item .cmt-title{
		background-color: #ccc;
		font-size: 13px;
		line-height: 35px;
	}
	.cmt-list .cmt-item .cmt-body{
		text-indent: 2rem;
		font-size: 13px;
	}
</style>