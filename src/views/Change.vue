<template>
    <div class="call">
        <v-snackbar v-model="snackbar" top :color="snackbar_color" :timeout="3000">
            {{ text }}
            <v-btn depressed dark :color="snackbar_color" @click="snackbar = false">
                知道了
            </v-btn>
        </v-snackbar>
        <form>
            <div class="top_box">
                <textarea class="textarea" placeholder="请输入内容..." v-model="content"></textarea>
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
                        <v-icon @click="delImg(i)"  color="#f00" class="icon">close</v-icon>
                    </div>
                    <div class="add_image" @click="fileClick">
                        <input
                                type="file"
                                value
                                id="file"
                                multiple="multiple"
                                @change="addImg"
                                placeholder="添加图片"
                        />
                    </div>
                </v-row>
            </div>
            <v-row class="btn_box" justify="center" no-gutters>
                    <v-btn left depressed dark color="#999" class="btn">
                        取消
                    </v-btn>
                    <v-btn right depressed dark color="#0d76ff" class="btn" @click="Submit">
                        提交
                    </v-btn>
            </v-row>
        </form>
    </div>
</template>

<script>
    import DatePicker from 'vue2-datepicker'
    export default {
        name: 'Change',
        data() {
            return {
                //上传图片返回的路径 数组
                img_data:[],
                img_urls:[require('../assets/汽车.png')],
                text: '',
                snackbar: false,
                snackbar_color: '#f00',
                'content': '2019年4月24日在长沙市岳麓区麓谷鑫广合4S店购买一台东方标准408汽车，总金额132028元，2019年5月25日出现发动机故障，找鑫广合4S店售后更换发动机，2019年7月15日出现汽车飞轮开裂，找鑫广合4S店售后更换飞轮配件，2019年7月21日出现发动机配件断裂，再次找到鑫广合4S店，该店负责人姜总，他说只答应再次维修。本人购买不到三个月的新车出现三次大的故障维修，此车存在严重的质量问题，屡次出现故障造成安全隐患，本人要求退车并赔偿损失。',
                'pic': '',
            }
        },
        components: {
            DatePicker
        },
        methods: {
            fileClick(){
                document.getElementById('file').click();
            },
            delImg(id){
                // console.log(id);
                this.img_urls.splice(id,1);
                this.img_data.splice(id,1);
                // console.log(this.img_urls);
            },
            addImg (files) {
                console.log(files.target.files.length);
                if (files.target.files.length === 0) {
                    return false;
                }
                if (files.target.files.length > 4) {
                    this.snackbar = true;
                    this.snackbar_color = "#f00";
                    this.text = "上传图片不能超过4张";
                    return false;
                }
                if (this.img_data.length > 4) {
                    this.snackbar = true;
                    this.snackbar_color = "#f00";
                    this.text = "上传图片不能超过4张";
                    return false;
                }
                for (var i=0;i<=files.target.files.length;i++) {
                    let file = files.target.files[i];
                    this.img_data.push(file);
                    // console.log(this.img_data);
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    let that = this;
                    reader.onload = function(e) {
                        let url = e.target.result;
                        that.img_urls.push(url);
                        // console.log(that.img_urls);
                    };
                    // let param = new FormData(); //创建form对象
                    // param.append('tweetPic',file,file.name);//通过append向form对象添加数据
                    // param.append('id','0');//添加form表单中其他数据
                    // //console.log(param.get('tweetPic')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                    // //添加请求头
                    // let config = {
                    // 	headers:{'Content-Type':'multipart/form-data'}
                    // };
                    // axios.post('url/',param,config)
                    // 		.then(response=>{
                    // 			console.log(response.data);
                    // 		})
                    this.snackbar = true;
                    this.snackbar_color = "#0d76ff";
                    this.text = "图片选择成功";
                }
            },
            Submit() {
                if (!this.content) {
                    this.snackbar = true;
                    this.snackbar_color = "#f00"
                    this.text = "请填写爆料内容";
                    return false;
                }
                this.snackbar = true;
                this.snackbar_color = "#0d76ff";
                this.text = "填写完成，正在保存...";
                var form_data = {
                    'content': this.content,
                    'name': this.name,
                    'address': this.address,
                    'date': this.date,
                    'time': this.time,
                    'switch1': this.switch1,
                    'tel': this.tel,
                    'code': this.code,
                }
                console.log(form_data);
            },
            GetTime() {
                var date = new Date();

                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                this.date = year + "-" + month + "-" + strDate;
                var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                var Seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                var time = hours + ":" + minutes + ":" + Seconds;
                this.time = time;
            },
        },
        mounted() {
            this.GetTime();
        },
        watch: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .call,form,.table{
        overflow-y: hidden;
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .top_box {
        padding: 15px;
        background: #fff;
        margin-bottom:8px;
    }
    .textarea {
        width: 100%;
        height: 100px;
        resize: none;
        outline: none;
    }
    .img_box{
        position: relative;
        margin: 5px;
        display: inline-block;
        width: 70px;
        height: 70px;
    }
    .img_box .icon{
        position: absolute;
        right:-10%;
        top: -15%;
        background: #f5f5f5;
        border-radius: 100%;
    }
    .add_image {
        margin: 5px;
        width: 70px;
        height: 70px;
        background: url(../assets/add_img.png) center center no-repeat;
        background-size: 100% 100%;
    }
    .add_image input{
        display: none;
    }
    .btn_box {
        max-width: 750px;
        width: 100%;
        height:56px;
        background: #fff;
        margin: auto;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .btn_box .btn {
        display: block;
        border-radius: 0;
        height:100% !important;
    }
    .btn_box .btn:nth-child(1){
        width: 50%;
    }
    .btn_box .btn:nth-child(2){
        width: 50%;
    }
</style>
