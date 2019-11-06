<template>
	<view class="Container">
			<view class="h_score">{{score}}</view>
			<view class="h_num">
				共{{num}}题
			</view>
			<view class="content_nav">
				<view class="c_nav" @tap="toError">
					查 看 错 题
				</view>
				<view class="c_nav" @tap="toAgain">
					再 来 一 次
				</view>
				<view class="c_nav" @tap="toPre">
					选 择 其 它 考 试
				</view>
				<view class="c_nav" @tap="toHome">
					返 回 首 页
				</view>
				
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				score:0,
				num:0,
				
			}
		},
		onLoad(options) {
			console.log(options);
			if(options.score&&options.num){
				this.score=options.score
				this.num=options.num
				
			}
		},
		methods: {
			toHome(e){
				uni.reLaunch({
					url:"../Home/Home"
				})
			},
			toPre(){
				uni.reLaunch({
					url:"../examinePre/examinePre"
				})
			},
			toAgain(){
				uni.reLaunch({
					url:"../examine/examine"
				})
			},
			toError(){
				uni.redirectTo({
					url:"../examError/examError"
				})
			}
		}
	}
</script>

<style>
.Container{
	display: flex;
	flex-direction: column;
}
.h_score{
	width: 200rpx;
	height: 200rpx;
	line-height: 200rpx;
	text-align: center;
	border-radius: 100%;
	background-color: #007AFF;
	color: white;
	font-size: 76rpx;
	margin: 0 auto;
	margin-top: 80rpx;
}
.h_num{
	font-size: 28rpx;
	color: gray;
	text-align: center;
	margin-top: 20rpx;
}
.content_nav{
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 200rpx;

}
.c_nav{
	width: 300rpx;
	height: 70rpx;
	line-height: 70rpx;
	background-color: #007AFF;
	color: white;
	font-size: 30rpx;
	text-align: center;
	margin: 0 auto;
	border-radius: 30rpx;
	margin-bottom: 20rpx;
}
</style>
