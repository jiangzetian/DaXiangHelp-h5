<template>
    <div class="message">
        <v-card tile flat class="list_box1">
            <v-list flat style="padding:0px;">
                <v-list-item-group color="primary">
                        <v-list-item
                                v-for="(v,i) in message_list"
                                :key="v.i"
                                v-if="i==message_id"
                                class="list_item"
                                >
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
                            </v-list-item-content>
                        </v-list-item>
                        <v-card tile flat
                                v-for="(v,i) in message_list"
                                :key="v.i"
                                v-if="message_id==i"
                                class="px-5"
                        >
                        {{v.text}}
                        </v-card>
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
                message_id:this.$route.params.message_id,
                message_list:[
                    {title:'大湘来帮忙',text:'我的评论我的评论我的评论我的评论我的评论我的评论我的评论我的评论',time:'2019-7-30 12:00:00'},
                    {title:'测试名',text:'我的评论我的评论我的评论我的评论我的评论我的评论我的评论我的评论',time:'2019-7-30 12:00:00'},
                ],
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
        watch: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .message{
        overflow-y: hidden;
        width: 100%;
        height: 100%;
        background: #fff;
    }
</style>
