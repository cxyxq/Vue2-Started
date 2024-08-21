<template>
	<div>
		<qui-list msg="按钮" tipsText="自定义文案-右边是按钮"></qui-list>
		<qui-list msg="按钮" tipsText="自定义文案-右边是按钮"></qui-list>
		<qui-list msg="箭头" tipsText="自定义文案-右边是箭头" currentView="qui-arrow"></qui-list>
	</div>
</template>
<script>
	import quiList from '../components/quiList.vue';
	export default {
		components: {
			'qui-list' : quiList
		}
	}
</script>