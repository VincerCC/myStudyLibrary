### 项目预览：

一个仿外卖的vue单页应用程序Web App（spa），包含常见的功能
1. app首页&购物车&关于我
![img](https://github.com/VincerCC/Vue-Project/blob/master/image/%E9%A6%96%E9%A1%B5%26%E8%B4%AD%E7%89%A9%E8%BD%A6%26%E5%85%B3%E4%BA%8E%E6%88%91.png)
2. 新闻资讯&新闻详情
![img](https://github.com/VincerCC/Vue-Project/blob/master/image/%E6%96%B0%E9%97%BB%E8%B5%84%E8%AE%AF%26%E6%96%B0%E9%97%BB%E8%AF%A6%E6%83%85.png)
3. 图片资讯&图片详情
![img](https://github.com/VincerCC/Vue-Project/blob/master/image/%E5%9B%BE%E7%89%87%E5%88%86%E4%BA%AB%26%E5%9B%BE%E7%89%87%E8%AF%A6%E6%83%85.png)
4. 商品购买&商品详情&商品图文&商品评论
![img](https://github.com/VincerCC/Vue-Project/blob/master/image/%E5%95%86%E5%93%81%E8%B4%AD%E4%B9%B0%26%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85%26%E5%95%86%E5%93%81%E5%9B%BE%E6%96%87%26%E5%95%86%E5%93%81%E8%AF%84%E8%AE%BA.png)

### 项目启动
下载下来后，在根路径中打开cmd运行
```
npm i     //安装依赖
npm run dev     
```


## 制作首页
1. 完成header区域，使用的是Mint-UI中的header组件
2. 制作tabbar区域，使用的是MUI中的tabber组件
	+在制作购物车图标时候，先把扩展图标的icons-extra.css样式拷贝到项目中
	+也要拷贝fonts下边的mui-icons-extra.ttf文件到项目中
3. 中间区域放置一个router-view来展示路由匹配到的组件

## 改造tabbar为router-link

## 点击tabbar的路由连接，展示对应的路由组件

## 轮播图制作,加载轮播图数据
1. 获取数据，使用vue-resource, cnpm i vue-resource -S  安装
2. 使用vue-resource的this.$http.get('')获取数据
3. 将获取到的数据放到data的lunbotuList上
4. 用v-for循环渲染每一项

## 九宫格区域
1. 用MUI提供的九宫格
2. 设置样式

## 创建新闻路由连接
1. 绘制界面，使用MUI中的media-list.html
2. 使用vue-resource获取数据

## main.js中创建全局过滤器格式化时间格式
1. 先安装时间插件 
```
cnpm i moment -S
```
2. main.js中导入moment

## 实现新闻资讯列表点击跳转到新闻详情
1. 把列表的每一项a标签改造为router-link
2. 创建新闻详情组件页面newsinfo.vue
3. 在路由模块中，将新闻详情的	路由地址	和	新闻详情	对应起来

## 评论区域设置
1. 加载更多:
		1.绑定点击事件
		2.点击后拿到下一页数据，pageindex++，再调用getmoments()
		3.加载下一页，应该用concat将新数据拼接到老数据后边
2. 发表评论：
		1.文本框双向数据绑定.
		2.发表按钮绑定事件.
		3.校验评论内容是否为空，如果为空提示用户输入不为空
		4.通过vue-resource发送请求，保存评论
		5.刷新列表，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift()方法，
			把最新的评论追加到data中momentlist的开头位置
			
			
## 图片列表
1. 制作顶部的滑动条
		坑a：需要借助于MUI中的tab-top-webview-main.html中的样式
		坑b：MUI提供的slider中包含mui-fullscreen类，作用是强制全屏显示，需要取消这个类，否则顶部会挤到最上面
		坑c：刚开始不能滑动，需要导入mui.js文件，然后初始化scroll....
				初始化：
				```
				mui('.mui-scroll-wrapper').scroll({
							deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
						});
				```
		坑d：引入mui.js后会报错,需要在样式中增加 * { touch-action: none; } ,然后备份tabbar样式，参照https://blog.csdn.net/qq_35737292/article/details/84938043
			
2. 制作图片列表
		1.图片列表需要使用懒加载技术，可以用mint-ui中的组件lazy-load
		2.渲染图片列表
		
## 实现了点击图片跳转到图片详情页面
1. 在改造li成router-link的时候，需要使用tag属性指定渲染为li标签
2. 通过:to="'/home/photoinfo/'+item.id"，实现点击图片跳转到对应图片的详情
	
## 实现获取图片详情数据，并且美化页面
1. 通过接口地址获取到图片详情内容
2. 通过this.$route.params.id获取到当前图片的id
3. 对应的展示对应id的评论组件
4. 图片缩略图，通过vue-preview实现缩略图，安装：cnpm i vue-preview -S
		1.获取到所有图片列表
		2.每个图片数组对象中必须有w，h属性，为大图的宽高，可以通过forEach循环每个图片数据，补全w,h
		3.设置小图宽高 不能用scoped
		```
			.thumbs .my-gallery figure{
				display: inline-block;
				margin: 5px;
			}
			 .thumbs .my-gallery figure img{
				width: 80px;
				height: 80px;
			}
		```
## 尝试在手机端进行项目的预览
1. 保证手机和开发项目的电脑处于同一wifi环境中，也就是说手机可以访问到电脑IP
2. 打开自己的项目中package.json本间，在dev脚本中添加--host指令，把当前电脑的wifi IP地址设置为--host的指令值
	--如何查看自己电脑所处wifi的IP呢，在cmd中运行 ipconfig，查看无线网ip地址
3. 设置好后重新run项目，将得到页面的地址输入到手机浏览器




#### this.$route是路由【参数对象】，所有路由中的参数：params（一般用来获取url中传递的参数）、query都属于他
#### this.$router是一个路由【导航对象】，用它可以方便的使用JS代码实现路由导航的前进后退跳转。
## 编程式导航：
1. this.$router.push({path:'路由路径'+可以拼接参数})
2. 在router.js中路由routes中{path:'路由路径',component:路由,name：'路由名称'}，然后this.$router.push({name:'路由名称',parans:{id} })


## 回退前进功能的实现
1. this.$router.go()

tips:
//props、data、vuex的区别是：
//1. props是存放子组件传过来的值的，data是存放私有数据的，vuex是存放公有数据的
//2. vuex安装	
```
npm i vuex -S
```
3. 然后在main.js中 
 ```
import Vuex from 'vuex'
Vue.use(Vuex)
 ```
4. main.js创建一个store实例
  ```
		var store = new Vuex.Store({
  			state: {//这里存放公有数据
  			},
  			mutations: {
  			//这里放方法
  			//如果需要修改state中的数据，只能通过调用在mutations中的方法修改
  			}
		})
  ```
5. 将store挂载到vm实例上，与el平级，
```
store：store
```
6. 如果在组件中要使用全局的数据，需要用this.$store.state.***去访问
7. 如果子组件想要调用mutations中的方法，只能通过this.$store.commit('方法名',可以加上唯一的参数)调用
8. mutations中的方法，最多支持两个参数，其中第一个参数已经固定为state
9. Vuex 允许我们在 store 中定义“getters”（可以认为是 store 的计算属性）。
		就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
10. 
```
getters: {
    		doneTodos: state => {
      		return '我是getters'+state.count
    		}
  		}
```
