<template>
	<v-app id="app">
		<router-view v-wechat-title="$route.meta.title"></router-view>
	</v-app>
</template>

<script>
	import BottomNav from './components/BottomNav'
	export default {
		name: 'App',
		data() {
			return {

			}
		},
		components: {
			'bottom-nav': BottomNav
		},
		computed: {},
		methods: {},
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		font-family: "微软雅黑";
	}

	body,
	html,
	#app
	{
		max-width: 750px;
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		margin: 0 auto;
		overflow-x: hidden;
	}
</style>
