<template>
	<view class="Container">
		<view class="header">
			<image src="../../../static/image/cardimg.jpeg" class="big_img" mode="widthFix"></image>
			<view class="img_text">
				<text class="title">计算机职业技能课程</text>
				<view class="jinru">
					<image src="../../../static/image/bofang.png" mode=""></image>
					进入课程
				</view>
			</view>
		</view>
		<view class="content">
			<view class="cont_title">计算机职业技能课程</view>
			<view class="cont_price">
				<view class="cont_left">
					￥
					<text>300.00</text>
				</view>
				<view class="c_time">
					<image src="../../../static/image/shizhong.png" class="shizhong" mode=""></image>
					40分钟
				</view>
			</view>
		</view>
		<view class="detail">
			<view class="card">
				<view class="card_item">
					<image src="../../../static/image/wenben.png" ></image>
					<small>大纲考点阿萨德刚离开萨克拉几个</small>
				</view>
				<view class="card_item">
					<image src="../../../static/image/wenben.png"></image>
					<small>大纲考点阿萨德刚离开萨克拉几个</small>
				</view>
				<view class="card_item">
					<image src="../../../static/image/wenben.png"></image>
					<small>大纲考点阿萨德刚离开萨克拉几个大纲考点阿萨德刚离开萨克拉几个大纲考点阿萨德刚离开萨克拉几个</small>
				</view>
				<view class="card_item">
					<image src="../../../static/image/wenben.png"></image>
					<small>大纲考点阿萨德刚离开萨克拉几个</small>
				</view>
			</view>
			<view class="card_nav">
				<image class="card_nav_img" src="../../../static/image/yingyong.png" mode=""></image>
				<text>类 别</text>
				<view class="nav_right">
					技术类
					<image src="../../../static/image/zhuandao.png" mode=""></image>
				</view>
			</view>
			<view class="card_nav">
				<image class="card_nav_img" src="../../../static/image/yingyong.png" mode=""></image>
				<text>专 业</text>
				<view class="nav_right">
					计算机
					<image src="../../../static/image/zhuandao.png" mode=""></image>
				</view>
			</view>
		</view>
		<button class="btn1" @tap="toOrder">立即购买</button>
	</view>
</template>

<script>
	import http from "../../../common/getList.js"
export default {
	data() {
		return {
			
		};
	},
	onLoad(options) {
		var that=this
		console.log(options.id);
		if(options.id){
			that.show()
		}
	},

	methods: {
		show(){
			let url=""
			let data={
				
			}
			http.request(url,data).then(
				res=>{
					console.log(res);
				},error=>{
					
				}
			)
		},
		toOrder(e){
			uni.navigateTo({
				url:'../videoOrder/videoOrder'
			})
		}
	}
};
</script>

<style>
.Container {
	display: flex;
	flex-direction: column;
	position: relative;
}
.big_img {
	width: 750rpx;
}
.img_text {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 750rpx;
	position: absolute;
	top: 100rpx;
	color: white;
}
.title {
	width: 750rpx;
	font-size: 60rpx;
	text-align: center;
	font-weight: 500;
}

.jinru {
	font-size: 24rpx;
	width: 180rpx;
	height: 60rpx;
	border: 1rpx solid #ffffff;
	border-radius: 20rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30rpx;
}
.jinru image {
	width: 30rpx;
	height: 30rpx;
	margin-right: 10rpx;
}

.content {
	display: flex;
	flex-direction: column;
	
}
.cont_title {
	font-size: 34rpx;
	font-weight: bold;
	width: 750rpx;
	height: 80rpx;
	line-height: 70rpx;
	padding-left: 30rpx;
	padding-bottom: 10rpx;
	border-bottom: 2rpx solid #e1e1e1;
}
.cont_left{
	color: #F76260;
	padding-left: 30rpx;
}
.cont_left text{
	font-size: 40rpx;
}
.cont_price {
	display: flex;
	flex-direction: row;
	height: 80rpx;
	align-items: center;
}
.c_time{
	position: absolute;
	right: 50rpx;
	display: flex;
	align-items: center; 
}
.shizhong {
	width: 30rpx;
	height: 30rpx;
	margin-right: 20rpx;
}
.detail{
	background-color: #F5F5F5;
	display: flex;
	flex-direction: column;
	padding-bottom: 200rpx;
}
.card{
	display: flex;
	flex-direction: column;
	padding: 20rpx 30rpx;
	margin: 30rpx;
	background-color: white;
			border-radius: 10rpx;
}
.card_item{
	display: flex;
	flex-direction: row;
	
}
.card_item image{
	width: 30rpx;
	height: 30rpx;
	margin-top: 8rpx;
}
.card_item small{
	color: #999999;
	margin-left: 20rpx;
	width: 620rpx;
	display: flex;

}

.card_nav{
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100rpx;
	background-color: white;
	position: relative;
	background-color: white;
	margin: 0 30rpx 30rpx 30rpx;
	padding: 0 20rpx;
			border-radius: 10rpx;
}
.card_nav_img{
	width: 40rpx;
	height: 40rpx;
	margin-left: 10rpx;
	margin-right: 20rpx;
}
.card_nav text{
	font-size: 34rpx;
	color: #999999;
	font-weight: 500;
	
}
.nav_right{
	position: absolute;
	right: 30rpx;
	height: 100rpx;
	line-height: 100rpx;
	display: flex;
	color: #999999;
	align-items: center;
}
.nav_right image{
	width: 30rpx;
	height: 30rpx;

	margin-left: 20rpx;
}
.btn1{
	position: fixed;
	bottom: 0;
	width: 750rpx;
	background-color: #007AFF;
	color: white;
	border-radius: 0;
}
</style>
