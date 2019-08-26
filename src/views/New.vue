<template>
	<div id="new">
        <!--评论悬浮窗-->
		<div id="news_input_bg" v-show="news_bg_show">
		  <div style="width: 100%;height: 100%;background:transparent;" @click="HindInput"></div>
		  <div class="news_input_bottom">
		    <div style="width: 90%;height:110px;padding: 15px;margin: 15px auto; background: #f5f6f8;">
				<textarea placeholder="优质评论将会被优先显示" style="resize: none;display: block;width: 100%;height: 100%;">
				</textarea>
			</div>
			  <v-btn depressed color="#0d76ff" dark class="my-4 mx-4" style="float: right;">发表</v-btn>
		  </div>
		</div>
        <!--海报悬浮窗-->
        <div class="hb_imgbox" v-if="dataURL">
            <img class="real_pic" :src="dataURL" width="100%"/>
        </div>
        <!--海报节点-->
        <div class="hb">
            <div class="imageWrapper" ref="imageWrapper">
                <slot>
                    <img
                            class="img"
                            :src="require('../assets/hb_header.jpg')"
                            width="100%"
                            height="auto"
                    />
                    <v-card flat class="hrader_title">
                        <div class="left_box">
                            已解决
                        </div>
                        <div class="right_box">
                            在长沙鑫广合4S店购买的新车出现三次故障，退车无门
                        </div>
                    </v-card>
                    <p class="text">
                        “ 2019年4月24日在长沙市岳麓区麓谷鑫广合4S店购买一台东方标准408汽车，总金额132028元，2019年5月25日出现发动机故障，找鑫广合4S店售后更换发… ”
                    </p>
                    <v-card flat>
                        <v-list-item>
                            <v-list-item-avatar class="avatar">
                                <v-img :src="require('../assets/dx_logo.png')"
                                       :lazy-src="require('../assets/dx_logo.png')"
                                       width="100%">
                                </v-img>
                            </v-list-item-avatar>
                            <v-list-item-content class="namebox">
                                <v-list-item-title class="name">大湘来帮忙</v-list-item-title>
                                <v-list-item-subtitle class="time">2019-08-06</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-card-text class="textbox">
                            由红网消费维权回复：接到消费者的投诉后，7月31日，红网《消费维权》栏目联系了长沙鑫广合4S店负责人。该负责人称，在车辆出现第一次故障时，消费者提出退车，但因车辆行驶里程已超过《三包法》规定里程数，且此车不属于家用汽车属于租赁车辆，不允更换、退货，目前车辆停在长沙鑫广合4S店内，未经消费者同意，工作人员还未进行维修，正与消费者积极协商中。
                        </v-card-text>
                    </v-card>
                    <v-img
                            :src="require('../assets/hb_foot.jpg')"
                            width="100%"
                            height="auto"
                    >
                    </v-img>
                </slot>
            </div>
        </div>
        <!--新闻详情-->
		<v-card flat class="title">
			<div class="left_box">
				已解决
			</div>
			<div class="right_box">
				在长沙鑫广合4S店购买的新车出现三次故障，退车无门
			</div>
		</v-card>
		<v-card flat class="content">
			<v-row>
				<v-col :cols="1" class="timeline">
					<div class="circle"></div>
				</v-col>
				<v-col :cols="11" class="timeitem">
					<v-card flat>
						<v-list-item>
							<v-list-item-avatar class="avatar">
								<v-img :src="require('../assets/dx_logo.png')"
								:lazy-src="require('../assets/dx_logo.png')"
								width="100%">
								</v-img>
							</v-list-item-avatar>
							<v-list-item-content class="namebox">
								<v-list-item-title class="name">大湘来帮忙</v-list-item-title>
								<v-list-item-subtitle class="time">2019-08-06</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-card-text class="textbox">
						      由红网消费维权回复：接到消费者的投诉后，7月31日，红网《消费维权》栏目联系了长沙鑫广合4S店负责人。该负责人称，在车辆出现第一次故障时，消费者提出退车，但因车辆行驶里程已超过《三包法》规定里程数，且此车不属于家用汽车属于租赁车辆，不允更换、退货，目前车辆停在长沙鑫广合4S店内，未经消费者同意，工作人员还未进行维修，正与消费者积极协商中。
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<v-col :cols="1" class="timeline">
					<div class="circle"></div>
				</v-col>
				<v-col :cols="11" class="timeitem">
					<v-card flat>
						<v-list-item>
							<v-list-item-avatar class="avatar">
								<v-img :src="require('../assets/user.png')"
								:lazy-src="require('../assets/user.png')"
								width="100%">
								</v-img>
							</v-list-item-avatar>
							<v-list-item-content class="namebox">
								<v-list-item-title class="name">
									爆料人
									<span class="namesmall">
										(投诉人信息已匿名处理)
									</span>
								</v-list-item-title>
								<v-list-item-subtitle class="time">2019-08-06</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
						<v-card-text class="textbox">
						      2019年4月24日在长沙市岳麓区麓谷鑫广合4S店购买一台东方标准408汽车，总金额132028元，2019年5月25日出现发动机故障，找鑫广合4S店售后更换发动机，2019年7月15日出现汽车飞轮开裂，找鑫广合4S店售后更换飞轮配件，2019年7月21日出现发动机配件断裂，再次找到鑫广合4S店，该店负责人姜总，他说只答应再次维修。本人购买不到三个月的新车出现三次大的故障维修，此车存在严重的质量问题，屡次出现故障造成安全隐患，本人要求退车并赔偿损失。
						</v-card-text>
						<v-img
							:src="require('../assets/汽车.png')"
							:aspect-ratio="640/330"
							class="img"
						></v-img>
					</v-card>
				</v-col>
			</v-row>
			<v-row justify="space-around" no-gutters style="text-align: center">
				<v-col :cols="2" class="mx-3 my-2">
					<v-img
							:src="require('../assets/点赞.png')"
							@:click=""
					></v-img>
					<p style="margin: 0;">点赞</p>
				</v-col>
				<v-col :cols="2" class="m-3 my-2" @click="toImage">
						<v-img
								:src="require('../assets/海报.png')"
						></v-img>
					<p>海报</p>
				</v-col>
			</v-row>
		</v-card>
		<div style="width: 100%;height: 50px;"></div>
		<v-row justify="center" no-gutters class="bottombox">
			<v-col :cols="10" class="m-3 my-2">
				<input placeholder="评论" readonly class="bottominput" type="text" @click="ShowInput"/>
			</v-col>
		</v-row>
	</div>
</template>

<script>
    import html2canvas from 'html2canvas'
	export default {
		name: 'New',
		data() {
			return {
                dataURL: '',
				star_show:true,
				news_bg_show:false,
				new_id: this.$route.params.new_id,
				dianzan:1
			}
		},
		components: {
            html2canvas
		},
		methods: {
			ShowInput(){
			  this.news_bg_show=true
			},
			HindInput(){
			  this.news_bg_show=false
			},
            toImage() {
                html2canvas(this.$refs.imageWrapper,{
                    backgroundColor: null,
                    useCORS: true, // 允许图片跨域
                    taintTest: true, // 在渲染前测试图片
                    timeout:500 // 加载延时
                }).then((canvas) => {
                    let dataURL = canvas.toDataURL("image/png");
                    this.dataURL = dataURL;
                });
            }
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #new{
        padding: 0;
        margin: 0;
    }
	#news_input_bg{
	  position: fixed;
	  z-index: 9999;
	  width: 100%;
	  max-width: 740px;
	  height: 100%;
	  background:rgba(0,0,0,0.5);
	}
	#news_input_bg .news_input_bottom{
	  position: absolute;
	  bottom: 0;
	  width: 100%;
	  height: 220px;
	  background: #fff;
	}
	.bottombox{
		max-width: 750px;
		width: 100%;
		height: 60px;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		padding:5px;
		background: #0d76ff;
	}
	.bottominput{
		padding: 5px 10px;
		border-radius: 15px;
		width: 100%;
		background: #fff;
	}
	/* 顶部新闻标题 */
	.title {
		padding: 15px 5px;
	}
	.title .left_box {
		float: left;
		display: inline-block;
		width: auto;
		height: auto;
		padding: 2px 5px;
		margin: 5px;
		background: #0d76ff;
		color: #fff;
		border-radius: 5px;
		font-size: 14px;
	}
	.title .right_box {
		display: inline-block;
		width: 80%;
		height: 60px;
		font-size: 18px;
		font-weight: 600;
	}

	/* 中部新闻详情 */
	.content {
		margin-top: 8px;
		padding: 10px 15px;
	}

	.content .timeline {
		padding: 0;
		position: relative;
	}
	.content .timeline .circle{
		position: absolute;
		top: 4%;
		left: 35%;
		width: 6px;
		height: 6px;
		background: #dcdcdc;
		border-radius: 100%;
	}
	.content .timeline:before {
		box-sizing: border-box;
		position: absolute;
		top: 5%;
		left: 35%;
		content: "";
		display: block;
		width: 6px;
		height: 100%;
		background: #f6f6f6;
		border-left: 2px solid #fff;
		border-right: 2px solid #fff;

	}

	.content .timeitem {
		padding: 0;
	}
	.content .timeitem .namebox{
		padding-left: 0px;
	}
	.content .timeitem .namebox .name{
		font-size: 16px;
		font-weight: 800;
		padding: 0;
		margin: 0;
	}
	.content .timeitem .namebox .namesmall{
		font-size: 12px;
		color: #b6b6b6;
		}
	.content .timeitem .namebox .time{
		font-size: 14px;
		padding: 0;
		margin: 0;
	}
	.content .timeitem .textbox{
		font-size: 14px;
		color: #363636;
	}
	.content .timeitem .img{
		margin:0 15px 0 15px;
	}
/*    haibao*/
    .hb_imgbox{
        max-width: 750px;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        z-index: 999;
    }
    .real_pic{
        max-width: 750px;
        width: 85%;
        height: auto;
        position: fixed;
        top: 0;
        bottom:15%;
        left: 0;
        right: 0;
        margin: auto;
    }
    .hb{
        z-index: -9999;
        position: fixed;
        width: 100%;
        height: auto;
        opacity: 0;
    }
    .imageWrapper{
        position: relative;
    }
    .hb .hrader_title{
        position: absolute;
        font-size: 22px;
        color: #fff;
        font-weight: 800;
        top: 10%;
        width: 100%;
        padding: 15px;
        margin: 0;
        background: transparent;
    }
    .hb .hrader_title .left_box {
        float: left;
        display: inline-block;
        width: auto;
        height: auto;
        padding: 2px 5px;
        margin: 5px;
        background: #fff;
        color: #0d76ff;
        border-radius: 5px;
        font-size: 14px;
    }
    .hb .hrader_title .right_box {
        display: inline-block;
        width: 80%;
        height: 60px;
        font-size: 18px;
        font-weight: 600;
    }
    .hb .text{
        width: 100%;
        padding: 15px;
        background: #fff;
        margin: 0;
    }
    .hb .textbox{
        width: 100%;
        height: 60px;
        overflow: hidden;
    }
</style>
