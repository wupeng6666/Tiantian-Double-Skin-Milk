<template>
	<view class="d-clo d-ai-centen">
		<image src="../../static/shanpin/index/上课.png" mode=""></image>
		
		<view class="width100">
			<u-cell-group>
				<u-field  v-model="form.address" type="textarea" label="宿舍地址" placeholder="请填写宿舍号,例如:17A-666" > </u-field>
				<u-field  v-model="form.name" label="联系人" placeholder="请填写姓名" > </u-field>
				<u-field  v-model="form.mobile" label="手机号" placeholder="请填写手机号" @blur="checkMobile"> </u-field>
				<u-field  v-model="form.number" label="学号" placeholder="请填写学号" @blur="checkNumber" > </u-field>
			</u-cell-group>
		</view>
		
		<button class="submit" :class="{'bg-blue':isShow,colorWhite:isShow}" @tap="submit"   >
			提交申请
		</button>
		
		
		
		
		<!-- 提示框 -->
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					address:null,
					name:null,
					mobile:null,
					number:null,
				}
			}
		},
		watch:{
			
		},
		onLoad(){

		},
		computed: {
			isShow(){
				return  (this.form.address != null 
							&& this.form.name != null 
							&& this.form.mobile != null
							&& this.form.number != null) ? true:false
			}
		},
		methods: {
			submit(){
				uni.showLoading({
					title: '加载中'
				});
				if(this.isShow){
					let obj=this.form
					console.log(obj)
					uniCloud.callFunction({
						name:"zhuce",
						data:obj
					}).then(res=>{
						uni.hideLoading();
						this.$refs.uToast.show({
							title: '注册成功',
							type: 'success',
							position:'center',
							// 持续时间
							duration:'1000'
						})
						setTimeout(() => {
							uni.navigateBack({
								delta: 1  // 返回上一级页面
							});
						}, 800);
						
					})
					
				}
			},

		
	
	
	
	
	
			checkNumber(){
				if (isNaN(this.form.number)) {
					
					this.$refs.uToast.show({
						title: '学号必须为数字',
						type: 'warning',
						position:'center',
						duration:'1000'
					})
					
					this.form.number='';
				}
			},
			checkMobile(){
				if (isNaN(this.form.mobile)) {
					
					this.$refs.uToast.show({
						title: '电话号码必须为数字',
						type: 'warning',
						position:'center',
						duration:'1000'
					})
					this.form.mobile='';
				}
			}
			// pushCloud(){
			// 	uniCloud.callFunction({
			// 		name:"zhuce",
			// 		data:{}
			// 	})
			// }
		}
	}
</script>


<style>
.submit{
	background-color: #f7f7f7;
	color: #a5a5a5;
	width: 90%;
	height: 100rpx;
	margin: 0 auto;
	border-radius: 60rpx;
	
	position: fixed;
	bottom: 30rpx;
	left: 5%;
	z-index: 1000;
	
	text-align: center;
	line-height: 100rpx;
	font-size: 32rpx;
}
image{
	width: 500rpx;
	height: 500rpx;
}
</style>
