<template>
	<view class="Container">
		<view class="card" v-for="(item,index) in errorCollection" :key="index" :data-index="index" @tap="toErrorDetail">
			<view class="card_title">
				{{item.zhuanye}}
			</view>
			<text class="card_content">
				{{item.title}}
			</text>
			<view class="card_footer">
				答题时间：{{item.time}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				errorCollection:[
					{
						zhuanye:'计算机/专业',
						title:"阿萨德刚卡死看见的股份可拉伸的反馈给防守打法开了房的阿萨德刚看了sad付款立即阿萨德刚加上个",
						time:'2018.04.14',
						id:0
					},
					{
						zhuanye:'平面设计/专业',
						title:"文案是个啥风科技哈啊阿萨德国际阿萨德刚阿萨德国际蓝卡队规划师",
						time:'2019.07.08',
						id:1
					},
					{
						zhuanye:'汽车修理/专业',
						title:"喀什东路发给您，项目存在是即可撒快递费sad付款立即阿萨德刚加上个",
						time:'2019.07.08',
						id:2
					}
				]
			}
		},
		methods: {
			toErrorDetail(e){
				let index=e.currentTarget.dataset.index
				uni.navigateTo({
					url:"../examError?errid="+this.errorCollection[index].id
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
.Container{
	display: flex;
	flex-direction: column;
	padding: 20rpx;
}
.card{
	display: flex;
	flex-direction: column;
	background-color: white;
	padding:30rpx;
	margin-bottom: 30rpx;
	border-radius: 10rpx;
}
.card_title{
	color: #007AFF;
	font-size: 28rpx;
	
}
.card_content{
	font-size: 30rpx;
	
	line-height: 40rpx;
}
.card_footer{
	color: #999999;
	font-size: 28rpx;
}
</style>
