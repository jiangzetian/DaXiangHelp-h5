<template>
	<v-app id="newslist">
		<v-tabs centered fixed-tabs id="tabs_box" background-color="#f5f5f5">
			<v-tab v-for="(v,i) in tabs_nav" :key="v.i" ripple class="tabs_nav">
				{{v}}
			</v-tab>
			<v-tabs-slider class="v_tabs_slider" style=""></v-tabs-slider>
			<v-tab-item v-for="(v,i) in tabs_nav" :key="v.i" ripple class="tabs_nav_item">
				<v-card class="mx-auto my-8 item_box" v-for="v in 8" flat to="/new/1">
					<v-card-text style="padding: 0;"></v-card-text>
					<v-list-item-avatar color="grey darken-3" class="avatar">
						<v-img :src="require('../assets/user.png')"
						:lazy-src="require('../assets/user.png')"
						width="100%">
						</v-img>
					</v-list-item-avatar>
					<div class="right_box">
						已解决
					</div>
					<v-card-title class="new_title pt-8 px-2">
						在长沙鑫广合4S店购买的新车出现三次故障，退车无门在长沙鑫广合4S店购买的新车出现三次故障，退车无门在长沙鑫广合4S店购买的新车出现三次故障，退车无门
					</v-card-title>
					<v-card-text class="content">
						<div class="text">
							2019年4月24日在长沙市岳麓区麓谷鑫广合4S店购买一台东方标准408汽车，总金额132028元，2019年5月…
						</div>
						<span class="category">
							{{tabs_nav[i]}}
						</span>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-text class="foot">
							<v-row align="center" justify="space-between">
								<v-col style="text-align: left;padding: 0;">
									<v-btn text color="#9b9b9c">
										2019-08-06
									</v-btn>
								</v-col>
								<v-col style="text-align: right;padding: 0;">
									<v-btn text color="#9b9b9c">
										<v-icon size="16">share</v-icon>
										分享
									</v-btn>
								</v-col>
							</v-row>
					</v-card-text>
				</v-card>
				<div style="height: 56px;width: 100%;"></div>
			</v-tab-item>
		</v-tabs>
	</v-app>
</template>

<script>
	export default {
		name: 'NewsList',
		data() {
			return {
				tabs_nav: ['热门投诉', '热门爆料', '消费维权', '房产投诉', '咨询求助'],
				active: '',
			}
		},
		methods: {

		},
		created() {

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/* tabs */
	#tabs_box {
		border-radius: 20px 20px 0 0;
	}
	.tabs_nav {
		height: auto;
		padding: 0;
		margin: 0 !important;
		border-bottom: 1px solid #e5e5e5;
	}

	.v_tabs_slider {
		width: 30%;
		height: 2px;
		border-radius: 2px;
		margin: 0 auto;
		margin-top: -8%;
		background: #0d76ff;
		opacity: 1;
	}

	.tabs_nav_item {
		background: #f5f5f5;
		padding: 30px 15px 0 15px;
	}

	.item_box {
		position: relative;
		margin-bottom: 45px;
		margin-top: 15px;
	}

	.avatar {
		width: 60px;
		height: 60px;
		position: absolute;
		top: -30px;
		left: 30px;
		border-radius: 60px;
	}

	.right_box {
		transform: rotate(45deg);
		width: 80px;
		height: 0px;
		border-width: 0 20px 20px 20px;
		border-style: none solid solid;
		border-color: transparent transparent #0d76ff;
		font-size: 12px;
		text-align: center;
		line-height: 20px;
		color: #fff;
		position: absolute;
		top: 10px;
		right: -20px;
	}

	.new_title {
		font-size: 16px;
		font-weight: 600;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.content {
		padding: 7px;
		font-size: 12px;
	}
	.content .text{
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.category {
		width: auto;
		height: auto;
		padding: 5px;
		border: 1px solid #949495;
		border-radius: 5px;
	}

	.foot {
		padding: 4px 7px;
		color: #9b9b9c;
	}
</style>
