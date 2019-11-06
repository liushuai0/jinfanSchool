<template>
	<view class="Container">
		<view class="header">
			<button type="primary" v-if="!islogin" open-type="getUserInfo" @getuserinfo="onGotUserInfo" class="loginbtn">登 录</button>
			<view class="person" v-if="islogin">
				<image :src="user.avatarUrl?user.avatarUrl:avatalUrl" class="avator" mode=""></image>
				<view class="nickName1">{{ user.nickName?user.nickName:name }}</view>
				<view class="zhuanye">
					计算机专业
				</view>
			</view>
		</view>
		<view class="list">
			<navigator hover-class="none" class="list_li" url="myClass/myClass">
				<image src="../../static/image/ketang.png" class="li_img" mode=""></image>
				<text class="list_text">我的课程</text>
				<image src="../../static/image/zhuandao.png" class="zhaundao" mode=""></image>
			</navigator>
			<navigator hover-class="none" class="list_li" url="myCollection/myCollection">
				<image src="../../static/image/shoucang.png" class="li_img" mode=""></image>
				<text class="list_text">我的收藏</text>
				<image src="../../static/image/zhuandao.png" class="zhaundao" mode=""></image>
			</navigator>
			<navigator hover-class="none" class="list_li" url="myCard/myCard">
				<image src="../../static/image/youhuiquan.png" class="li_img" mode=""></image>
				<text class="list_text">我的卡券</text>
				<image src="../../static/image/zhuandao.png" class="zhaundao" mode=""></image>
			</navigator>
		</view>
	</view>
</template>

<script>
import http from '../../common/getList.js';
export default {
	data() {
		return {
			islogin: false,
			avatalUrl:'',
			name:'',
			user: {}
		};
	},
	onLoad() {
		var that =this
		that.startLogin()
		that.show()
	},
	methods: {
		startLogin() {
			if (uni.getStorageSync('names')) {
				this.name = uni.getStorageSync('names');
				this.avatalUrl = uni.getStorageSync('photo');
				this.islogin = true;
			}
		},
		show() {
		// 	var that = this;
		// 	let id = uni.getStorageSync('openid');
		// 	let url = 'findUserById';
		// 	let data = {
		// 		openid: uni.getStorageSync('openid')
		// 	};
		// 	http.request(url, data).then(
		// 		res => {
		// 			console.log('个人信息');
		// 			console.log(res);
		
		// 			if (res == '' || res == null || res.name == '' || res.name == null) {
		// 				if (uni.getStorageSync('openid')) {
		// 					res.name = uni.getStorageSync('openid');
		// 				}
		// 			} else {
		// 				console.log('登陆成功');
		// 				uni.setStorageSync('names', res.name);
		// 				that.user = res;
		// 				that.name = res.name;
		// 				console.log(that.user);
		// 			}
		// 			let url = 'findEduById';
		// 			let data = {
		// 				openid: uni.getStorageSync('openid')
		// 			};
		// 			http.request(url, data).then(
		// 				res => {
		// 					if (res != null) {
		// 						that.school = res.school;
		// 					}
		// 				},
		// 				error => {
		// 					console.log(error);
		// 				}
		// 			);
		// 		},
		// 		error => {
		// 			console.log(error);
		// 		}
		// 	);
		},
		onGotUserInfo(e) {
			var that = this;
			console.log(e);
			if (e.detail.errMsg == 'getUserInfo:ok') {
				console.log('获取用户信息成功');
				that.islogin = true;
				that.user = e.detail.userInfo;
				that.avatalUrl = e.detail.userInfo.avatarUrl;
				console.log(that.user);
				uni.login({
					success: function(l) {
						let flag = 0;
						console.log(l);
						// for (var i = 0; i < 10; i++) {
						// 	if (flag === 0) {
						let url = 'getUserInfo';
						let data = {
							iv: e.detail.iv,
							encryptedData: e.detail.encryptedData,
							js_code: l.code
						};
						http.request(url, data).then(
							res => {
								console.log(res);
								if (res == null || res == 'null') {
									console.log('getUserInfo  resxxxxxxxxxxxx');
									uni.showLoading({
										title: 'getUserInfo请重试...',
										success: function() {
											uni.clearStorageSync();
											setTimeout(function() {
												uni.hideLoading();
											}, 1000);
										}
									});
								} else {
									// flag = 1;
									uni.setStorageSync('openid', res.openId);
									uni.setStorageSync('photo', res.avatarUrl);
									uni.setStorageSync('sex', res.gender);
									uni.setStorageSync('names', res.nickName);
									//uni.setStorageSync('status', e.currentTarget.dataset.status);  data-status判断登录状态
									uni.setStorageSync('starus', 0);
									// uni.setStorageSync('status', that.status);
									let url = 'findEduById';
									let data = {
										openid: uni.getStorageSync('openid')
									};
									http.request(url, data).then(
										res => {
											console.log(res);
											if (res != null) {
												that.school = res.school;
											}
										},
										error => {
											console.log(error);
										}
									);
								}
							},
							error => {
								console.log(error);
								uni.showLoading({
									title: '请重试...',
									success: function() {
										setTimeout(function() {
											uni.hideLoading();
										}, 500);
									}
								});
							}
						);
						// 		}
						//  	}
					},
					fail(error) {
						console.log(error);
					}
				});
			} else {
				uni.showLoading({
					title: '请稍后再试！'
				});
				setTimeout(function() {
					uni.hideLoading();
				}, 500);
			}
		}
	}
};
</script>

<style>
.loginbtn {
	width: 200rpx;
	height: 80rpx;
	line-height: 80rpx;
	margin-top: 60rpx;
}
.person{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 60rpx;
}
.avator{
	width: 120rpx;
	height: 120rpx;
	border-radius: 100%;
}
.nickName1{
	font-size: 30rpx;
	margin-top: 20rpx;
}
.list {
	display: flex;
	flex-direction: column;
	margin-top: 100rpx;
}
.list_li {
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
	padding-left: 30rpx;
	height: 100rpx;
	border-bottom: 10rpx solid #f5f5f5;
}
.li_img {
	width: 40rpx;
	height: 40rpx;
	margin-right: 40rpx;
	margin-left: 20rpx;
}
.list_text {
	font-size: 30rpx;
}
.zhaundao {
	width: 30rpx;
	height: 30rpx;
	position: absolute;
	right: 50rpx;
}
</style>
