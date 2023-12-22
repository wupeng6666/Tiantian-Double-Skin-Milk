<template>
	<view >
		<view  style="margin-top: 20rpx;border-bottom: 1rpx solid #e2e2e2;"></view>
		
		<!-- 商品 -->
		<view  class="shop" style="height: 100%;">
			<view class="d-row">
				<!-- 商品导航 -->
				<view class="shop-bar">
					<!-- <view class="shop-bar-title " :class="{activecolor:shopBarTitleIndex == index}" -->
											<!-- v-for="(item,index) in shopBarTitleList" :key="index" @tap="shopBarTitleClick(index)"> -->
					<view class="shop-bar-title" v-for="(item,index) in shopBarTitleList" :key="index" @tap="shopBarTitleClick(index)">
						{{ item.title }}
					</view>
				</view>
				
				<!-- 商品列表 -->
				<view class="width100 shop-list" style="height: 100%;">
					<scroll-view scroll-y="true" style="height: 100%;">
						<view class="font-bold" style="margin-top: 20rpx; margin-left: 20rpx;">{{shopDetailListTile}}</view>
						
						<view class="width90 d-row d-ai-centen" style="margin: 10rpx auto;height: 180rpx;"
							v-for="(good,index) in shopDetailList" :key=index v-if="good.type === shopDetailListTile">
							<view>
								<image class="shop-list-img" :src="good.image"></image>
							</view>
							
							<view class="width100 d-row margin-20">
								<view class="width100 d-clo">
									<view class="font-bold font30">{{good.name}}</view>
									<view class="font22 gray3">{{good.type}}</view>
									
									<view class="width100 d-row d-jc-between d-ai-centen">
										<view class="color-red">¥ {{good.price}}</view>
										<view class="d-row">
											<!-- <view v-show="goodCartNum(good.id)" @tap="reducShopClick(good,1)" class="reduc iconfont iconsami-select" ></view> -->
											<view v-show="goodCartNum(good.id)" @tap="reducShopClick(good,1)" class="reduc"> - </u-icon> </view>
											<view v-show="goodCartNum(good.id)" class="number" >{{ goodCartNum(good.id) }}</view>
											<view @tap="addShopClick(good,1)" class="add"> + </view>
											<!-- <view @tap="addShopClick(good,1)" class="add iconfont iconadd-select"></view> -->
										</view>
									</view>
								</view>
							</view>
						</view>
						<!-- <view style="height: 100rpx;"></view> -->
					</scroll-view>
				</view>
				
			</view>
			
			<view class="shop-car">
				<view style="margin:0 auto;" class="width90 d-row d-jc-between d-ai-centen">
					<view class="d-row d-jc-start d-ai-centen" style="height: 120rpx;padding-left: 10rpx;"
						@tap="showShopCarModelClick"> 
						<view> <image class="shop-car-img" :src="getCartGoodsPrice > 0 ? '/static/cars-blue.png':'/static/cars.png'" ></image> </view>
						<view class="d-clo d-jc-around" style="height: 100rpx;margin-left: 10rpx;"> 
							<view class="gray4 font36" :class="{colorWhite:getCartGoodsPrice > 0}">
								{{ getCartGoodsPrice>0?'￥'+getCartGoodsPrice:shopCarTip}}
							</view>
							<view class="gray4">配送费 <span class="margin-10 font22">¥1</span> | 可自取</view>
						</view>
					</view>
					<view class="go gray4">
						<button class="go gray4 font28" :class="{colorWhiteBgBlue: !disabledPay}" @tap="goPay" :disabled="disabledPay">
							{{ getCartGoodsPrice > 0 ? (disabledPay ? `差${spread}元起送` : goTitle) : goTitle }}
						</button>
					</view>
					
				</view>
			</view>
			
			
			<!-- 购物车模态框 start -->
			<u-popup v-model="showShopCarModel" mode="bottom" length="80%"  >
				<view class="d-clo d-ai-centen">
					<view class="width90 d-row d-jc-between font32" style="height: 100rpx;line-height: 100rpx;">
						<view>已选商品</view>
						<view @tap="emptyClick"><u-icon name="trash"></u-icon>清空</view>
					</view>
					
					<view  class="width90 d-row d-jc-between d-ai-centen border-bottom-1 padding-10"
						v-for="(good,index) in cart" :key="index" >
						<view> 
							<label class="font34 font-bold">{{good.name}}</label>  
							<p class="font26 gray3">{{good.type}}</p>  
						</view>
						<view class="d-row">
							<view class="color-red">¥ {{good.price}}</view>
							<view class="d-row padding-left-20">
								<view v-show="goodCartNum(good.id)" @tap="reducShopClick(good,1)" class="reduc">-</view>
								<view v-show="goodCartNum(good.id)" class="number" >{{ goodCartNum(good.id) }}</view>
								<view @tap="addShopClick(good,1)" class="add">+</view>
							</view>
						</view>
					</view>
				</view>
			</u-popup>
			<!-- 购物车模态框 end -->
			
			<!-- 清空购物车提示框 start -->
			<u-modal v-model="showCartEntry" content="清空购物车"  width="85%" :content-slot="true" 
				:mask-close-able="true"
				:show-title="false"
				:show-confirm-button="false"
				:show-cancel-button="false"
				:title-style="titleStyle" 
				:confirm-style="confirmStyle"
				:cancel-style="cancelStyle"
				 @confirm="cartEntry"> 
				 
				 <view class="d-clo height300 padding-40 d-jc-between bg-color-f7">
					 <view class="font-bold font36">提示</view>
					 <view class="font-bold margin-top-20 margin-bottom-30">清空购物车</view>
					 <view class="width100 d-row d-jc-between margin-center padding-bottom-10" style="color: #2a9e85;">
						 <view @tap="cartEntry" class="click-show">确定</view>
						 <view @tap="noCartEntry" class="click-show">取消</view>
					 </view>
				 </view>
				 
				 

				 
			 </u-modal>
			<!-- 清空购物车提示框 end -->
			
		</view>
		

		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
	export default {
		data() {
			return {
				// 购物车相关
				titleStyle:{
					float:'left'
				},
				cancelStyle:{
					float:'right'
				},
				confirmStyle:{
					float:'left',
					width:'200rpx'
				},
				
				//添加号的按钮标志
				number:0,

				shopBarTitleList:[
					{title:'双皮奶',value:'a'},
					{title:'饮料',value:'b'},
					
				],
				minPrice:'10',

				showShopCarModel:false,
				showCartEntry:false,
				shopDetailListTile:'双皮奶',
				shopDetailList:[
					{
						"id":'1',
						"name":'中杯双皮奶',
						"type":'双皮奶',
						"yx":'200',
						"price":'6',
						"image":'/static/shanpin/goods/中杯双皮奶.jpg'
					},
					{
						"id":'2',
						"name":'大杯双皮奶',
						"type":'双皮奶',
						"yx":'100',
						"price":'9',
						"image":'/static/shanpin/goods/大杯双皮奶.jpg'
					},
					{
						"id":'3',
						"name":'红豆双皮奶',
						"type":'双皮奶',
						"yx":'60',
						"price":'6',
						"image":'/static/shanpin/goods/红豆双皮奶.jpg'
					},
					{
						"id":'4',
						"name":'柠檬茶',
						"type":'饮料',
						"yx":'50',
						"price":'7',
						"image":'/static/shanpin/goods/柠檬茶.jpg'
					},
					{
						"id":'5',
						"name":'柚子茶',
						"type":'饮料',
						"yx":'60',
						"price":'7',
						"image":'/static/shanpin/goods/柚子茶.jpg'
					}
				],
				shopCarTip:'未选购商品',
				cart:[],
			}
		},
		onLoad(option) {
			// this.activeTabIndex=0;
			// this.shopBarTitleIndex=0;
			
			// console.log(JSON.stringify(option) +"详情页面接收--"+option.id); //打印出上个页面传递的参数。
			// this.form.id = option.id;
			// this.form.name = option.name;
			// this.form.headImg = option.headImg;
		},
		computed: {
			...mapState(['orderType', 'address', 'store']),
			goTitle(){
				if(!this.disabledPay) return "去结算"
				return "¥"+this.minPrice+"起送"
			},
			goodCartNum() {	//计算单个商品添加到购物车的数量
				return (id) => this.cart.reduce((acc, cur) => {
					if(cur.id === id) {
						return acc += cur.number
					}
					return acc
				}, 0)
			},
			getCartGoodsNumber() { //计算购物车总数
				return this.cart.reduce((acc, cur) => acc + cur.number, 0)
			},
			getCartGoodsPrice() {	//计算购物车总价
				return this.cart.reduce((acc, cur) => acc + cur.number * cur.price, 0)
			},
			disabledPay() { //是否达到起送价
				return ((this.getCartGoodsPrice < this.minPrice) ? true : false)
			},
			spread() { //差多少元起送
				return parseFloat((this.minPrice - this.getCartGoodsPrice).toFixed(2))
			}
		},
		methods: {
			shopBarTitleClick(index){
				// this.shopBarTitleIndex = index
				this.shopDetailListTile = this.shopBarTitleList[index].title
			},
			async getForm(type){
				console.log("获取"+type+"表单")
			},
			async getShopBarTitleList(type){
				console.log("获取"+type+"商品种类")
			},

			addShopClick(good,num){
				const index = this.cart.findIndex(item => {
					return item.id === good.id
				})
				if(index > -1) {
					this.cart[index].number += num
				} else {
					this.cart.push({
						id: good.id,
						name: good.name,
						price: good.price,
						number: num,
						type: good.type
					})
				}
			},
			reducShopClick(good){
				const index = this.cart.findIndex(item => item.id === good.id)
				this.cart[index].number -= 1
				if(this.cart[index].number <= 0) {
					this.cart.splice(index, 1)
				}
				if(this.getCartGoodsNumber <= 0){
				}
			},
			goPay(){
				uni.showLoading({title: '加载中'})
				uni.setStorageSync('cart', JSON.parse(JSON.stringify(this.cart)))
				uni.navigateTo({
					url: './pay',
					animationType: 'pop-in',
					animationDuration: 2000
				})
				uni.hideLoading()
			},
			showShopCarModelClick(){
				this.showShopCarModel = !this.showShopCarModel && this.getCartGoodsNumber>0
			},
			emptyClick(){
				//显示清空购物车提示
				this.showCartEntry = true;
			},
			cartEntry(){
				console.log("实际清空购物车操作-----")
				//实际清空购物车操作
				this.cart = [];
				this.showCartEntry = false;
				this.showShopCarModel = false;
			},
			noCartEntry(){
				this.showCartEntry = false;
			}
		}
	}
</script>

<style>
	.s-head-img{
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
	}
	
	.title-name{
		padding: 15rpx 0;
	}
	.active {
		font-weight: bold;
	}
	.titleBottom{
		margin: 0 auto;
		width: 100%;
		border-bottom: 5rpx solid #007AFF;
	}
	
	.pram{
		border-bottom: 1rpx solid #f5f5f5;
		height: 90rpx;
		line-height: 90rpx;
	}
	.phone-tag{
		color: #007AFF;
		border: 1rpx solid #007AFF;
		border-radius: 50%;
		padding: 3rpx;
	}
	.button-bottom{
		height: 80rpx;
		background-color: #FFFFFF;
		text-align: center;
		line-height: 80rpx;
		border-radius: 40rpx;
	}
	
	.shop{
		
	}
	.shop-bar{
		background-color: #f7f7f7;
		flex: 1;
		height: 800rpx;
	}
	.shop-bar-title{
		padding-top: 20rpx;
		height: 90rpx;
		line-height: 70rpx;
		text-align: center;
	}
	.activecolor{
		background-color: #FFFFFF;
	}
	.shop-list{
		flex: 3;
		margin-top: 20rpx;

	}
	.shop-list-img{
		width: 150rpx;
		height: 150rpx;
	}
	.shop-car{
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
	.shop-car-img{
		width: 80rpx;
		height: 130rpx;
		
		position: relative;
		top: -10rpx;
	}
	
	.reduc{
		color: #007AFF;
		background-color: #FFFFFF;
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 40rpx;
		border: 1rpx solid #007AFF;
	}
	.number {
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
	}
	.add{
		color: #FFFFFF;
		background-color: #007AFF;
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		text-align: center;
		line-height: 40rpx;
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
	
	.click-show{
		width: 100rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		border-radius: 10rpx;
	}
	.click-show:hover{            
		/*鼠标悬浮效果*/
		/*阴影*/
		/* box-shadow: 5px 5px 5px grey; */
		/*发光*/
		background-color: #c6c6c6;
		
	}
</style>
