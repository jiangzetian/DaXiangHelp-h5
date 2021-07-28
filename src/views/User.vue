<template>
	<div class="user">
		<v-img
				class="img"
				:src="require('../assets/user_banner.jpg')"
				:lazy-src="require('../assets/user_banner.jpg')"
				width="100%"
		>
		</v-img>
		<v-card flat dark class="avatar">
			<v-list-item>
				<v-list-item-avatar size="60" style="margin-left:0;margin-right: 5px;">
					<v-img :src="require('../assets/user.png')" :lazy-src="require('../assets/user.png')" width="100%">
					</v-img>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>大湘来帮忙</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-card>
		<v-card tile flat class="list_box1">
			<v-list flat dense style="padding:0px;">
				<v-list-item-group color="primary">
					<v-list-item v-for="(v,i) in user_list1" :key="v.i" class="list1_item" :to="v.src">
						<v-list-item-icon>
							<v-icon :color="v.color" v-text="v.icon" size="30"></v-icon>
						</v-list-item-icon>
						<v-list-item-content style="padding:0;">
							<v-list-item-title v-text="v.text"></v-list-item-title>
						</v-list-item-content>
						<v-list-item-icon>
							<v-icon  size="25">keyboard_arrow_right</v-icon>
						</v-list-item-icon>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-card>
		<div style="height: 56px;width: 100%;"></div>
	</div>
</template>

<script>
	export default {
		name: 'User',
		data() {
			return {
				user_list1: [{
						icon: 'star',
						color: '#fd6780',
						text: '我的点赞',
						src: '/details/collection'
					},
					{
						icon: 'collections_bookmark',
						color: '#19dfc4',
						text: '我的发表',
						src: '/details/published'
					},
					{
						icon: 'message',
						color: '#74beff',
						text: '我的消息',
						src: '/details/message'
					},
					{
						icon: 'history',
						color: '#fcd262',
						text: '我的足迹',
						src: '/details/history'
					},
					{
						icon: 'collections_bookmark',
						color: '#fd6780',
						text: '意见反馈',
						src: '/details/help'
					},
				],
			}
		},
		methods: {

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.avatar {
		width:90%;
		margin: 0 auto;
		margin-top: -40%;
		background: transparent !important;
	}
	.list_box1{
		width: 90%;
		margin: 0 auto;
		margin-top: 20px;
		border-radius: 2px;
		padding: 0;
	}
	.list1_item{
		border-bottom: 1px solid #e0e0e0;
	}
	.list1_item:last-child{
		border: none;
	}
</style>
