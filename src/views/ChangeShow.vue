<template>
    <div class="changeshow">
        <div class="title_box">
            在长沙鑫广合4S店购买的新车出现三次故障，退车无门.
        </div>
        <div class="">
            <v-row>
                <div class="img_box" v-for="(v,i) in img_urls" :key="v.i">
                    <v-img
                            class="img"
                            :src="v"
                            :lazy-src="v"
                            width="70px"
                            height="70px"
                    >
                    </v-img>
                </div>
            </v-row>
        </div>
        <div class="list1 list">
            <p>事发地址</p>
            <div>雨花区湘府东路（汇财国际）</div>
        </div>
        <div class="list">
            <p>事发时间</p>
            <div>2019-08-22 12:00:00</div>
        </div>
        <v-row class="btn_box" justify="center" no-gutters>
            <v-btn right depressed dark color="#0d76ff" class="btn"  :to="'/change/'+new_id">
                编辑
            </v-btn>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "ChangeShow",
        data() {
            return {
                new_id: this.$route.params.new_id,
                img_urls:[require('../assets/汽车.png')],
            }
        },
    }
</script>
<style scoped>
    .changeshow{
        padding: 15px;
        width: 100%;
        height: 100%;
        background: #ffffff;
    }
    .title_box{
        width: 100%;
        font-size:14px;
    }
    .img_box{
        position: relative;
        margin: 15px;
        display: inline-block;
        width: 70px;
        height: 70px;
    }
    .list1{
        margin-top: 100px;
    }
    .list p{
        margin: 0;
    }
    .list div{
        line-height:60px;
        color: #999;
    }
    .btn{
        width: 50%;
        margin: 0 auto;
    }
</style>
