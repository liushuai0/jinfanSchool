<template>
	<view class="Container">
		<view class="card" v-for="(item, index) in newsList" :key="index" :data-index="index" @tap="tonewsDetail">
			<view class="card_left">
				<view class="card_title">{{ item.title }}</view>
				<view class="card-footer">
					<text class="card_name">{{ item.name }}</text>

					<text class="card_time">
						<text>{{ item.date }}</text>
						{{ item.time }}
					</text>
				</view>
			</view>
			<view class="card_right"><image src="../../static/image/cardimg.jpeg" class="card_img" mode=""></image></view>
			
		</view>

		
	</view>
</template>

<script>

export default {
	data() {
		return {
			page:1,
			newsList: [
				{
					img: '../../../static/image/cardimg.jpeg',
					title: '启动青阿萨德阿瑟的',
					name: '中国吉林网',
					date: '03-23',
					time: '14：20',
					id: 5258169,
					content:
						'即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
				},
				{
					img: '../../../static/image/cardimg.jpeg',
					title: '启动青年企业家爱上对方阿萨德阿瑟的',
					name: '中国吉林网',
					date: '03-23',
					time: '14：20',
					id: 5258179,
					content:
						' 圣诞快乐分管科室电话分公325司领导放大后即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
				},
				{
					img: '../../../static/image/cardimg.jpeg',
					title: '启动青阿萨德阿瑟的',
					name: '中国吉林网',
					date: '03-23',
					time: '14：20',
					id: 5258169,
					content:
						'即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
				},
				{
					img: '../../../static/image/cardimg.jpeg',
					title: '启动青年企业家爱上对方阿萨德阿瑟的',
					name: '中国吉林网',
					date: '03-23',
					time: '14：20',
					id: 5258179,
					content:
						' 圣诞快乐分管科室电话分公325司领导放大后即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
				},
				{
					img: '../../../static/image/cardimg.jpeg',
					title: '启动青阿萨德阿瑟的',
					name: '中国吉林网',
					date: '03-23',
					time: '14：20',
					id: 5258169,
					content:
						'即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
				},
				{
					img: '../../../static/image/cardimg.jpeg',
					title: '启动青年企业家爱上对方阿萨德阿瑟的',
					name: '中国吉林网',
					date: '03-23',
					time: '14：20',
					id: 5258179,
					content:
						' 圣诞快乐分管科室电话分公325司领导放大后即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
				},
				{
					img: '../../../static/image/cardimg.jpeg',
					title: '启动青阿萨德阿瑟的',
					name: '中国吉林网',
					date: '03-23',
					time: '14：20',
					id: 5258169,
					content:
						'即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
				},
				{
					img: '../../../static/image/cardimg.jpeg',
					title: '启动青年企业家爱上对方阿萨德阿瑟的',
					name: '中国吉林网',
					date: '03-23',
					time: '14：20',
					id: 5258179,
					content:
						' 圣诞快乐分管科室电话分公325司领导放大后即可<image style="width:100rpx;height:140rpx" src="../../../static/image/cardimg.jpeg" mode="widthFix" />广东省双方5735各绝对是法国代,收款家分公司代付款水电费格劳克斯电饭锅是大法官盛世嫡妃kg惊世毒妃地方帝国时代克己奉公SDK房管局水电费空格键是大法官第三方高科技时代峻峰空格深度覆盖是'
				}
			]
		};
	},
	onLoad() {
		
	},
	methods: {
		tonewsDetail(e) {
			let index = e.currentTarget.dataset.index;
			uni.navigateTo({
				url: 'newsDetail/newsDetail?id=' + this.newsList[index].id
			});
		},
		
	},
	onReachBottom(e){
		console.log("上拉加载中..");
		uni.showLoading({
			title: '加载中...',
			mask: false
		});
		setTimeout(function(){
			uni.hideLoading()
		},1000)
	}
};
</script>

<style>
.Container {
	display: flex;
	flex-direction: column;
	padding: 20rpx;
}
.card {
	display: flex;
	flex-direction: row;
	padding: 30rpx;
	position: relative;
	border-top: 18rpx solid #e1e1e1;
	margin-left: -20rpx;
	margin-right: -20rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
}
.card_left {
	display: flex;
	flex-direction: column;
	width: 466rpx;
}
.card_title {
	font-size: 30rpx;
	font-weight: 600;
}
.card_right {
}
.card_img {
	width: 260rpx;
	height: 180rpx;
	border-radius: 14rpx;
	margin-left: 30rpx;
}
.card-footer {
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 26rpx;
	color: gray;
	position: absolute;
	bottom: 30rpx;
	width: 370rpx;
}

.card_name {
	font-size: 30rpx;
}
.card_time {
	position: absolute;
	right: 0rpx;
}
.card_time text {
	margin-right: 20rpx;
}
</style>
