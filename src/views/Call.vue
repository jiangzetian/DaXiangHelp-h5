<template>
	<div class="call">
		<v-snackbar v-model="snackbar" top :color="snackbar_color" :timeout="3000">
			{{ text }}
			<v-btn depressed dark :color="snackbar_color" @click="snackbar = false">
				知道了
			</v-btn>
		</v-snackbar>
		<v-bottom-sheet v-model="flie_bg">
			<v-sheet class="text-center py-4" height="auto">
				<div style="width: 100%;height: 60px;line-height: 60px;" @click="fileClick('image')">照片</div>
				<div style="width: 100%;height: 60px;line-height: 60px;" @click="fileClick('video')">视频</div>
			</v-sheet>
		</v-bottom-sheet>
		<form>
			<div class="top_box">
				<textarea class="textarea" placeholder="请输入内容..." v-model="content"></textarea>
				<v-row>
					<div class="video_box" v-for="(v,i) in video_urls" :key="v.i">
						<video controls width="100%" height="100%">
							<source :src="v">
						</video>
						<v-icon @click="delVideo(i)"  color="#f00" class="icon">close</v-icon>
					</div>
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
					<div class="add_image" @click="filePicker">
						<input
								accept="image/*"
								type="file"
								value
								id="file_image"
								multiple="multiple"
								@change="addImage"
						/>
						<input
								accept="video/*"
								type="file"
								value
								id="file_video"
								multiple="multiple"
								@change="addVideo"
						/>
					</div>
				</v-row>
			</div>
			<p style="background: #fff;border-bottom: 1px solid #e0e0e0;margin: 0;padding: 15px;font-size: 14px;color: #999;">
				请认真填写以下内容（仅小编可见）</p>
			<table class="table">
				<tbody>
					<tr>
						<td>姓名：</td>
						<td>
							<input type="text" class="input" placeholder="请输入姓名" v-model="name" />
						</td>
					</tr>
					<tr>
						<td>事发地址：</td>
						<td>
							<v-btn
									depressed
									samll
									to="/qqmap"
									class="code_btn"
							>
								搜索地址
							</v-btn>
							<input type="text" class="input code_input" placeholder="请输入位置" v-model="address" />
						</td>
					</tr>
					<tr>
						<td>事发日期：</td>
						<td>
							<date-picker
							class="input"
							value-type="format"
							v-model="date"
							lang="zh"
							placeholder="请选择日期"
							:editable="false"
							:clearable="false"
							width="115px"
							>
							</date-picker>
						</td>
					</tr>
					<tr>
						<td>事发时间：</td>
						<td class="time_box">
							<date-picker
							class="input"
							value-type="format"
							v-model="time"
							lang="zh"
							type="time"
							format="HH:mm:ss"
							placeholder="请选择时间"
							:editable="false"
							:clearable="false"
							width="115px"
							>
							</date-picker>
						</td>
					</tr>
					<tr>
						<td>匿名：</td>
						<td>
							<v-switch style="padding: 0;margin: 0;"  hide-details color="#0d76ff" v-model="switch1" class="input"></v-switch>
						</td>
					</tr>
					<tr>
						<td>手机号码：</td>
						<td>
							<input type="text" class="input" placeholder="请输入手机号码" v-model="tel" />
						</td>
					</tr>
					<tr>
						<td>验证码：</td>
						<td>
							<v-btn
									:disabled="if_code"
									depressed samll
									@click="SetCode"
									class="code_btn px-1"
							>
									{{text_code}}
							</v-btn>
							<input type="text" placeholder="请输入验证码" class="input code_input" v-model="code" />

						</td>
					</tr>
				</tbody>
			</table>
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
		name: 'Call',
		data() {
			return {
				//上传图片返回的路径 数组
				img_data:[],
				img_urls:[],
				//上传视频返回的路径 数组
				video_data:[],
				video_urls:[],

				flie_bg:false,
				text: '',
				snackbar: false,
				snackbar_color: '#f00',
				if_code:false,
				text_code:"发送验证码",
				timer: null,
				'content': '',
				'pic': '',
				'name': '',
				'address': '',
				'date': '',
				'time': '',
				'switch1': false,
				'tel': '',
				'code': '',
			}
		},
		components: {
			DatePicker
		},
		methods: {
			filePicker(){
				this.flie_bg=true;
			},
			fileClick(type){
				if (type=='image'){
					document.getElementById('file_image').click();
				}
				if (type=='video'){
					document.getElementById('file_video').click();
				}
			},
			delImg(id){
				// console.log(id);
				this.img_urls.splice(id,1);
				this.img_data.splice(id,1);
				// console.log(this.img_urls);
			},
			delVideo(id){
				// console.log(id);
				this.video_urls.splice(id,1);
				this.video_data.splice(id,1);
				// console.log(this.img_urls);
			},
			addVideo(files){
				console.log(files.target.files);
				this.video_urls.push('https://mat1.gtimg.com/hn/jiangzetian/mjzs_2019-08-15/mjzs.mp4');
				this.flie_bg=false;
				this.snackbar = true;
				this.snackbar_color = "#0d76ff";
				this.text = "视频选择成功";
			},
			addImage (files) {
				console.log(files.target.files.length);
				if (files.target.files.length === 0) {
					return false;
				}
				if (files.target.files.length > 5) {
					this.snackbar = true;
					this.snackbar_color = "#f00";
					this.text = "上传图片不能超过5张";
					return false;
				}
				if (this.img_data.length > 5) {
					this.snackbar = true;
					this.snackbar_color = "#f00";
					this.text = "上传图片不能超过5张";
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
					this.flie_bg=false;
					this.snackbar = true;
					this.snackbar_color = "#0d76ff";
					this.text = "图片选择成功";
				}
			},
			onChange(date) {
				console.log(date.format('YY-MM-DD'));
			},
			SetCode() {
				if (!this.tel) {
					this.snackbar = true;
					this.snackbar_color = "#f00"
					this.text = "请填写电话号码";
				} else {
					var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
					if (!myreg.test(this.tel)) {
						this.snackbar = true;
						this.snackbar_color = "#f00"
						this.text = "请填写正确电话号码";
					} else {
						this.snackbar = true;
						this.snackbar_color = "#0d76ff";
						this.text = "正在发送验证码...";
						const TIME_COUNT = 60;
						if (!this.timer) {
							this.text_code = TIME_COUNT;
							this.if_code = true;
							this.timer = setInterval(() => {
								if (this.text_code > 0 && this.text_code <= TIME_COUNT) {
									this.text_code--;
								} else {
									this.if_code = false;
									clearInterval(this.timer);
									this.timer = null;
									this.text_code="发送验证码"
								}
							}, 1000)
						}

					}
				}
			},
			Submit() {
				if (!this.content) {
					this.snackbar = true;
					this.snackbar_color = "#f00"
					this.text = "请填写爆料内容";
					return false;
				}
				if (!this.name) {
					this.snackbar = true;
					this.snackbar_color = "#f00"
					this.text = "请填写姓名";
					return false;
				}
				if (!this.address) {
					this.snackbar = true;
					this.snackbar_color = "#f00"
					this.text = "请填写地址";
					return false;
				}
				if (!this.date) {
					this.snackbar = true;
					this.snackbar_color = "#f00"
					this.text = "请填写日期";
					return false;
				}
				if (!this.time) {
					this.snackbar = true;
					this.snackbar_color = "#f00"
					this.text = "请填写时间";
					return false;
				}
				if (!this.tel) {
					this.snackbar = true;
					this.snackbar_color = "#f00"
					this.text = "请填写手机号码";
					return false;
				} else {
					var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
					if (!myreg.test(this.tel)) {
						this.snackbar = true;
						this.snackbar_color = "#f00"
						this.text = "请填写正确电话号码";
						return false;
					}
				}
				if (!this.code) {
					this.snackbar = true;
					this.snackbar_color = "#f00"
					this.text = "请填写验证码";
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
	}
	.top_box {
		padding: 15px;
		background: #fff;
		margin-bottom:8px;
	}
	>>>.mx-input-append {
		display: none;
	}
	>>>.mx-input{
		padding: 5px;
		text-align: right;
		background:none;
		outline:none;
		border:none;
		box-shadow: none;
	}
	>>>.mx-input:focus{
		background:none;
		outline:none;
		border:none;
		box-shadow: none;
	}
	.time_box >>>.mx-time-header{
		display: none;
	}
	.time_box >>>.mx-calendar-header:after{
		content: "时：分：秒";
	}
	.textarea {
		width: 100%;
		height: 100px;
		resize: none;
		outline: none;
	}
	.video_box{
		background: #000;
		position: relative;
		margin: 5px;
		width:80%;
		height:120px;
		margin: 0 auto;
	}
	.video_box .icon{
		position: absolute;
		right:-5%;
		top: -5%;
		background: #f5f5f5;
		border-radius: 100%;
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
	.input {
		display: block;
		float: right;
		text-align: right;
	}
	.table {
		width: 100%;
		height: 100%;
		padding:0 0 15px 0;
		background: #fff;
		font-size: 14px;
	}

	.table tbody tr {
		display: block;
		padding: 5px 15px;
		border-bottom: 1px solid #e0e0e0;
	}

	.table tbody tr td:nth-child(1) {
		display: inline-block;
		width: 26%;
		padding: 5px;
	}

	.table tbody tr td:nth-child(2) {
		display: inline-block;
		width: 74%;
		padding: 5px;
	}

	.code_input {
		width: 110px;
		margin-top: 10px;
		margin-right:5px;
	}

	.code_btn {
		float: right;
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
