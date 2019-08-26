<template>
    <div id="published">
        <v-layout row wrap class="search_box">
            <v-flex xs1>
                <v-icon class="icon">search</v-icon>
            </v-flex>
            <v-flex xs11>
                <input type="text" placeholder="请输入搜索内容" />
            </v-flex>
        </v-layout>
        <v-card flat class="list_box">
            <v-list three-line>
                <v-touch
                        v-on:swipeleft="swiperleft(i)"
                        v-on:swiperight="swiperright"
                        class="wrapper"
                        v-for="(v,i) in 2"
                >
                    <v-list-item
                            class="item"
                            :style="i==touch_id?'right:100px':'right:0px'"
                    >
                        <v-row>
                            <v-col :cols="4" class="py-0 " @click="goNew">
                                <v-list-item-content>
                                    <v-img
                                            :src="require('../assets/汽车.png')"
                                            :aspect-ratio="170/125"
                                            class="img"
                                    ></v-img>
                                </v-list-item-content>
                            </v-col>
                            <v-col :cols="8" style="position: relative;padding: 0;" @click="goNew">
                                <v-list-item-content >
                                    <p class="text">
                                        在长沙鑫广合4S店购买的新车出现三次故障，退车无门
                                    </p>
                                    <p class="time">
                                        2019-08-20
                                    </p>
                                </v-list-item-content>
                            </v-col>
                        </v-row>
                        <div
                                class="delbox"
                                @click="del(i)">
                            修改
                        </div>
                    </v-list-item>
                </v-touch>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'published',
        data() {
            return {
                touch_id:-1,
            }
        },
        methods: {
            goNew(){
                this.$router.push('/new/1');
            },
            del(id){
                this.$router.push('/change/'+id);
            },
            swiperleft(i) {
                this.touch_id=i;
            },
            swiperright() {
                this.touch_id=-1;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #published {
        width: 100%;
        height: 100%;
        padding: 15px 0px;
        background: #fff;
    }

    .search_box {
        width: 90%;
        height: auto;
        margin: 0 auto;
        background: #f5f6f8;
        padding: 5px;
    }

    .search_box input,
    .search_box .icon {
        height: 100%;
        width: 100%;
    }

    .list_box {
        width: 100%;
        margin: 0 auto;
    }
    .list_box .item{
        border-bottom: 1px solid #e0e0e0;
        position: relative;
        transition:1s;
    }
    .list_box .delbox{
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
        position: absolute;
        right: -100px;
        width: 100px;
        height: 100%;
        background: #fe3231;
        text-align: center;
        color: #fff;
    }
    .list_box .time{
        padding: 0;
        margin: 0;
        text-align: right;
        position: absolute;
        bottom:10%;
        right:15px;
        font-size: 12px;
        color: #959595;
    }
</style>
