<template>
	<view class="width95 margin-center ">
		
	<!-- 商品列表 -->
		<view class="bg-color-white padding-20 border-radius-15 margin-top-30" v-for="(item,index) in data" :key="index">
			<navigator :url="'/pages/order/order-look/order-look?time=' + item.time + '&mobile=' + item.mobile">
				<image v-for="(food,i) in item.food" :key="i" style="width: 110rpx;height: 110rpx;margin-right: 10px;" :src="find(food.name)" mode=""></image>
				<view class="d-row d-jc-between padding-10 padding-bottom-20 border-bottom-2">				
					<view class="d-row">						 
						<view class="d-clo d-jc-between padding-left-10">  
							<h3>{{ maskedName(item.name) }} {{ item.butt ? item.address : '' }}</h3>
							<label class="font20 gray3">{{ maskedMobile(item.mobile) }}</label>
						</view>
					</view>
					<view class="d-clo d-ai-end">
						<view class="padding-bottom-20">{{item.butt? "外卖配送":"门店自取"}}</view>
						<view> 
							<label class="font24 gray3">{{formatDateTime(item.time)}}</label>
						</view>
					</view>
				</view>
				<view class="d-row d-jc-between d-ai-centen padding-10 font30 padding-bottom-10">
					<view class="font22">
					   {{ item.food.map(foodItem => foodItem.name + "X" + foodItem.number).join('+') }}
					</view>
					<view>¥ <label class="font-bold font36">{{item.total}}</label></view>
				</view>
			</navigator>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[],
			}
		},
		onShow() {
			this.dingdang()
		},
		methods: {
			find(foodname){
				return `../../static/shanpin/goods/${foodname}.jpg`;
			},
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
			dingdang(){
				uniCloud.callFunction({
					name:"getfoodlist",
				}).then(res=>{
					console.log(res.result.data)
					this.data=res.result.data
				})
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
		}
	}
</script>

<style>
uni-page-head,uni-page,page{
	background-color: #f7f7f7;
}

.bgColor{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #bbbbf3;
	z-index: -1;
}
</style>
