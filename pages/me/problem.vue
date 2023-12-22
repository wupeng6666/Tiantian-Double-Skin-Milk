<template>
	<view class="font50 developer-container">
		<image src="../../static/shanpin/user/Developer.jpg" mode=""></image>
		<text class="developer-name">开发者：吴鹏</text>
		<text class="developer-info">邮箱：</text>
		<text class="developer-email">wupeng780605@qq.com</text>
		<text class="developer-info">电话：</text>
		<text class="developer-phone">15976853085</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>


<style scoped>


	.developer-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
	}

	.developer-name {
		margin-top: 20px;
		font-weight: bold;
	}

	.developer-info {
		margin-top: 10px;
	}

	.developer-email,
	.developer-phone {
		color: #007bff;
	}
</style>