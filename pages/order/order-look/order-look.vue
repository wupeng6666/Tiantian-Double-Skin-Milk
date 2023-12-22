<template>
	<view class="width90 margin-center">
		
		<!-- 商品清单 -->
		<view class="bg-color-white padding-20 border-radius-15 margin-top-20 margin-bottom-200">
			<h2>{{maskedName(cart.name)}}</h2>
			<view class="d-row d-jc-between padding-10 padding-bottom-20 border-bottom-2"v-for="(item,index) in cart.food" :key="index">
				<view class="d-row">
					<view class="d-clo d-jc-between padding-left-10"> <h3>{{item.name}}</h3> <label class="font22 gray4">{{item.type}}</label> </view>
				</view>
				<view>
					<span >X {{item.number}}</span>
				</view>
			</view>
			
			<view class="d-row d-jc-between padding-10 font30 padding-bottom-20 border-bottom-2">
				<view>配送费</view>
				<view>¥{{cart.butt? 1:0}}</view>
			</view>
			<view class="d-row d-jc-between padding-10 font30 padding-bottom-20 border-bottom-2">
				<view>电话</view>
				<view>{{maskedMobile(cart.mobile)}}</view>
			</view>
			<view class="d-row d-jc-between padding-10 font30 padding-bottom-20 border-bottom-2">
				<view>地址</view>
				<view>{{cart.address}}</view>
			</view>
			
			<view class="d-row d-jc-between padding-10 font30 padding-bottom-20 border-bottom-2">
				<view>下单时间</view>
				<view>{{formatDateTime(cart.time)}}</view>
			</view>
			<view class="d-row d-jc-between d-ai-centen padding-10 padding-top-30">
				<view class="gray3"> 账单</u-icon></view>
				<view>小计：<label class="font-bold font40">¥ {{ cart.total}}</label></view>
			</view>
			
		</view>
		

	</view> 
</template>

<script>

	
	export default {
		data() {
			return {
				cart:[],
			}
		},
		
		onLoad(e) {
			this.foodlistlook(e);
		},
		methods: {
			maskedMobile(mobile) {
			    if (mobile && mobile.length === 11) {
			      return mobile.substring(0, 3) + '****' + mobile.substring(7);
			    } else {
			      return mobile;
			    }
			},
			maskedName(name) {
			    if (name && name.length > 0) {
			      return name.substring(0, 1) + '*';
			    } else {
			      return name;
			    }
			},
			formatDateTime(timestamp) {
				const date = new Date(timestamp);
				const year = date.getFullYear();
				const month = ('0' + (date.getMonth() + 1)).slice(-2);
				const day = ('0' + date.getDate()).slice(-2);
				const hours = ('0' + date.getHours()).slice(-2);
				const minutes = ('0' + date.getMinutes()).slice(-2);
				const seconds = ('0' + date.getSeconds()).slice(-2);
			
				return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			},
			
			
			foodlistlook(data){
				uni.showLoading({
					title: '加载中'
				});
				uniCloud.callFunction({
					name:"foodlistlook",
					data:{
						time: parseInt(data.time),  // 将字符串转换为数字
						mobile:data.mobile
					}
				}).then(res=>{
					uni.hideLoading();
					console.log(res.result.data[0]);
					this.cart=res.result.data[0];
				})
			}
	
			

		}
	}
</script>

<style>
page{
	background-color: #f7f7f7;
}

.pay{
	background-color: #4f535a;
	width: 90%;
	height: 120rpx;
	margin: 0 auto;
	border-radius: 60rpx;
	
	position: fixed;
	bottom: 30rpx;
	left: 5%;
	z-index: 1000;
}

.go{
	width: 200rpx; 
	height: 90rpx;
	line-height: 90rpx;
	background-color: #676c73 !important;
	color: #cecece !important;
	text-align: center;
	border-radius: 90rpx;
}

.colorWhiteBgBlue{
	background-color: #007AFF !important;
	color: #FFFFFF !important;
}
</style>
