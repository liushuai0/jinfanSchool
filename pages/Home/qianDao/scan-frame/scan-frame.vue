<template>
	<view class="Container">
		<camera :device-position="device?'front':'back'" v-if="chooseImg" flash="auto" @error="error" style="width: 100%" :style="{height:wHeight+'px'}">
			            <cover-image
			              class="cover-4"
			              src="https://img-blog.csdn.net/20180226111559273"
			              style="width:60rpx;height:60rpx;"
			              @click="devicePosition"
			            ></cover-image>
		</camera>
		<image mode="widthFix" v-if="!chooseImg" class="photos-box" :src="src"></image>
		<button type="primary" plain v-if="chooseImg" class="btn1" @click="takePhoto">点击拍照</button>
		<button type="primary" v-if="!chooseImg" class="btn1" @click="updateback">开始上传</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "",
				wHeight:500,
				chooseImg:true,
				device:false
			}
		},
		onLoad() {
			var that=this
			uni.getSystemInfo({
				success(res) {
					console.log(res.windowHeight);
					that.wHeight=res.windowHeight-60
					
				}
			})
			
		},
		computed:{
	
		},
		methods: {
			takePhoto() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						console.log(res);
						this.chooseImg=false
						this.src = res.tempImagePath
						/* 返回调用页面并把图片URL传递过去 */
						/* let pages = getCurrentPages();
						let prevPage = pages[pages.length - 2]; 
						prevPage.setData({
							"image": res.tempImagePath,
						})
						uni.navigateBack(); */
						
						/* 调用页面获取图片URL方法 */
						/* let pages = getCurrentPages();
						let currPage = pages[pages.length-1];
						if(typeof(currPage.data.image) != undefined && currPage.data.image != null){
							console.log('获取图片：', currPage.data.image)
						} */
					}
				});
			},
			error(e) {
				console.log(e.detail);
			},
			  devicePosition() {
			    this.device=!this.device,
			    console.log("当前相机摄像头为:", this.device ? "后置" : "前置");
			  },
			  updateback(e){
				 //   let pages = getCurrentPages();
				 //  let prevPage = pages[pages.length - 2]; 
				 //  console.log(prevPage);
				 //  prevPage.imageSrc= this.src,
					// console.log(this);
				 //  uni.navigateBack(); 
				 uni.redirectTo({
				 	url:'../qianDao?imageSrc='+this.src
				 })
			  }
		}
	}
</script>

<style>
	.Container{
		width: 100%;
	}
	.scan-img{
		opacity: 0.4;
		width: 100%;
		height:500upx;
	}
	.scan-text{
		font-size: 20px;
		text-align: center;
		line-height: 60upx;
	}
	.btn1{
		width: 250rpx;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		margin-top: 10px;
	}
	.photos-box{
		width: 100%;
	}
	.cover-4{
	  position: absolute;
	  top: 60rpx;
	  right:40rpx;
	}
	
</style>
