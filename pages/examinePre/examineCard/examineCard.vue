<template>
	<view class="Container">
		<view class="card">
			<image src="../../../static/image/cardimg.jpeg" class="card_img"></image>
			<view class="card_right">
				<view class="card_title">
					考试专用点卡	
				</view>
				<view class="card_time">

					<text>适用于任何科目试题</text>
				</view>
				<text class="card_detail">
					购买点卡后在考试界面输入此卡号码即可参与考试。
				</text>
			</view>
		</view>
		<view class="card_nav">
			
			<text>点卡总价</text>
			<view class="nav_right">
				￥300.00
			</view>
		</view>

		<view class="footer">
			<text class="heji">合计：</text>
			<text class="price"><text class="price1">300.00</text>元</text>
			<button class="btn1" @tap="payMoney">结 算</button>
		</view>
	</view>
</template>

<script>
	import http from "../../../common/getList.js"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			payMoney(e){
				let url="demo"
				let data={
					name:12,
					password:321651
				}
				http.request(url,data).then(
					res=>{
						console.log(res);
					},
					error=>{
						
					}
				)
				// uni.redirectTo({
				// 	url:"../examinePre?hascard="+"true"
				// })
			}
		}
	}
</script>

<style>
	page{
		background-color: #F5F5F5;
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
		color: #FA4440;
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
