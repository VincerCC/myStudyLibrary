<template>
	<div>
		<mt-swipe :auto="3000">
			<!--将来谁用这个轮播图组件，谁传入lunbotuList数组-->
			<!--此时应该是父组件向子组件来设置，用props接收-->
		  <mt-swipe-item v-for="item in lunbotuList" :key="item.src">
		  	<img :src="item.img||item.src" alt=""/>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		},
		created(){
			
		},
		methods:{},
		props:["lunbotuList"]
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