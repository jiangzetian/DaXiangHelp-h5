<template>
	<v-bottom-navigation
			:input-value="bottomNav_show"
			:value="bottomNav"
			flat
			fixed
			grow
			id="bottom_nav"
			max-width="750px"
			color="#0d76ff"
			>
		<v-btn value="/" to="/">
			<span>首页</span>
			<v-icon>home</v-icon>
		</v-btn>

		<v-btn value="/cooperation" to="/cooperation">
			<span>合作单位</span>
			<v-icon>pan_tool</v-icon>
		</v-btn>

		<v-btn value="/user" to="/user">
			<span>个人中心</span>
			<v-icon>person</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>

<script>
	export default {
		name: 'BottomNav',
		data() {
			return {
				bottomNav_show: true,
				bottomNav: this.$route.path,
			}
		},
		computed: {},
		methods: {},
		mounted() {},
		watch:{
		},
	}
</script>

<style scoped>
	#bottom_nav{
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto auto;
	}
	#bottom_nav >>> .v-btn::before{
		transition: none !important;
		background-color: #fff;
	}
</style>
