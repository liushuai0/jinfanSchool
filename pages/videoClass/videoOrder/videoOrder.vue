<template>
	<view class="Container">
		<view class="card">
			<image src="../../../static/image/cardimg.jpeg" class="card_img"></image>
			<view class="card_right">
				<view class="card_title">
					计算机职业技能课程
				</view>
				<view class="card_time">
					<image src="../../../static/image/shizhong.png" mode=""></image>
					<text>40分钟</text>
				</view>
				<text class="card_detail">
					本专业是计算机硬件与软件阿萨德考虑过金坷垃十多个快乐就好撒
				</text>
			</view>
		</view>
		<view class="card_nav">
			<image class="card_nav_img" src="../../../static/image/yingyong.png" mode=""></image>
			<text>类 别</text>
			<view class="nav_right">
				技术类
		
			</view>
		</view>
		<view class="card_nav">
			<image class="card_nav_img" src="../../../static/image/yingyong.png" mode=""></image>
			<text>专 业</text>
			<view class="nav_right">
				计算机
				
			</view>
		</view>
		<view class="card_nav">
			<image class="card_nav_img" src="../../../static/image/yingyong.png" mode=""></image>
			<text>课程总价</text>
			<view class="nav_right">
				<text style="color: #FA4440;font-weight: 500;">￥300.00</text>
				
			</view>
		</view>
		<view class="footer">
			<text class="heji">合计：</text>
			<text class="price"><text class="price1">300.00</text>元</text>
			<button class="btn1" @tap="jiesuan">结 算</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jiesuan(){
				console.log("结算");
			}
		}
	}
</script>

<style>
	page{
		background-color: #F5F5F5
	}
	.Container{
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.card{
		display: flex;
		flex-direction: row;
		background-color: #fff;
		margin: 20rpx 30rpx;
		border-radius: 10rpx;
	}
	.card_img{
		width: 250rpx;
		height: 200rpx;
		margin: 20rpx;
				border-radius: 10rpx;
	}
	.card_right{
		display: flex;
		flex-direction: column;
		width: 350rpx;
		margin-left: 20rpx;
	}
	.card_title{
		font-size: 34rpx;
		font-weight: bold;
		margin-top: 10rpx;
	}
	.card_time{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 10rpx;
	}
	.card_time image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
	}
	.card_detail{
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		white-space: normal !important;
		color: #999999;
		margin-top: 15rpx;
		line-height: 38rpx;
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
	.footer{
		position: fixed;
		bottom: 0;
		left: 0rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100rpx;
		width: 750rpx;
		background-color: #fff;
	}
	.heji{
		color: #999999;
		margin-left: 30rpx;
	}
	.price{
		color: #FA4440;
		margin: 0 0 0 20rpx;
	}
	.price1{
		font-size: 36rpx;
		margin-right: 10rpx;
	}
	.btn1{
		position: absolute;
		right: 0;
		bottom: 0;
		width: 350rpx;
		background-color: #007AFF;
		color: white;
		text-align: center;
			height: 100rpx;
			line-height: 100rpx;
		
	}
</style>
