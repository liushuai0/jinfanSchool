<template>
	<view class="Container">
		<view class="header">
			<block v-for="(item, index) in headerNav" :key="index">
				<view class="header_nav" @tap="switchNav" :data-index="index">
					<text :class="navNum === index ? 'nav_on' : ''" class="name_border">{{ item.name }}</text>
				</view>
			</block>
			<image :src="isshowMore ? '../../static/image/top.png' : '../../static/image/down.png'" mode="" @tap="showheaderList"></image>
		</view>
		<view class="header_more" v-if="isshowMore">
			<block v-for="(item, index2) in headerList" :key="index2">
				<view class="header_more_item" @tap="moreChoose" :data-id="index2" :class="moreNum === index2 ? 'more_on' : ''">{{ item.name }}</view>
			</block>
		</view>
		<view class="content">
			<view class="card" v-for="(item, index) in classList" :key="index">
				<image src="../../static/image/swiper1.jpg" mode="widthFix" class="card_img"></image>
				<view class="card_title">{{ item.title }}</view>
				<view class="card_time">
					<image src="../../static/image/shizhong.png" class="shizhong" mode=""></image>
					<text>{{ item.time }}</text>
				</view>
				<small class="card_detail">{{ item.detail }}</small>
				<view class="card_footer">
					￥
					<text>{{ item.price }}</text>
					<button class="card_btn" :data-index="index" @tap="toClassDetail">立即购买</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			headerNav: [{ name: '计算机' }, { name: '驾驶员' }, { name: '汽车修理' }, { name: '计算机' }],
			headerList: [
				{ name: '计算机' },
				{ name: '驾驶员' },
				{ name: '汽车修理' },
				{ name: '计算机' },
				{ name: '计算机' },
				{ name: '驾驶员' },
				{ name: '汽车修理' },
				{ name: '计算机' }
			],
			classList: [
				{
					title: '计算机职业技能',
					id: '001',
					time: '40分钟',
					detail: '本专业是计算机客场详情课程详情本专业是计算机客场详情课程详情',
					price: '300.00'
				},
				{
					title: '计算机职业技能',
					id: '002',
					time: '40分钟',
					detail: '本专业是计算机客场详情课程详情本专业是计算机客场详情课程详情',
					price: '2100.00'
				}
			],
			isshowMore: false,
			navNum: 0,
			moreNum: 0
		};
	},
	onLoad() {},
	methods: {
		showheaderList(e) {
			var that = this;
			that.isshowMore = !that.isshowMore;
		},
		switchNav(e) {
			console.log(this.headerNav[e.currentTarget.dataset.index].name);
			let index = e.currentTarget.dataset.index;
			this.navNum = index;
			this.moreNum = index;
		},
		moreChoose(e) {
			let id = e.currentTarget.dataset.id;
			this.moreNum = id;
			this.navNum = id;
			this.isshowMore = false;
		},
		goBuy(e) {
			console.log('立即购买');
			uni.navigateTo({
				url: 'videoDetail/videoDetail'
			});
		},
		toClassDetail(e) {
			let index = e.currentTarget.dataset.index;
			uni.navigateTo({
				url: 'videoDetail/videoDetail?id=' + this.classList[index].id
			});
		}
	}
};
</script>

<style>
page {
	background-color: #f5f5f5;
}
.nav_on {
	color: #007aff !important;
	border-bottom: 5rpx solid #007aff !important;
}
.more_on {
	background-color: #007aff !important;
	color: white !important;
}
.Container {
	display: flex;
	flex-direction: column;
	padding: 0 20rpx;
	padding-top: 90rpx;
}
.header {
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	overflow: hidden;
	width: 750rpx;
	height: 80rpx;
	background-color: #fff;
	margin-left: -20rpx;
	margin-right: -20rpx;
	position: fixed;
	left: 20rpx;
	top: 0;
}
.header_nav {
	width: 23%;
	text-align: center;
	font-size: 30rpx;
}

.header image {
	width: 40rpx;
	height: 40rpx;
}
.header_more {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20rpx;
	position: absolute;
	background-color: #fff;
}
.header_more_item {
	background-color: #f6f6f4;
	padding: 4rpx 30rpx;
	margin-bottom: 30rpx;
	color: gray;
	font-size: 28rpx;
	border-radius: 20rpx;
}

.card {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	width: 670rpx;
	margin: 0 auto;
	margin-bottom: 30rpx;
}
.card_img {
	width: 670rpx;
	border-radius: 10rpx;
	margin: 0 auto;
}

.card_title {
	font-size: 34rpx;
	font-weight: bold;
	padding-left: 30rpx;
	margin-top: 10rpx;
}
.shizhong {
	width: 28rpx;
	height: 28rpx;
	padding-left: 30rpx;
	margin-right: 20rpx;
}
.card_time text {
	font-size: 30rpx;
}
.card_detail {
	color: gray;
	padding-left: 30rpx;
	padding-right: 30rpx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.card_footer {
	display: flex;
	border-top: 4rpx solid #e1e1e1;
	padding-left: 30rpx;
	margin-top: 10rpx;
	height: 100rpx;
	align-items: center;
	color: #fa4440;
	position: relative;
}
.card_footer text {
	font-size: 40rpx;
	font-weight: 600;
	margin-left: 10rpx;
}
.card_btn {
	width: 180rpx;
	height: 65rpx;
	line-height: 65rpx;
	color: white;
	background-color: #fa4440;
	font-size: 28rpx;
	border-radius: 20rpx;
	position: absolute;
	right: 40rpx;
}
</style>
