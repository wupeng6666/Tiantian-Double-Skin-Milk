<template>
	<view class="width100 d-clo d-jc-centen">
		<view class="width90 margin-center font36 gray3">基础信息</view>
		
		<view class="width90 height140 line-height140 d-row d-jc-between d-ai-start margin-center border-bottom-2 ">
			<view class="font32"> 头像 </view>
			<view class="d-row d-ai-centen gray3 height120 line-height120"> 
				<image class="head-img" src="../../static/shanpin/user/头像.png"></image>
			</view>
		</view>
		
		<view class="width90 height140 line-height140 d-row d-jc-between d-ai-start margin-center border-bottom-2 ">
			<view class="font32"> 用户名 </view>
			<view class="gray3"> 
				{{dengluname}}
			</view>
		</view>
		<view class="width90 height140 line-height140 d-row d-jc-between d-ai-start margin-center border-bottom-2 ">
			<view class="font32"> 学号 </view>
			<view class="gray3">
				{{denglunumber}}
			</view>
		</view>
		<view class="width90 height140 line-height140 d-row d-jc-between d-ai-start margin-center border-bottom-2 ">
			<view class="font32"> 电话号码 </view>
			<view class="gray3">
				{{denglumobile}}
			</view>
		</view>
		<view class="width90 height140 line-height140 d-row d-jc-between d-ai-start margin-center border-bottom-2 ">
			<view class="font32"> 收货地址 </view>
			<view class="gray3">
				{{dengluaddress}}
			</view>
		</view>


		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dengluname:"",
				dengluaddress:"",
				denglunumber:"",
				denglumobile:""
				
				
			}
		},
		onLoad() {
			this.getdenglu()
		},
		methods: {
			getdenglu(){
				let denglu=uni.getStorageSync("denglu") || {}
				if (denglu){
					this.dengluname=denglu.name,
					this.dengluaddress=denglu.address,
					this.denglunumber=denglu.number,
					this.denglumobile=denglu.mobile
				}
			}
		},
	}
</script>

<style>
.head-img{
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
}
</style>
