<template>
	<view class="content">
		<view class="page-body">
			<view class="sign-title">
				<view class="sign-title-l">
					<view class="portrait">{{ name.substr(-2) }}</view>
					<view class="text">
						<view class="name">{{ name }}</view>
						<view class="gz" @click="goRule">
							<text class="t1">考勤组:公司考勤</text>
							<text>查看规则</text>
						</view>
					</view>
				</view>
				<view class="sign-title-r">
					<navigator hover-class="none" url="ImportCalendar" class="date">
						<view class="uni-input">
							{{ date }}
							<uni-icon type="arrowdown"></uni-icon>
						</view>
					</navigator>
				</view>
			</view>
			<text @click="reset">重置</text>
			<view style="text-align: center;padding: 20upx 0;">
				当前位置:
				<text @click="openLocation">{{ address }}</text>
			</view>
			<view class="uni-timeline">
				<view class="uni-timeline-item uni-timeline-first-item">
					<view class="uni-timeline-item-divider" :style="{ background: !isAm ? '#1AAD19' : '#bbb' }"></view>
					<view class="uni-timeline-item-content">
						<view>
							<view class="uni-timeline-item-content-t1">上班时间{{ Timer[0].time }}</view>
							<view class="desc-pad" v-if="isAm">
								<view class="time uni-timeline-item-content-t">
									打卡时间 {{ amSign.time.substring(10, 16) }}
									<view class="iswq" v-if="amSign.mode == '外勤打卡'">外勤打卡</view>
								</view>
								<view>
									<uni-icon type="location-filled" />
									{{ amSign.address }}
								</view>
								<view class="bz last" @click="showBz('amSign')">
									备注
									<uni-icon :style="{ color: 'rgb(0, 122, 255)' }" type="forward"></uni-icon>
								</view>
							</view>
							<view v-else class="content-show">
								<view v-if="is === true">
									<view class="module CBlue" @click="clickSign">
										<view class="text">上班打卡</view>
										<view class="time">{{ time }}</view>
									</view>
									<view class="colorGreen" style="text-align: center;" v-if="is">
										已在考勤范围内
										<text class="relocation" @click="relocation">重新定位</text>
									</view>
								</view>
								<view v-else-if="is === false">
									<view class="module CGreen" @click="clickSign">
										<view class="text">外勤打卡</view>
										<view class="time">{{ time }}</view>
									</view>
									<view class="colorRed" style="text-align: center;" v-if="!is">
										不再考勤范围内
										<text class="relocation" @click="relocation">重新定位</text>
									</view>
								</view>
								<view v-else-if="is === null">
									<view class="module CAsh">
										<view class="text">请检查位置信息</view>
										<view class="time">{{ time }}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="uni-timeline-item uni-timeline-last-item">
					<view class="uni-timeline-item-divider" :style="{ background: isAm ? '#1AAD19' : '#bbb' }"></view>
					<view class="uni-timeline-item-content">
						<view>
							<view class="uni-timeline-item-content-t1">下班时间{{ Timer[1].time }}</view>
							<!-- 上班没打卡则不显示  打卡显示之下内容 -->
							<view v-if="isAm" class="desc-pad">
								<!----------------------- 下班打卡之后显示状态信息 ------------------------>
								<view class="desc-pad" v-if="isPm">
									<view class="time uni-timeline-item-content-t">
										打卡时间:{{ pmSign.time.substring(10, 16) }}
										<view class="iswq" v-if="pmSign.mode == '外勤打卡'">外勤打卡</view>
									</view>
									<view>
										<uni-icon type="location-filled" />
										{{ pmSign.address }}
									</view>
									<view class="bz last" @click="showBz('pmSign')">
										备注
										<uni-icon :style="{ color: 'rgb(0, 122, 255)' }" type="forward" />
									</view>
									<image :src="imageSrc" class="photoImg" mode="aspectFit"></image>
								</view>
								<!-------------------下班打卡没打卡之前显示以下内容------------------------>
								<view v-else class="content-show">
									<!-- 下班正常打卡 -->
									<view v-if="is === true">
										<navigator class="module CBlue" url="./scan-frame/scan-frame">
											<view class="text">点击拍照</view>
											<view class="time">{{ time }}</view>
										</navigator>
										<view class="colorGreen" style="text-align: center;" v-if="is">
											已在考勤范围内
											<text class="relocation" @click="relocation">重新定位</text>
										</view>
									</view>
									<!-- 下班外勤打卡 -->
									<view v-else-if="is === false">
										<view class="module CGreen" @click="clickSign">
											<view class="text">外勤打卡</view>
											<view class="time">{{ time }}</view>
										</view>
										<view class="colorRed" style="text-align: center;" v-if="!is">
											不再考勤范围内
											<text class="relocation" @click="relocation">重新定位</text>
										</view>
									</view>
									<!-- 下班位置不对打卡 -->
									<view v-else-if="is === null">
										<view class="module CGreen">
											<view class="text">请检查位置信息</view>
											<view class="time">{{ time }}</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="false">
				<uni-collapse>
					<uni-collapse-item title="全部打卡信息">
						<uni-list>
							<view class="uni-list-cell-left">
								<view v-for="(item, index) in allSign" :key="index" style="border-bottom: 1px dashed #007AFF;">
									<view>{{ item.mode }}</view>
									<view>{{ item.address }}</view>
									<view>{{ item.time }}</view>
								</view>
							</view>
						</uni-list>
					</uni-collapse-item>
				</uni-collapse>
			</view>
		</view>
		<!-- 备注 -->
		<uni-popup :show="type === 'middle-list'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<view class="title" style="padding: 20upx 0;font-weight: bold;width: 100%;text-align: center;border-bottom: 1px solid #666;">打卡备注</view>
			<view class="content" style="padding: 20upx 10upx;width: 100%;">
				<text class="text">打卡时间:</text>
				<text>{{ bzText.time }}</text>
				<view class="text">打卡地点:</view>
				<view>{{ bzText.address }}</view>
			</view>
			<view class="content" style="padding: 20upx 10upx;width: 100%;">
				<view>{{ bzText.remarks }}</view>
			</view>
			<view class="bottom" style="padding: 20upx 10upx;color: cadetblue;width: 100%;text-align: center;border-top: 1px solid #666;" @click="togglePopup('')">关闭</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import { formateDate, pointInsideCircle, isSameDay } from '@/common/util.js';
import { handleSignClick, setSignInfo, addSignInfo, getSignInfo, delSignInfo, getInfo, key } from './index.js';
export default {
	components: { uniIcon, uniPopup },
	data() {
		return {
			imageSrc: '', //上一个界面拍照之后传递来的imgsrc
			name: '我的名字',
			bzText: { time: '', address: '', img: '', remarks: '' },
			type: '',

			r: 1080, //半径
			Timer: [{ time: '09:00' }, { time: '18:00' }], //上下班时间
			isAm: false, //上班是否打卡
			isPm: false, //下班是否打卡
			amSign: { time: '', address: '', remarks: '', img: '' }, //上午打卡信息
			pmSign: { time: '', address: '', remarks: '', img: '' }, //下午打卡信息
			clickNum: 0, //点击重新获取位置信息次数
			is: null, //是否正常打卡（外勤打卡）
			isSign: false, //是否打卡
			time: formateDate(new Date(), 'h:min:s'), //当前时分秒
			date: formateDate(new Date(), 'Y-M-D'),
			latitude: '', //当前经度
			longitude: '', //当前维度
			address: '我的位置', //
			wqInfo: null,
			allSign: [], //所有打卡信息
			signInfo: { mode: '', latitude: '', longitude: '', address: '', time: '', remarks: '' }, //打卡信息 （模式，经纬度，地址，时间）
			covers: [
				// 公司点信息
				{
					id: 0,
					callout: { content: '阿甘科技有限公司', color: 'red', display: 'ALWAYS' },
					latitude: 43.83828,
					longitude: 125.292083,
					iconPath: '../../../static/img/location.png'
				}
			],
			circles: [
				// 公司圆信息(latitude:39.9085,longitude:116.39747 );
				// { latitude: 43.83828, longitude: 125.292083, radius: 80, strokeWidth: 1, fillColor: '#7fff0099' }    没修改之前-------radius管圈的范围和r应该保持一致
				{ latitude: 43.83828, longitude: 125.292083, radius: 1080, strokeWidth: 1, fillColor: '#7fff0099' }
			]
		};
	},
	// 初始化
	onLoad(options) {
		if (options.imageSrc) {
			this.imageSrc = options.imageSrc;
			this.isPm = true;
			this.is = false;
			this.clickSign();
		}
		var sign = getSignInfo();
		if (sign != undefined) {
			var signA = sign.main.reverse();
			this.allSign = signA;
			if (signA.length == 1) {
				if (isSameDay(signA[0].nowT)) {
					this.isSign = true;
					this.isAm = true;
					this.allSign = signA;
					this.amSign = signA[0];
				}
			} else {
				// 理想状态 认为这是 上一天 的 下班信息
				if (signA[0]) {
					if (isSameDay(signA[0].nowT)) {
						this.isSign = true;
						this.isPm = true;
						this.allSign = signA;
						this.pmSign = signA[0];
					}
				}
				// 理想状态 认为这是 上一天 的 上班信息
				if (signA[1]) {
					if (isSameDay(signA[1].nowT)) {
						this.isSign = true;
						this.isAm = true;
						this.allSign = signA;
						this.amSign = signA[1];
					}
				}
			}
		}
		this.getLocation();
		this.getTime();
	},

	methods: {
		togglePopup(type) {
			this.type = type;
		},
		// 产看规则
		goRule() {
			uni.navigateTo({ url: './rule/rule' });
		},
		// 腾讯位置服务
		getAdd() {
			if (this.isAm && this.isPm) {
				return;
			}
			if (this.is === true) {
				let address = this.covers[0].callout.content;
				this.address = address;
				this.signInfo.address = address;
				return;
			}
			var that = this;
			var url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${that.latitude},${that.longitude}&key=${key}`;
			uni.request({
				url,
				success(res) {
					var data = res.data;
					if (data.status != 0) {
						uni.showToast({ title: data.message, icon: 'none' });
						return;
					}
					if (that.is === null) {
						that.address = '请检查位置信息！';
					}
					if (that.is === false) {
						let address = res.data.result.address + res.data.result.formatted_addresses.recommend;
						that.address = address;
						that.signInfo.address = address;
					}
				}
			});
		},
		// 初始化数据  （公司的经纬度 公司名称 打卡范围 ）
		getData() {
			var that = this;
			var url = ``;
			uni.request({
				url,
				success(res) {
					let data = res.data;
					that.covers[0].callout.content = data.name;
					that.covers[0].latitude = that.circles[0].latitude = data.latitude;
					that.covers[0].longitude = that.circles[0].longitude = data.longitude;
					that.r = that.circles.radius = data.r;
				}
			});
		},
		// 重新定位
		relocation() {
			uni.navigateTo({ url: './sign/sign' });
		},
		// 选择打卡日期
		bindDateChange: function(e) {
			this.date = e.target.value;
		},
		// 重置打卡
		reset() {
			var that = this;
			uni.showModal({
				title: '重置本地打卡信息',
				content: '您确定要重置打卡信息吗？点击确定本地打卡信息会被清除！',
				success: function(res) {
					if (res.confirm) {
						delSignInfo();
						that.isSign = false;
						that.isAm = false;
						that.isPm = false;
						that.allSign = [];
					} else if (res.cancel) {
						return;
					}
				}
			});
		},
		// 显示备注
		showBz(type) {
			this.type = 'middle-list';
			if (type == 'amSign') {
				this.bzText.time = this.amSign.time;
				this.bzText.address = this.amSign.address;
				this.bzText.remarks = this.amSign.remarks;
			} else if (type == 'pmSign') {
				this.bzText.time = this.pmSign.time;
				this.bzText.address = this.pmSign.address;
				this.bzText.remarks = this.pmSign.remarks;
			}
		},
		// 实时时间
		getTime() {
			var that = this;
			setInterval(function() {
				that.time = formateDate(new Date(), 'h:min:s');
			}, 1000);
		},
		// 获取当前位置
		getLocation() {
			var that = this;
			if (this.clickNum !== 0) {
				uni.showLoading({ title: '获取中...', mask: true });
			}
			if (this.clickNum >= 3) {
				uni.showToast({ title: '请稍后尝试！', icon: 'none', mask: true });
				return;
			}
			this.clickNum++;
			uni.getLocation({
				type: 'gcj02', //返回可以用于uni.openLocation的经纬度
				success(res) {
					console.log(res);
					uni.hideLoading();
					that.latitude = res.latitude;
					that.longitude = res.longitude;
					// console.log(res.latitude,"---",res.longitude)
					that.covers[1] = { id: 1, latitude: res.latitude, longitude: res.longitude, iconPath: '../../static/location.png' };
					var s = pointInsideCircle([that.latitude, that.longitude], [that.circles[0].latitude, that.circles[0].longitude], that.r / 100000);
					that.is = s;

					that.signInfo.latitude = res.latitude;
					that.signInfo.longitude = res.longitude;
					that.signInfo.mode = s ? '正常打卡' : '外勤打卡';

					that.getAdd();
				},
				fail(err) {
					uni.hideLoading();
					that.address = '请检查位置信息！';
					uni.showToast({ title: '请检查位置信息状态！', icon: 'none', mask: true, duration: 3000 });
					uni.authorize({
						scope: 'scope.userLocation',
						success(res) {
							that.getLocation();
						},
						fail() {
							//1.2 拒绝授权
							console.log('你拒绝了授权，无法获得周边信息');
						}
					});
				}
			});
		},
		// 点击打卡
		clickSign() {
			var that = this;
			var isTrue = this.is;
			if (isTrue === null) {
				uni.showToast({ title: '请检查位置信息状态！', icon: 'none', mask: true, duration: 3000 });

				return;
			}

			uni.showLoading({ title: '打卡记录中...', mask: true });
			this.signInfo.time = formateDate(new Date(), 'Y-M-D h:min:s');
			var a = getSignInfo();
			if (a != undefined) {
				addSignInfo(getInfo(this.signInfo), a);
			} else {
				setSignInfo(getInfo(this.signInfo));
			}
			setTimeout(function() {
				uni.hideLoading();
				var sign = getSignInfo().main;
				that.allSign = sign.reverse();
				that.isSign = true;
				if (that.isAm === false) {
					that.isAm = true;
					that.amSign = that.allSign[0];
				} else {
					that.isPm = true;
					that.pmSign = that.allSign[1];
				}
				uni.showToast({ title: '打卡成功！' });
			}, 2000);
		},
		//下班拍照打卡
		paizhao() {
			uni.createCameraContext();
		},
		// 选择地址
		openLocation() {
			var that = this;
			uni.chooseLocation({
				success: function(res) {
					that.address = res.address;
					that.signInfo.address = res.address;
					// 这里是有问题的 .返回的 res 中有经纬度，地址名  如果使用这个经纬度 就会存在问题，（当前位置和公司位置重合），所以不建议使用这个经纬度。
					var s = pointInsideCircle([that.latitude, that.longitude], [that.circles[0].latitude, that.circles[0].longitude], that.r / 10000);
					that.is = s;
				}
			});
		}
	}
};
</script>

<style>
.photoImg {
	height: 400rpx;
	margin: 0 auto;
}
.map {
	width: 100%;
	height: 260px;
}
.uni-list-cell-left {
	padding: 0 30upx;
}
.text-desc {
	display: flex;
	justify-content: space-between;
	padding: 10upx 20upx;
}
.colorRed {
	color: red;
}
.colorGreen {
	color: #32cd32;
}
.colorYellow {
	color: yellow;
}
.colorBlue {
	color: #007aff;
}

.bgBlue {
	background-color: #007aff;
}
.bgGreen {
	background-color: #32cd32;
}
.bgAsh {
	background-color: #c8c7cc;
}

.uni-timeline {
	padding: 30upx 20upx;
}
.uni-timeline-item-content-t {
	font-weight: bold;
}
.desc-pad {
	padding: 0 0upx;
}
.desc-pad .bz {
	color: rgb(0, 122, 255);
}
.desc-pad .bz .icon {
	color: rgb(0, 122, 255);
}
.uni-timeline-last-item .uni-timeline-item-divider {
	background: #bbb;
}

.CBlue {
	background-color: #007aff;
	box-shadow: 0 5px 5px #007aff;
}
.CGreen {
	background-color: #32cd32;
	box-shadow: 0 5px 5px #32cd32;
}
.CAsh {
	background-color: #c8c7cc;
	box-shadow: 0 5px 5px #c8c7cc;
}

.module {
	overflow: hidden;
	margin: 20upx auto;
	width: 220upx;
	height: 220upx;
	border-radius: 50%;
	color: #fff;
	text-align: center;
}
.module .text {
	font-size: 20px;
	margin: 50upx auto 10upx;
}
.uni-timeline-item .uni-timeline-item-content {
	width: 100%;
	padding-right: 20upx;
}

.content-show {
	width: 100%;
}

.sign-title {
	display: flex;
	justify-content: space-between;
	padding: 30upx 24upx;
	border-bottom: 1upx solid #333;
}
.sign-title .portrait {
	width: 100upx;
	height: 100upx;
	line-height: 100upx;
	border-radius: 50%;
	background-color: #007aff;
	color: #fff;
	font-size: 28upx;
	text-align: center;
}
.sign-title .sign-title-l {
	display: flex;
}
.sign-title .sign-title-l .text {
	margin-left: 20upx;
}
.sign-title .sign-title-l .text .name {
	font-size: 32upx;
}
.sign-title .sign-title-l .text .gz {
	color: darkblue;
	display: inline-flex;
}
.sign-title .sign-title-l .text .gz text {
	display: inline-block;
}
.sign-title .sign-title-l .text .gz .t1 {
	overflow: hidden; /*超出部分隐藏*/
	text-overflow: ellipsis; /* 超出部分显示省略号 */
	white-space: nowrap; /*规定段落中的文本不进行换行 */
	width: 166upx; /*需要配合宽度来使用*/
}
.iswq {
	padding: 0px 12px;
	color: #99cc33;
	border: 1px solid #99cc33;
	width: 70px;
	height: 24px;
	border-radius: 4px;
	margin-left: 20upx;
	display: inline-block;
	text-align: center;
}
.desc-pad .last {
	margin-bottom: 80upx;
}
.relocation {
	color: #0000ff;
}
.uni-popup .content .text {
	color: #666666;
}
</style>
