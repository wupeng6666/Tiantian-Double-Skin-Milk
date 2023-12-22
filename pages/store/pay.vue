<template>
	<view class="width90 margin-center">
		
		<!-- 配送地址 -->
		<view class="bg-color-white padding-20 border-radius-15 margin-top-20">
			<view class="font36 font-bold" >
				<label>{{dengluaddress}}</label> 
			</view>
			<view class="margin-top-10">{{dengluname}} {{denglumobile}}</view>
			
			<view class="d-row d-jc-between margin-top-20">
				<view class="width45"><button plain :type="butt?'primary':''" @tap="butt = !butt">
					<u-icon :name="butt?'car-fill':'car'" size="30"></u-icon>外卖配送
				</button> </view>
				
				<view class="width45"><button plain :type="butt?'':'primary'" @tap="butt = !butt">
					<u-icon :name="butt?'car':'car-fill'" size="30"></u-icon>门店自取
				</button> </view>
				
			</view>
		</view>
		
		
		<!-- 支付方式 -->
		<view class="bg-color-white padding-20 border-radius-15 margin-top-20 font-bold font30">
			<view class="d-row d-jc-between padding-10" style="border-bottom: 1rpx solid #F7F7F7;">
				<view>立即送出</view>
				<view class="colorBlue">约 11:40 送达 <u-icon margin-left="10" name="arrow-right" color="#c1c1c1" size="28"></u-icon></view>
			</view>
			<view class="d-row d-jc-between padding-10">
				<view>支付方式</view>
				<view class="colorBlue">支付宝 <u-icon name="arrow-right" color="#c1c1c1" size="28"></u-icon></view>
			</view>
		</view> 
		
		
		<!-- 商品清单 -->
		<view class="bg-color-white padding-20 border-radius-15 margin-top-20 margin-bottom-200">
			<view class="d-row d-jc-between padding-10 padding-bottom-20 border-bottom-2"
				v-for="(item,index) in cart" :key="index">
				<view class="d-row">
					<view class="d-clo d-jc-between padding-left-10"> <h3>{{item.name}}</h3> <label class="font22 gray4">{{item.type}}</label> </view>
				</view>
				<view>
					<span >X {{item.number}}</span>
					<span class="padding-40">¥{{item.price}}</span>
				</view>
			</view>
			
			
			<view class="d-row d-jc-between padding-10 font30 padding-bottom-20 border-bottom-2">
				<view>配送费</view>
				<view>¥{{peisongfei}}</view>
			</view>
			
			<view class="d-row d-jc-between d-ai-centen padding-10 padding-top-30">
				<view class="gray3"> 账单</u-icon></view>
				<view>共{{ numsum }}个商品，小计：<label class="font-bold font40">¥ {{ total+peisongfei}}</label></view>
			</view>
			
		</view>
		
		<!-- 去支付 -->
		<view class="pay">
			<view style="margin:0 auto;" class="width90 d-row d-jc-between d-ai-centen">
				<view class="d-row d-jc-start d-ai-centen" style="height: 120rpx;padding-left: 10rpx;" > 
					<view class="colorWhite font60 padding-left-10">
						<span class="font40">¥</span>
						<span class="padding-left-10">{{ total+ peisongfei}}</span>
					</view>
				</view>
				<view class="go gray4">
					<button class="go gray4 font28 colorWhiteBgBlue" @tap="goPayMoney">
						提交订单
					</button>
				</view>
				
			</view>
		</view>
		
		<!-- 提示框 -->
		<u-toast ref="uToast" />
	</view> 
</template>

<script>
	import {mapState, mapMutations} from 'vuex'
	
	export default {
		data() {
			return {
				butt:true,
				cart:[],
				dengluname:"",
				dengluaddress:"",
				denglumobile:"",
			}
		},
		props: {
			index:'index'
		},
		computed: {
			//计算各种价格数量
			...mapState(['orderType', 'address', 'store']),
			numsum(){
				return this.cart.reduce((acc, cur) => acc + cur.number, 0)
			},
			total() {
				return this.cart.reduce((acc, cur) => acc + cur.number * cur.price, 0)
			},
			amount() {
				return this.cart.reduce((acc, cur) => acc + cur.number * cur.price, 0)
			},
			peisongfei(){
				return this.butt ? 1 : 0;
			}
		},
		onLoad() {
			this.cart = uni.getStorageSync('cart')
		},
		onShow(){
			this.getdenglu()
		},
		methods: {
			//拿取登录信息
			getdenglu(){
				let denglu=uni.getStorageSync("denglu") || {}
				if (denglu){
					this.dengluname=denglu.name,
					this.dengluaddress=denglu.address,
					this.denglumobile=denglu.mobile
				}
			},
			
			//去订单页面
			goPayMoney(){
				let time = Date.now();
				uni.showLoading({
					title: '马上就好啦'
				});
				let food = [];
				for (let item of this.cart) {
				  let { name, number } = item;
				  food.push({ name, number });
				}
				let obj={
					food:food,
					name:this.dengluname,
					butt:this.butt,
					address:this.dengluaddress,
					mobile:this.denglumobile,
					total:this.total+this.peisongfei,
					time:time
				};
				console.log(obj)
				uniCloud.callFunction({
					name:"foodlist",
					data:obj
				}).then(res=>{
					uni.hideLoading();
					this.$refs.uToast.show({
						title: '已提交订单',
						type: 'success',
						position:'center',
						// 持续时间
						duration:'1000'
					})
					setTimeout(() => {
						uni.switchTab({
							url: '../order/order-list',
							animationType: 'pop-in',
							animationDuration: 2000
						});
					}, 1000);
				})
			},
			
			

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
