<template>
	<!-- <div class="qui-list">
		<span class="list-tips">{{tipsText}}</span>
		<qui-btn :msg="msg" class="small" v-on:btnClickEvent="btnClickEvent"></qui-btn>
	</div> -->

	<!-- 动态按钮 -->
	<div class="qui-list">
		<span class="list-tips">{{tipsText}}</span>
		<component :is="currentView" :msg="msg" v-on:btnClickEvent="clickEvent" class="small" keep-alive></component>
	</div> 
</template>
<script>
	import quiBtn from '../components/quiButton.vue';
	import quiArrow from '../components/quiArrow.vue';
	export default {
		components: {
			'qui-btn': quiBtn,
			'qui-arrow': quiArrow
		},
		props: {
			msg: {
				default: '下载'
			},
			tipsText: {
				default: 'tipsText文本'
			},
			currentView: {
				default: 'qui-btn' 
			}

		},
		methods: {
			clickEvent: function () {
				alert('qui-list ==> 点击事件：' + this.tipsText);
			}
		}
	}
</script>
<style scoped>
  .qui-list{
    padding: 10px 0;
    margin-left: 10px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
    vertical-align: middle;
    display: flex;
    justify-content:center;
    align-items:Center;
    min-height: 30px;
  }
  .qui-list .qui-btn{
    float: right;
    margin-right: 10px;

  }
  .qui-list .list-tips{
    padding: 0 5px;
    color: #00A0D8;
    float: left;
    vertical-align: middle;
    flex:1;
    text-align: left;
    font-size: 14px;
  }
</style>