<template>
    <div class="help">
        <!-- 选择弹出框 -->
        <div v-show="bg_show" id="bg">
            <div class="center">
                <ul>
                    <li v-for="selscts_item in selscts_arry" @click="GetSelset(selscts_item)">
                        {{selscts_item}}
                    </li>
                    <li @click="Hindbg()">取消</li>
                </ul>
            </div>
        </div>
        <!-- 选择栏 -->
        <v-layout row wrap py-0 my-4 style="background: #fff;line-height: 45px;padding: 15px;">
            <v-flex xs6>
                反馈主题
            </v-flex>
            <v-flex xs6>
                <img src="../assets/右箭头.png" height="50%" style="float: right;margin: 10px;" />
                <span style="float: right;color: #999;" @click="Showbg">{{selects}}</span>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12>
        <textarea v-model="text" placeholder="说说你的问题..." style="width: 100%;height: 160px;background: #fff;padding: 15px;resize: none;
    outline: none;"></textarea>
            </v-flex>
        </v-layout>

        <v-bottom-navigation dark :value="true" color="#0d76ff" :fixed="true" id="bottom_nav">
            <v-layout align-center justify-space-around row fill-height>
                <v-flex xs6 @click="Submit('rest')">
                    <div style="width: 100%;height: 56px;background: #ccc;color: #fff;text-align: center;line-height: 56px;">取消</div>
                </v-flex>
                <v-flex xs6 @click="Submit('toform')">
                    <div style="width: 100%;height: 56px;background: #0d76ff;color: #fff;text-align: center;line-height: 56px;">提交</div>
                </v-flex>
            </v-layout>
        </v-bottom-navigation>
    </div>
</template>

<script>
    export default {
        name: 'help',
        data() {
            return {
                'text':'',
                'selects': '请选择类型',
                'selscts_arry': ['系统问题', '建议反馈', '使用问题', '其他'],
                'bg_show': false
            }
        },
        methods: {
            Showbg() {
                this.bg_show = true
            },
            Hindbg() {
                this.bg_show = false
            },
            GetSelset(selscts_item){
                console.log(selscts_item);
                this.selects=selscts_item;
                this.Hindbg();
            },
            Submit(data){
                if(data=='toform'){
                    if(this.selects=='请选择类型'){
                        alert('请选择类型')
                    }else{
                        if(this.text){
                            console.log({'selects':this.selects,'text':this.text})
                        }else{
                            alert('请输入你发现的问题')
                        }
                    }
                }
            }
        },
    }
</script>

<style scoped>
    html,
    body,
    #app,
    #cont,
    .help {
        width: 100%;
        height: 100%;
        background: #f5f6f8 !important;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto auto;
    }

    #bg {
        position: fixed;
        z-index: 9999;
        width: 100%;
        max-width: 740px;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    #bg .center {
        position: fixed;
        bottom: 0;
        top: 0;
        right: 0;
        left: 0;
        margin: auto auto;
        width: 80%;
        height: 260px;
        background: #fff;
    }

    #bg .center ul {
        width: 100%;
        list-style: none;
        text-align: center;
        padding: 0;
    }
    #bg .center ul li{
        border-bottom: 1px solid #e0e0e0;
        line-height: 50px;
    }
    #bg .center ul li:last-child{
        border-bottom:none;
    }
</style>
