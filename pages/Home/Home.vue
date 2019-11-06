<template>
	<view class="Container">
		<view class="header">
			<swiper class="swiper1" :indicator-dots="true" indicator-color="#007AFF" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item"><image src="../../static/image/swiper1.jpg" class="s_img"></image></view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"><image src="../../static/image/swiper.png" class="s_img"></image></view>
				</swiper-item>
			</swiper>
		</view>
		<view class="middleNav">
			<navigator hover-class="none" class="m_nav" url="../videoClass/videoClass">
				<image src="../../static/image/t5.png" class="m_img" mode=""></image>
				<text class="m_text">视频课程</text>
			</navigator>
			<navigator hover-class="none" class="m_nav" url="../examinePre/examinePre">
				<image src="../../static/image/t6.png" class="m_img" mode=""></image>
				<text class="m_text">模拟考试</text>
			</navigator>
			<navigator hover-class="none" class="m_nav" url="../examSignup/examSignup">
				<image src="../../static/image/t7.png" class="m_img" mode=""></image>
				<text class="m_text">考试报名</text>
			</navigator>
			<navigator hover-class="none" class="m_nav" url="../newsList/newsList">
				<image src="../../static/image/t9.png" class="m_img" mode=""></image>
				<text class="m_text">新闻资讯</text>
			</navigator>
		</view>
		<view class="gonggao">
			<text style="font-weight: bold;font-style: italic;">
				最<text style="color: #FA4440;margin: 0 10rpx;">新</text>公 告
			</text>
			<text style="margin-left:20rpx;">|</text>
			<!-- <text></text> -->
			<uni-notice-bar scrollable="true" single="true" text="金帆技校小程序上线啦！金帆技校小程序上线啦！"></uni-notice-bar>
		</view>
		<navigator class="guanggao" url="../examinePre/examineCard/examineCard">
			<image src="../../static/image/swiper1.jpg" class="gg_img"  mode="widthFix"></image>
		</navigator>
		<view class="newData">
			<view class="n_color"></view>
			<text class="n_title">
				最新消息
			</text>
			<navigator hover-class="none" class="n_rtext" url="../newsList/newsList">
				<text>更多</text> 
				<image src="../../static/image/zhuandao.png" mode=""></image>
			</navigator>
		</view>
		<view class="qian" @tap="toQianDao">
			签
		</view>

		<view class="card" v-for="(item,index) in newsList" :key="index" :data-index="index" @tap="tonewsDetail">
			<view class="card_left">
				<view class="card_title">
					{{item.title}}
				</view>
				<view class="card-footer">
					<text class="card_name">{{item.name}}</text>
					<text style="margin-left: 60rpx;">{{item.date}}</text>
					<text style="margin-left: 20rpx;">{{item.time}}</text>
				</view>
			</view>
			<view class="card_right">
				<image src="../../static/image/cardimg.jpeg" class="card_img" mode=""></image>
			</view>
		</view>
<!-- 		<view class="card">
			<view class="card_left">
				<view class="card_title">
					启动青年企业家爱上对方阿萨德阿瑟的
				</view>
				<view class="card-footer">
					<text class="card_name">中国吉林网</text>
					<text style="margin-left: 60rpx;">03-23</text>
					<text style="margin-left: 20rpx;">14：20</text>
				</view>
			</view>
			<view class="card_right">
				<image src="../../static/image/cardimg.jpeg" class="card_img" mode=""></image>
			</view>
		</view> -->
	</view>
</template>

<script>
	import {uniNoticeBar} from "../../components/uni-ui/uni-notice-bar/uni-notice-bar.vue"
export default {
	data() {
		return {
			newsList: [{
				img: '../../../static/image/cardimg.jpeg',
				title: '现场看老板V型走流程看吧是大佛老哥',
				name: '中国吉林网',
				date: '03-23',
				time: '14：20',
				id:5258169,
				content:' 圣诞快乐分管科室电话分公325司领导放大后即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
			},{
				img: '../../../static/image/cardimg.jpeg',
				title: '启动青年企业家爱上对方阿萨德阿瑟的',
				name: '中国吉林网',
				date: '03-23',
				time: '14：20',
				id:5258179,
				content:' 圣诞快乐分管科室电话分公325司领导放大后即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
			}
			],
		};
	},
	onLoad() {},
	methods: {
		toQianDao(e){
			console.log(e);
			uni.navigateTo({
				url:"qianDao/qianDao"
			})
		},
		tonewsDetail(e){
			let index=e.currentTarget.dataset.index
			uni.navigateTo({
				url:"../newsList/newsDetail/newsDetail?id="+this.newsList[index].id
			})
		}
	},
	components: {uniNoticeBar}
};
</script>

<style>
.Container {
	display: flex;
	flex-direction: column;
	padding: 20rpx;
	position: relative;
}
.header {
	display: flex;
	align-items: center;
}
.swiper1 {
	width: 710rpx;
	height: 340rpx;
	margin-top: 20rpx;
}

.swiper-item {
	width: 710rpx;
	height: 340rpx;
}
.swiper-item image {
	width: 710rpx;
	height: 340rpx;
	border-radius: 10rpx;
}
.middleNav {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.m_nav {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 40rpx 0;
	outline: none;
}
.m_img {
	width: 80rpx;
	height: 80rpx;
	margin-bottom: 10rpx;
}
.m_text {
	font-size: 28rpx;
}
.gonggao {
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 28rpx;
	border: 1rpx solid #e1e1e1;
	padding: 10rpx;
	border-radius: 10rpx;
	height: 50rpx;
}
.guanggao{
	display: flex;
	width: 710rpx;
	margin-top: 50rpx;
}
.gg_img{
	width: 650rpx; 
	margin: 0 auto;
	border-radius: 20rpx;
}
.newData{
	display: flex;
	flex-direction: row;
	margin-top: 20rpx;
	height: 80rpx;
	align-items: center;
	position: relative;
	font-size: 32rpx;
	margin-bottom: 20rpx;

}
.n_color{
	width: 10rpx;
	height: 34rpx;
	background-color: #007AFF;
	margin-right: 10rpx;
}
.n_title{

	font-weight: bold;
	white-space: nowrap;
	width: 150rpx;
}
.n_rtext{
	position: absolute;
	right: 20rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	
}
.n_rtext image{
	width: 30rpx;
	height: 30rpx;
	margin-left: 15rpx;
}
.qian{
	position: fixed;
	right: 45rpx;
	bottom: 160rpx;
	background-color: #ffc74a;
	color: #fff;
	width: 120rpx;
	height: 120rpx;
	text-align: center;
	line-height: 120rpx;
	font-size: 54rpx;
	border-radius: 100%;
	z-index: 999;
	
}
.card{
	display: flex;
	flex-direction: row;
	padding: 30rpx;
	position: relative;
	border-top: 18rpx solid #E1E1E1;
	margin-left: -20rpx;
	margin-right: -20rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.card_left{
	display: flex;
	flex-direction: column;
}
.card_title{
	font-size: 32rpx;
	font-weight: 540;
}
.card_right{
	
}
.card_img{
	width: 260rpx;
	height: 180rpx;
	border-radius: 14rpx;
	margin-left: 30rpx;
}
.card-footer{
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 26rpx;
	color: gray;
	position: absolute;
	bottom: 20rpx;
}

.card_name{
	font-size: 30rpx;
}
</style>
