<template>
	<view class="Container">
		<view class="h_title">考试详情</view>
		<view class="card_detail">
			<view class="card_title">2019年全国计算机等级考试</view>
			<view class="card_date">
				<text style="display: inline-block; color: #b1b1b1;margin: 10rpx 0;">考试时间：</text>
				4月9号-4月25号
			</view>
			<view class="card_types">
				<text style="color: #b1b1b1">考试方式：</text>
				无纸化
			</view>
		</view>
		<view class="h_title" style="margin-top: 20rpx;">报名信息</view>
		<view class="card_detail">
			<view class="info1">
				<view class="info1_text">姓名</view>
				<input type="text" value="" placeholder="请输入姓名" v-model="name" />
			</view>
			<view class="infogroup">
				<view class="info1">
					<view class="info1_text">类别</view>
					<!-- <input type="text" value="" placeholder="请输入类别" v-model="leibie" /> -->
					<picker :value="lbindex" :range="leibie" class="picker1" @change="pChange1">
						<view class="picker_text">{{ leibie[lbindex]||xuanze }}</view>
					</picker>
				</view>
				<view class="info1">
					<view class="info1_text">专业</view>
					<picker :value="zyindex" :range="zhuanye" class="picker1" @change="pChange2">
						<view class="picker_text">{{zhuanye[zyindex]||xuanze }}</view>
					</picker>
				</view>
			</view>
			<view class="info1">
				<view class="info1_text">联系电话</view>
				<input type="number" value="" placeholder="请输入联系电话" v-model="phone" />
			</view>
		</view>
		<view class="tips">温馨提示，请时刻关注考试相关信息，按时参加考试。</view>
		<button class="btn1" @tap="commit">报 名</button>
	</view>
</template>

<script>
import http from '../../common/getList.js';
export default {
	data() {
		return {
			name: '',
			leibie: ['计算机', '平面设计', '汽车修理', '三维设计'],
			zhuanye: ['计算机', '平面设计', '汽车修理', '三维设计'],
			phone: '',
			lbindex: null,
			zyindex: null,
			xuanze:'请选择'
		};
	},
	methods: {
		commit(e) {
			if (this.name == '' || this.leibie == '' || this.zhuanye == '' || this.phone == '') {
				uni.showModal({
					content: '请填写信息完整!',
					title: '温馨提示'
				});
			} else {
				console.log(this);
				let url = '';
				let data = {
					name: this.name,
					leibie: this.leibie[lbindex],
					zhuanye: this.zhuanye[zyindex],
					phone: this.zhuanye
				};
				http.request(url, data).then(
					res => {
						console.log(res);
					},
					error => {}
				);
			}
		},
		pChange1(e) {
			console.log(e);
			this.lbindex = e.detail.value;
		},
		pChange2(e) {
			console.log(e);
			this.zyindex = e.detail.value;
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
	padding: 20rpx;
}
.h_title {
	font-size: 34rpx;
	color: gray;
	margin-bottom: 20rpx;
}
.card_detail {
	display: flex;
	flex-direction: column;
	background-color: white;
	width: 640rpx;
	margin: 0 auto;
	padding: 20rpx;
	border-radius: 10rpx;
}
.card_title {
	font-size: 34rpx;
}
.card_date {
	font-size: 28rpx;
}
.card_types {
	font-size: 28rpx;
}
.info1 {
	font-size: 30rpx;
	margin-bottom: 20rpx;
}

.info1_text {
	color: gray;
}
.info1 input {
	background-color: #e1e1e1;
	height: 70rpx;
	display: flex;
	align-items: center;
	padding-left: 20rpx;
	border-radius: 10rpx;
	margin-top: 20rpx;
}
.infogroup {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.infogroup .info1 {
	margin-right: 20rpx;
}
.tips {
	color: gray;
	font-size: 28rpx;
	padding-left: 20rpx;
	margin-top: 20rpx;
}
.btn1 {
	font-size: 28rpx;
	width: 700rpx;
	margin-top: 100rpx;
	background-color: #007aff;
	color: white;
}
.picker1 {
	width: 260rpx;
	height: 70rpx;
	background-color: #e1e1e1;
	margin-top: 20rpx;
	border-radius: 10rpx;
}
.picker_text {
	width: 260rpx;
	height: 70rpx;
	line-height: 70rpx;
	font-size: 30rpx;
	padding-left: 20rpx;
	color: gray;
}
</style>
