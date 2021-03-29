<template>
	<div class="app-container">
		<!--顶部header区域-->	 
		<mt-header  fixed title="刘颖聪vue项目案例">
			<span slot="left" @click="goback" v-show="flag">
			    <mt-button icon="back">返回</mt-button>
			 </span>
		</mt-header>
		
		
		<!--中间的路由router-view区域-->
		<transition ><!--设置组件切换的动画-->
			<router-view></router-view>
		</transition>
		
		
		<!--底部的路由tabbar区域-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-items" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			
			
			
			<router-link class="mui-tab-items" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="shopcar">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>

			<router-link class="mui-tab-items" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">关于我</span>
			</router-link>
		</nav>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				flag:false
			}
		},
		created(){
			if(this.$route.path=='/home'){
					this.flag=false
				}else{
					this.flag=true
				}
		},
		methods:{
			goback(){//点击后退
				this.$router.go(-1)
			}
		},
		watch:{//监听路由地址变化
			'$route.path':function(newval){
				if(newval=='/home'){
					this.flag=false
				}else{
					this.flag=true
				}
			}
		}
	}
</script>

<style scoped="scoped">
	*{
		margin:0;
		padding: 0;
	}
	.app-container{
		margin-top: 40px;
		margin-bottom: 51px;
		overflow-x: hidden;
	}
	.mint-header{
		z-index: 99!important;
	}
	.v-enter{
		opacity: 0;
		transform: translateX(100%);/*设置新页面从右边进来*/
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);/*设置新页面从左边消失*/
		position: fixed;/*能够解决切换时候会一上一下的问题*/
	}
	.v-enter-active,.v-leave-active{
		transition: all 0.5s ease;
	}
	.mui-bar-tab .mui-tab-items {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
	}
	.mui-bar-tab .mui-tab-items.mui-active {
    color: #007aff;
	}
	
	.mui-bar-tab .mui-tab-items .mui-icon ~ .mui-tab-label{
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
	}
	.mui-bar-tab .mui-tab-items .mui-icon{
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
	}
</style>