<template>
	<view class="Container">
		<view class="list">
			<view class="list_title">
				<view class="yanse"></view>
				<text class="choosetext">选择你所处的专业</text>
			</view>
			<view class="list_cont">
				<block v-for="(item, index) in zhuanye" :key="index">
					<text class="list_item" :class="zynum === index ? 'on' : ''" :data-index="index" @tap="choose1">{{ item.name }}</text>
				</block>
			</view>
		</view>
		<view class="list">
			<view class="list_title">
				<view class="yanse"></view>
				<text class="choosetext">选择你的专业类别</text>
			</view>
			<view class="list_cont">
				<block v-for="(item, index) in zytypes" :key="index">
					<text class="list_item" :class="lbnum === index ? 'on' : ''" :data-index="index" @tap="choose2">{{ item.name }}</text>
				</block>
			</view>
		</view>
		<view class="card_input"><input type="text" v-model="cardCode" value="" placeholder="请输入点卡码" /></view>
		<view class="content_nav">
			<navigator hover-class="none" url="../examError/examError" class="c_nav">我 的 错 题</navigator>
			<navigator hover-class="none" url="../examExport/examExport" class="c_nav">答 题 报 告</navigator>
			<navigator hover-class="none" url="../examError/examErrCollection/examErrCollection" class="c_nav">错 题 收 藏</navigator>
		</view>
		<button class="f_btn" @tap="toExamine">确 认</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			zhuanye: [
				{ name: '计算机' },
				{ name: '驾驶员' },
				{ name: '汽车修理' },
				{ name: '煤工' },
				{ name: '平面设计' },
				{ name: '三维设计' },
				{ name: '网站建设' },
				{ name: '电子商务' }
			],
			zytypes: [
				{ name: '技术类' },
				{ name: '互联网' },
				{ name: '汽车修理' },
				{ name: '计算机' },
				{ name: '平面设计' },
				{ name: '三维设计' },
				{ name: '网站建设' },
				{ name: '电子商务' }
			],
			cardCode: '',
			zynum: 0,
			lbnum: 0,
			dianka: 0
		};
	},
	onLoad(options) {
		console.log(options);
		if (options.hascard === 'true') {
			this.dianka = 1;
		}
	},
	methods: {
		toExamine(e) {
			if (this.dianka < 1) {
				uni.showModal({
					title: '温馨提示',
					content: '您还没有购买该试卷点卡！',
					confirmText: '去购买',
					success(r) {
						if (r.confirm) {
							uni.navigateTo({
								url: 'examineCard/examineCard'
							});
						}
					}
				});
			} else {
				if (this.cardCode === '' || this.cardCode == null) {
					uni.showModal({
						title: '温馨提示',
						content: '请输入点卡码在进行考试！'
					});
				} else {
					uni.showModal({
						title: '温馨提示',
						content: '是否确认开始考试？',
						success(r) {
							if (r.confirm) {
								uni.navigateTo({
									url: '../examine/examine'
								});
							}
						}
					});
				}
			}
		},
		choose1(e) {
			console.log(this.zhuanye[e.currentTarget.dataset.index].name);
			this.zynum = e.currentTarget.dataset.index;
		},
		choose2(e) {
			console.log(this.zytypes[e.currentTarget.dataset.index].name);
			this.lbnum = e.currentTarget.dataset.index;
		}
	}
};
</script>

<style>
.on {
	background-color: #007aff !important;
	color: white !important;
}
.Container {
	display: flex;
	flex-direction: column;
	padding: 20rpx;
	position: relative;
}
.list {
	display: flex;
	flex-direction: column;
	margin-top: 20rpx;
}
.list_title {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.yanse {
	width: 10rpx;
	height: 34rpx;
	background-color: #007aff;
	margin-right: 10rpx;
}
.choosetext {
	font-size: 28rpx;
	margin-left: 20rpx;
}
.list_cont {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 30rpx;
	justify-content: center;
}
.list_item {
	display: flex;
	flex-direction: row;
	width: 110rpx;
	justify-content: center;
	margin-right: 20rpx;
	white-space: nowrap;
	font-size: 26rpx;
	padding: 10rpx 20rpx;
	border: 1rpx solid #e1e1e1;
	border-radius: 10rpx;
	color: gray;
	margin-bottom: 20rpx;
}
.card_input input {
	width: 300rpx;
	height: 70rpx;
	position: absolute;
	right: 50rpx;
	border: 1rpx solid #007aff;
	padding-left: 30rpx;
	border-radius: 10rpx;
	margin-top: 30rpx;
}
.content_nav {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 200rpx;
}
.c_nav {
	width: 300rpx;
	height: 70rpx;
	line-height: 70rpx;
	background-color: #007aff;
	color: white;
	font-size: 30rpx;
	text-align: center;
	margin: 0 auto;
	border-radius: 30rpx;
	margin-bottom: 20rpx;
}
.f_btn {
	width: 600rpx;
	margin: 0 auto;
	font-size: 30rpx;
	margin-top: 30rpx;
	background-color: #007AFF;
	color: white;
}
</style>
