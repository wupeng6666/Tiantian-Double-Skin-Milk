<template>
	<view class="width100 d-clo d-jc-centen margin-top-30">
		
		<navigator url="personal">
		<view class="width90 d-row d-jc-between d-ai-centen margin-center height200 head">
			<view class="d-clo d-jc-between height120"> 
				<h2>{{dengluname}}</h2> 
				<p class="gray4">忙归忙,记得吃点点心哟~</p>
			</view>
			<view> <image class="head-img" src="../../static/shanpin/user/头像.png" ></image></view>
		</view>
		</navigator>
		

		
		<navigator url="add-tenants">
			<view class="width90 height140 line-height140 d-row d-jc-between d-ai-start margin-center border-bottom-2 ">
				<view> 
					<u-icon name="gift" label="账号注册" size="36" label-size="36" color="#007AFF" margin-left="20"></u-icon> 
				</view>
				<view class="gray3"> <u-icon name="arrow-right" ></u-icon> </view>
			</view>
		</navigator>
		

		
		<navigator url="about">
		<view class="width90 height140 line-height140 d-row d-jc-between d-ai-start margin-center border-bottom-2 ">
			<view> 
				<u-icon name="order" label="关于我们" size="36" label-size="36" color="#007AFF" margin-left="20"></u-icon> 
			</view>
			<view class="gray3"> <u-icon name="arrow-right" ></u-icon> </view>
		</view>
		</navigator>
		
		<navigator url="problem">
		<view class="width90 height140 line-height140 d-row d-jc-between d-ai-start margin-center border-bottom-2 ">
			<view> 
				<u-icon name="email" label="问题反馈" size="36" label-size="36" color="#007AFF" margin-left="20"></u-icon> 
			</view>
			<view class="gray3"> <u-icon name="arrow-right" ></u-icon> </view>
		</view>
		</navigator>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dengluname:""
			}
		},
		onShow(){
			this.getdenglu()
		},
		methods: {
			getdenglu(){
				let denglu=uni.getStorageSync("denglu") || {}
				if (!denglu.name){
					this.dengluname="请在首页登录"
				}else{
					this.dengluname="你好呀，"+denglu.name
				}
				

			}
		
		
		}
	}
</script>

<style>
.head{
	border: 1rpx solid #c6c6c6;
	border-radius: 10rpx;
	padding: 30rpx;
}
.head-img{
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
}


</style>
