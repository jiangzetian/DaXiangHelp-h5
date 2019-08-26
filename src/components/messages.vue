<template>
    <div id="message">
        <v-card tile flat class="list_box1">
            <v-list flat style="padding:0px;">
                <v-list-item-group color="primary">
                    <v-touch
                            v-on:swipeleft="swiperleft(i)"
                            v-on:swiperight="swiperright"
                            class="wrapper"
                            v-for="(v,i) in message_list"
                            :key="v.i"
                    >
                        <v-list-item
                                class="list_item"
                                :style="i==touch_id?'right:100px':'right:0px'">
                            <v-list-item-avatar size="50" class="px-0 py-0" @click="goMessage(i)">
                                <v-img :src="require('../assets/user.png')" :lazy-src="require('../assets/user.png')" width="100%">
                                </v-img>
                            </v-list-item-avatar>
                            <v-list-item-content class="py-0 px-0" @click="goMessage(i)">
                                <v-list-item-subtitle>
                                    <div style="float: left;">
                                        <span style="font-size: 16px;color: #333;">
                                            {{v.title}}
                                        </span>
                                        <span style="font-size:12px;line-height:22px;text-align:center;background:#0d76ff;color: #fff;">
                                            官方消息
                                        </span>
                                    </div>
                                    <div style="font-size: 10px;line-height:22px;float: right;">
                                        {{v.time}}
                                    </div>
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>
                                    {{v.text}}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                            <div
                                    class="delbox"
                                    @click="del(i)">
                                删除
                            </div>
                        </v-list-item>
                    </v-touch>
                </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'message',
        data() {
            return {
                touch_id:-1,
                message_list:[
                    {title:'大湘来帮忙',text:'我的评论我的评论我的评论我的评论我的评论我的评论我的评论我的评论',time:'2019-7-30 12:00:00'},
                    {title:'测试名',text:'我的评论我的评论我的评论我的评论我的评论我的评论我的评论我的评论',time:'2019-7-30 12:00:00'},
                ],
            }
        },
        methods: {
            goMessage(i){
                this.$router.push('/message/'+i);
            },
            del(id){
                alert('你确定要删除第'+(id+1)+'条信息吗？')
            },
            swiperleft(i) {
                this.touch_id=i;
            },
            swiperright() {
                this.touch_id=-1;
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #message{
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .list_item{
        border-bottom: 1px solid #e0e0e0;
        position: relative;
        transition:1s;
    }
    .list_item .delbox{
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
</style>
