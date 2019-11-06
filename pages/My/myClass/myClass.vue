<template>
	<view class="Container">
		<view class="card" v-for="(item, index) in videoList" :key="index" :data-index="index" @tap="toVideodetail">
			<image :src="item.img" class="card_img"></image>
			<view class="card_right">
				<view class="card_title">{{ item.title }}</view>
				<view class="card_time">
					<image src="../../../static/image/shizhong.png" mode=""></image>
					<text>{{ item.time }}</text>
				</view>
				<text class="card_detail">{{ item.detail }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			videoList: [
				{
					img: '../../../static/image/cardimg.jpeg',
					title: '计算机职业技能课程',
					time: '40分钟',
					id: 0,
					detail: '本专业是计算机硬件与软件阿萨德考虑过金坷垃十多个快乐就好撒。'
				},
				{
					img: '../../../static/image/cardimg.jpeg',
					title: '计算机平面设计课程',
					time: '1小时40分钟',
					id: 1,
					detail: '本专业是计算机硬件与软件相结合。'
				}
			]
		};
	},
	methods: {
		toVideodetail(e) {
			let index = e.currentTarget.dataset.index;
			uni.navigateTo({
				url: '../../videoClass/videoDetail/videoDetail?id=' + this.videoList[index].id
			});
		}
	}
};
</script>

<style>
page {
	background-color: #f5f5f5;
}
.Container {
	display: flex;
	flex-direction: column;
}
.card {
	display: flex;
	flex-direction: row;
	background-color: #fff;
	margin: 20rpx 30rpx;
	border-radius: 10rpx;
}
.card_img {
	width: 250rpx;
	height: 200rpx;
	margin: 20rpx;
	border-radius: 10rpx;
}
.card_right {
	display: flex;
	flex-direction: column;
	width: 350rpx;
	margin-left: 20rpx;
}
.card_title {
	font-size: 34rpx;
	font-weight: bold;
	margin-top: 10rpx;
}
.card_time {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 10rpx;
}
.card_time image {
	width: 30rpx;
	height: 30rpx;
	margin-right: 20rpx;
}
.card_detail {
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
</style>
