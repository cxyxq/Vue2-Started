<template>
	<div id="pageQuiButton">
		<!-- 使用自定义的btn组件  -->
		<qui-btn msg="确定" class="small" v-on:btnClickEvent="doSomething">
			<img slot="icon" class="icon" src="" />
		</qui-btn>
	</div>
</template>
<script>
	import quiBtn from '../components/quiButton.vue'
	export default {
		name: 'pageQuiButton',
		components: {
			'qui-btn': quiBtn
		},
		methods: {
			doSomething: function() {
				alert('父组件pageQuiButton自定义事件');
			}
		}
	}
</script>
<style scoped>
	
</style>