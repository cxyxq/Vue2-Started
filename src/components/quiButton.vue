<template>
	<button class="qui-btn" v-on:click="btnClickEvent">
		<slot name='icon'></slot><!-- 支持向这个地方插入其他内容 -->
		<span>{{msg}}</span>
	</button>
</template>

<script>
	export default {
		props:  {
			msg: {
				default: '下载'
			}
		},
		methods: {
			btnClickEvent: function () {
				alert(this.msg);
				this.$emit('btnClickEvent');//关键代码父组件触发自定义事件
			}
		}
	}
</script>
<style scoped>
	@import './css/reset.import.css';
	@import './css/qui-btn.import.css';
</style>