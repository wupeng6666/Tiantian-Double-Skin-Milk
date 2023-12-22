<template>
	<view class="content">
		
		<view class="width95 title">欢迎品尝美味点心</view>
		
		<!-- 轮播图 -->
		<view class="banner-image">
			<u-swiper :list="imgList" :title="true" mode="round" indicator-pos="bottomCenter" :effect3d="true"  border-radius="20" :height="600" ></u-swiper>
		</view>  
		
	

		
		<view class="box">
		  <button class=" yellow-button" @click="denglu">登录</button>
		  <button class=" orange-button" @click="diancan" >点餐</button>
		</view>
		<button class=" blue-button" @click="guangli" >管理员入口</button>

		<!-- 提示框 -->
		<u-toast ref="uToast" />
	</view>
		
		
		
		<!-- 搜索框 -->
<!-- 		<navigator class="width95" url="search">
			<view> 
				<input class="input"  placeholder="输入店铺" placeholder-style="color:#b8b8b8" /> 
			</view>
		</navigator> -->
		
		
		
		
		<!--选项-->
		
<!-- 		<view class="width95">
			<view class="width40 d-row d-jc-between">
				<view :class="{active: activeTabIndex == index}"
					v-for="(item,index) in activeList" :key="index" @tap="handleTab(index)">
					<view class="title-name">{{ item.title }}</view>
					<view :class="{titleBottom: activeTabIndex == index}" ></view>
				</view>
			</view>
		</view> -->
		
		
		<!-- 店铺 -->
		
<!-- 		<view class="width90 d-row d-jc-around" style="margin-top: 30rpx;height: 180rpx;"
			v-for="(item,index) in sList" :key="index" @tap="intoDetails(item)">
			<view class="s-head d-clo d-jc-centen d-ai-centen "><image class="s-head-img" :src="item.headImg"></image></view>
			<view class="s-detail d-clo d-jc-around">
				<view class="font-bold font32">{{item.name}}</view>
				<view class="font28 gray3">月销{{item.yx}}</view>
				<view class="d-row d-jc-between gray3">
					<view>起送 ¥{{item.qs}} | 配送 ¥{{item.ps}}</view>
					<view>{{item.sj}}分钟 {{item.jl}}m</view>
				</view>
			</view>
		</view> -->
		
		

</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					marginTop: '50px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
					color: 'red',
					
				},
				
				
				
				activeList: [
					{title: '距离最近', value: 'distance'},
					{title: '销量最高', value: 'sales'},
				],
				// activeTabIndex: '',
				imgList: [
					{
						image:'/static/shanpin/index/门店1.jpg',
						title: '甜蜜双皮奶，浓郁香滑醉人心。'
					},
					{
						image:'/static/shanpin/index/门店2.jpg',
						title: '双皮奶香滑如梦境，一口醉人的甜蜜诗篇。'
					},
					{
						image:'/static/shanpin/index/门店3.jpg',
						title: '柠檬清新如晨曦，一杯茶饮尽芳华。'
					},
					{
						image:'/static/shanpin/index/门店4.jpg',
						title: '双皮奶入口舌尖，幸福的味道在心间绽放。'
					},
					{
						image:'/static/shanpin/index/门店5.jpg',
						title: '浓情蜜意间，幸福滋味无限。'
					}
				],
				
			}
		},
		onLoad() {
			// this.activeTabIndex = 0
		},
		watch: {
			// watch 监听器,监听到数据发生变化时执行
			// activeTabIndex: async function(val) {
			// 	const type = this.activeList[val].value
			// 	await this.getIndexList(type)
			// }		
			
		},
		methods: {
			//点击跳转
			diancan() {
				let denglu=uni.getStorageSync("denglu") || {}
				if (!denglu.name){
					
					this.$refs.uToast.show({
						title: '请先登录',
						type: 'error',
						position:'center',
						// 持续时间
						duration:'1000'
					})
					
				}else{
					uni.navigateTo({
					  url: '/pages/store/index'
					});
				}


			},
			denglu(){
				uni.navigateTo({
					url:'/pages/index/denglu/denglu',
				});
			},
			guangli(){
				uni.navigateTo({
					url:'/pages/index/guangli/guangli',
				});
			}
			
			
			// handleTab(index) {
			// 	this.activeTabIndex = index
			// },
			// async getIndexList(type){
			// 	console.log("获取"+type+"数据列表")
			// },
			// intoDetails(item){
			// 	uni.navigateTo({
			// 		url:'../store/index?id='+item.id+'&name='+item.name+"&headImg="+item.headImg,
			// 		animationType: 'pop-in',
			// 		animationDuration: 2000
			// 	})
			// }
		}
	}
</script>

<style scoped>
	.content {
		
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		background: linear-gradient(to bottom,#FFC0CB, #ffffff);

		
	}
	.title{
		font-size: 30rpx;
		font-weight: bold;
		margin-top: 30rpx;
	}
	.banner-image{
		margin-top: 70rpx;
		margin-bottom: 250rpx;
		height: 500rpx;
		width: 90%;
		border-radius:0 0 50rpx 50rpx;
	}

/* 	.input{
		background-color: #f7f7f7;
		border-radius: 10rpx;
		padding: 20rpx;
	}
	 */
	
	/* 按钮大小 */
	.box {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  height: 400rpx;
	  width: 100%;
	}



	.blue-button {
		background-image: linear-gradient(to top, #26a0da,#314755 ,#26a0da);
		margin: 10rpx;
		width:50%;
		height: 100%;
		padding: 15rpx 45rpx;
		text-align: center;
		text-transform: uppercase;
		transition: 0.5s;
		background-size: 200% auto;
		color: white;            
		box-shadow: 0 0 20rpx #eee;
		border-radius: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;

	}
	.orange-button {
		background-image: linear-gradient(to top, #ffc1d2 0%,  #ff6e7f 51%,#ffc1d2  100%);
		margin: 10rpx;
		width: 50%;
		height: 100%;
		padding: 15rpx 45rpx;
		text-align: center;
		text-transform: uppercase;
		transition: 0.5s;
		background-size: 200% auto;
		color: white;            
		box-shadow: 0 0 20rpx #eee;
		border-radius: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}


	.yellow-button {
	  background-image: linear-gradient(to top, #ffe6a6 0%, #FFA000 51%, #ffe6a6 100%); /* 黄色渐变色 */
	  margin: 10rpx;
	  width: 50%;
	  height: 100%;
	  padding: 15rpx 45rpx;
	  text-align: center;
	  text-transform: uppercase;
	  transition: 0.5s;
	  background-size: 200% auto;
	  color: white;
	  box-shadow: 0 0 20rpx #eee;
	  border-radius: 10rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}

























	
/* 	.title-name{
		padding: 15rpx 0;
	} */
/* 	.active {
		font-weight: bold;
		color: #007AFF;
	} */
/* 	.titleBottom{
		margin: 0 auto;
		width: 60%;
		border-bottom: 5rpx solid #007AFF;
	} */
	
/* 	.s-head{
		flex: 1;
	}
	.s-head-img{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
	}
	.s-detail{
		flex: 3;
	} */
</style>
