<template>
    <div class="Memberc">
        <div class="head">
            <img src="../../images/head.png" alt="">
            <p>刘颖聪</p>
        </div>
        
        <div class="mui-card">
				<div class="mui-card-header">项目名称:Vue小项目</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                    
					<p>	项目框架:Vue 2.X</p>
                    <p> UI 框架:Mint-UI&&MUI</p>
                    <p> 打包工具:webpack</p>
					</div>
				</div>
				<!-- <div class="mui-card-footer">页脚</div> -->
		</div>
        <div class="mui-card">
				<div class="mui-card-header">作者：刘颖聪</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                    
					<p>	电话：15219173446</p>
                    <p> 邮箱：858860068@qq.com</p>
              		<h1>扫一扫加我微信</h1>
					<img src="../../images/wechat.jpg" alt="">
					</div>
				</div>
		</div>
    </div>
</template>


<script>
	export default{
		data(){
			return {
			}
		},
		methods:{
			handleClose () {
		        console.log('close event')
		      }
		},
		beforeRouteEnter (to, from, next) {
			
				    next((vm)=>{
				        console.log(vm)
				        console.log(to.path)
						console.log(from.path)
						if(to.path=='/member'&&from.path=='/home'){
							console.log("啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊")
						}
				    })
				  }
	}
</script>

<style >
	.Memberc{
	    text-align: center;
	    padding-top:15px;
	    }
    .Memberc .head p{
            font-size: 16px
        }
    .mui-card{
        text-align: left;
        box-shadow: 0px 0px 5px #999;
        }
	.mui-card .mui-card-footer{
		justify-content: flex-start;
		}
	.Memberc .head img{
		border-radius: 50%;
		width: 80px;
        height: 80px;
        }
    .mui-card h1{
    	text-align: center;
    }
    .mui-card .thumbs{
    	text-align: center;
    }
    .thumbs .my-gallery figure{
		display: inline-block;
		margin: 5px;
	}
	 .thumbs .my-gallery figure img{
		width: 200px;
		height: 200px;
	}
	.mui-card-content-inner{
		text-align: center;
	}
	.mui-card-content-inner img{
		width: 200px;
		height: 200px;
	}
</style>
