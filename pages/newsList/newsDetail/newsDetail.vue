<template>
	<view class="Container">
		<view class="title">{{ newsList.title }}</view>
		<view class="findnum">20015阅读</view>
		<view class="content"><rich-text :nodes="content" style="font-size: 14px;"></rich-text></view>
		<view class="caozuo">
			<image :src="newsList.hasshoucang?'../../../static/image/shoucang0.png':'../../../static/image/shoucang3.png'" @tap="chooseSC" mode=""></image>
			<image :src="newsList.hasdianzan?'../../../static/image/dianzan0.png':'../../../static/image/dianzan.png'" @tap="chooseDZ" mode=""></image>
			<image src="../../../static/image/zhuanfa.png" mode="" @tap="shareNews"></image>
			<text class="date">2019-{{newsList.date}} {{newsList.time}}</text>
		</view>
	</view>
</template>

<script>
import htmlParser from '@/common/html-parser';
export default {
	data() {
		return {
			newsList: {
				img: '../../../static/image/cardimg.jpeg',
				title: '启动青年企业家爱上对方阿萨德阿瑟的',
				name: '中国吉林网',
				date: '03-23',
				time: '14：20',
				id:5258169,
				hasshoucang:false,
				hasdianzan:false,
				content:' 圣诞快乐分管科室电话分公325司领导放大后即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
			},
			content: [],
			
		};
	},

	onLoad(options) {
		console.log(options);
		// 目前在某些平台参数会被主动 decode，暂时这样处理。
		// try {
		// 	this.banner = JSON.parse(decodeURIComponent(event.query));
		// } catch (error) {
		// 	this.banner = JSON.parse(event.query);
		// }
		if(options.id){
			this.getDetail(options.id);
		}
	},
	methods: {
		getDetail(id){
		uni.request({
			url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + id,
			success: (result) => {
				console.log(result);
				
				var content;
				if (result.statusCode == 200) {
					this.newsList = result.data.content
				}
				const nodes = htmlParser(content);
				console.log(nodes);
				this.content = nodes
			}
		});
		},
		chooseSC(e){
			this.newsList.hasshoucang=!this.newsList.hasshoucang
			if(this.newsList.hasshoucang==true){
				this.showtoast("收藏成功")
			}else{
				this.showtoast("已取消收藏")
			}

		},
		chooseDZ(e){
			this.newsList.hasdianzan=!this.newsList.hasdianzan
			if(this.newsList.hasdianzan==true){
				this.showtoast("点赞成功")
			}else{
				this.showtoast("已取消点赞")
			}

		},
		showtoast(titie){
			uni.showToast({
				title:titie
			})
			setTimeout(function() {
				uni.hideLoading()
			}, 1000);
		},
		shareNews(e){
			var that=this
			that.onShareAppMessage()
		},
		onShareAppMessage(res) {
		
		  }
		
		
	}
};
</script>

<style>
.Container {
	display: flex;
	flex-direction: column;
	padding: 20rpx;
}
.title {
	font-size: 34rpx;
	font-weight: 600;
}
.findnum {
	color: #999999;
	font-size: 24rpx;
	margin: 30rpx 0;
}
.content {
	display: flex;
	padding: 40rpx;
	letter-spacing: 3rpx;
	line-height: 40rpx;
	margin-bottom: 100rpx;
	color: #999999;
}
.caozuo{
	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: 60rpx;
}
.caozuo image{
	width: 39rpx;
	height: 39rpx;
	margin-left: 35rpx;
}
.date{
	position: absolute;
	right: 30rpx;
	color: #999999;
}
</style>
