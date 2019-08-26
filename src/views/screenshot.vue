<template>
    <div>
        <div class="img_box" v-if="dataURL">
            <img class="real_pic" :src="dataURL" width="100%"/>
        </div>
        <div>
            <div class="imageWrapper" ref="imageWrapper">
                <slot>
                    <img
                            class="img"
                            :src="require('../assets/hb_header.jpg')"
                            width="100%"
                            height="auto"
                    />
                    <p class="hrader_title">
                        在长沙鑫广合4S店购买的新车出现三次故障，退车无门
                    </p>
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

        <v-btn style="z-index: 9999" @click="toImage">截图</v-btn>
    </div>
</template>

<script>
    import html2canvas from 'html2canvas'
    export default {
        name: 'screenshot',
        components: {
            html2canvas
        },
        data: () => ({
            dataURL: ''
        }),
        mounted() {
        },
        methods: {
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
<style scoped>
    .img_box{
        max-width: 750px;
        position: fixed;
        background: #000;
        width: 100%;
        height: 100%;
        z-index: 999;
    }
    .imageWrapper{
        position: relative;
    }
    .imageWrapper .hrader_title{
        position: absolute;
        font-size: 22px;
        color: #fff;
        font-weight: 800;
        top: 10%;
        width: 100%;
        padding: 15px;
        margin: 0;
    }
    .imageWrapper .text{
        width: 100%;padding: 15px;background: #fff;margin: 0;
    }
    .textbox{
        width: 100%;
        height: 60px;
        overflow: hidden;
    }
    .real_pic{
        max-width: 750px;
        width: 90%;
        height: auto;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
</style>
