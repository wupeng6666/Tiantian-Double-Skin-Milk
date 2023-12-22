<template>
	<view class="d-clo d-ai-centen">
		<image src="../../../static/shanpin/index/上课.png" mode=""></image>
		<view class="width100">
			<u-cell-group>
				<u-field  v-model="form.name" label="联系人" placeholder="请填写姓名" > </u-field>
				<u-field  v-model="form.number" label="学号" placeholder="请填写学号" @blur="checkNumber" > </u-field>
			</u-cell-group>
		</view>

		<view class="submit" :class="{'bg-blue':isShow,colorWhite:isShow}" @tap="submit">
			提交申请
		</view>
		
		
		<!-- 提示框 -->
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				form:{
					name:null,
					number:null,
				}
			}
		},
		watch:{
			
		},
		computed: {
			isShow(){
				return  (this.form.name != null	&& this.form.number != null) ? true:false
			}
		},
		methods: {

			submit(){
				uni.showLoading({
					title: '马上就好啦'
				});
				if(this.isShow){
					let obj=this.form
					console.log(obj)
					uniCloud.callFunction({
						name:"denglu",
						data:obj
					}).then(res=>{
						if(res.result.code){
							uni.hideLoading();
							this.$refs.uToast.show({
								title: '登录失败',
								type: 'error',
								position:'center',
								// 持续时间
								duration:'1000'
							})
						}else{
							uni.hideLoading();
							this.$refs.uToast.show({
								title: '登录成功',
								type: 'success',
								position:'center',
								// 持续时间
								duration:'1000'
							})
							//存储登记记录
							uni.setStorageSync("denglu",res.result)
							//退回页面
							setTimeout(() => {
								uni.navigateBack({
									delta: 1  // 返回上一级页面
								});
							}, 1000);
							
						}

						
						
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

		}
	}
</script>


<style scoped>
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
