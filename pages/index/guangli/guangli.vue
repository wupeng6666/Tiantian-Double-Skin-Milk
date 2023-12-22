<template>
	<div class="container">
		<div class="center">
			<input type="textarea" label="密码" placeholder="请填写密码666"  class="input-field" @input="checkInput"/>
		</div>
	</div>
</template>
<script>
	export default {
		methods: {
			checkInput(event) {
				if (event.target.value === '666') {
					// 如果输入了666，则进行页面跳转
					uni.navigateTo({
						url:'/pages/index/guangliorderlist/guangliorderlist',
					});
				}
			}
		}
	}
</script>
<style>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 800rpx;
	background: linear-gradient(to bottom,#FFC0CB, #ffffff);
}

.center {
	text-align: center;
}

.input-field {
	padding: 10px;
	border: 2px solid #6f6f6f; /* 添加边框 */
	border-radius: 5px; /* 添加圆角 */
}
</style>