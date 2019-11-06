<template>
	<view>
		<view class="exam-item-testing" v-if="dataList.length > 0">
			<view class="exam-item-inner">
				<view class=" exam-item-title">{{ currentIndex + 1 }}.{{ dataList[currentIndex].fldName ? dataList[currentIndex].fldName : '' }}</view>
				<!--  单选 -->
				<view v-if="dataList[currentIndex].questionType === 0 && dataList[currentIndex].QuestionOptionList!=undefined">
					<view class="exam-item-option" v-for="(item, rowIndex_1) in dataList[currentIndex].QuestionOptionList" v-bind:key="rowIndex_1" @click="radioChange(item)">
						<radio :checked="item.fldOptionIndex == currentCheck" />
				<!-- 		<text>{{ checkNum(item.fldOptionIndex) }}</text>-->
			
						<text v-if="item.fldOptionIndex===1">A</text>
						<text v-if="item.fldOptionIndex===2">B</text>
						<text v-if="item.fldOptionIndex===3">C</text>
						<text v-if="item.fldOptionIndex===4">D</text>
						.
						<text>{{ item.fldOptionText }}</text>
					</view>
				</view>
				<!-- 多选 -->
				<checkbox-group @change="checkboxChange" v-if="dataList[currentIndex].questionType == 1 && dataList[currentIndex].QuestionOptionList!= undefined">
					<view v-for="(item,rowIndex_2) in dataList[currentIndex].QuestionOptionList" v-bind:key='rowIndex_2'>
						<view class="exam-item-option">
							<checkbox :value="setCheckboxVal(item.fldOptionIndex)" :checked="checkboxCheck(item.fldOptionIndex)" />
							<text v-if="item.fldOptionIndex===1">A</text>
							<text v-if="item.fldOptionIndex===2">B</text>
							<text v-if="item.fldOptionIndex===3">C</text>
							<text v-if="item.fldOptionIndex===4">D</text>
							.
							<text>{{ item.fldOptionText }}</text>
						</view>
					</view>
				</checkbox-group>

				<!--  填空题 -->
				<view v-show="dataList[currentIndex].questionType == 2">
					<view class="exam-item-option">
						<textarea @blur="bindTextAreaBlur" @input="bindTextinput" placeholder="请输入您的答案" :value="getTxtValue(currentIndex)" />
					</view>
				</view>

				<view class="exam-button-row">
					<view class="control">
						<!-- 						<button size="mini" @tap="finish" style="margin-right: 20upx;">{{ finishText }}</button> -->
						<button v-if="currentIndex === 0" disabled="false" size="mini">{{ lastText }}</button>
						<button v-if="currentIndex != 0" size="mini" @tap="lastQuestion">{{ lastText }}</button>
						<button @tap="switchIndexBox" class="tihao">{{ indexText }}{{ showIndexBox ? '▽' : '△' }}</button>
						<button v-show="currentIndex < dataList.length - 1" size="mini" @tap="nextQuestion">{{ nextText }}</button>
						<button v-if="currentIndex == dataList.length - 1" size="mini" @tap="jiaojuan">
							立即交卷</button>
						<button v-if="currentIndex == dataList.length - 1&&showjiexi" size="mini" @tap="jiaojuan">返回首页</button>
					</view>
				</view>
				<view class="jiexiCard" v-if="showjiexi">
					<view class="card_title">解析</view>
					<view class="card_content">{{ dataList[currentIndex].fldTrueAnswer }}</view>
					<view class="card_footer">
						<view class="f_left">
							<text>50%</text>
							<text>错题率</text>
						</view>
						<view class="shuxian"></view>
						<view class="f_right">
							<text>A</text>
							<text>正确答案</text>
						</view>
					</view>
				</view>
				<view v-show="showIndexBox" class="exam-indexbox">
					<view
						class="exam-indexbox-item"
						v-bind:style="{ background: quesIndex == currentIndex ? '#F0F0F0' : '' }"
						v-bind:class="{ 'exam-indexbox-item-selected': checkItem(item) }"
						v-for="(item, quesIndex) in dataList"
						v-bind:key="item.questionID"
						@click="currentSelectFinish(quesIndex)"
					>
						{{ quesIndex + 1 }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'Li-ExamWidght',
	props: {
		index: {
			info: Number,
			default: 0
		},
		dataList: {
			type: Array,
			default: function() {
				return undefined;
			}
		},
		finishText: {
			info: String,
			default: '完成'
		},
		lastText: {
			info: String,
			default: '上一题'
		},
		nextText: {
			info: String,
			default: '下一题'
		},
		indexText: {
			info: String,
			default: '题号'
		},
		showjiexi: {
			info: Boolean,
			default: false
		}
	},
	data() {
		return {
			showIndexBox: false,
			currentHasChange: false,
			currentIndex: 0,
			currentCheck: undefined, //单选选定
			currentCheckBoxCheck: [], //多选选定
			currentText: '' //填空题
		};
	},
	watch: {
		index: function(val, oldVal) {
			this.currentIndex = val;
			this.currentSelectFinish(this.currentIndex);
			console.log('new: %s, old: %s', val, oldVal);
		},

	},
	computed: {
		
	},
	methods: {
		jiaojuan(e) {
			console.log(e);
			var that = this;
			console.log(that);
			uni.showModal({
				title: '温馨提示',
				content: '是否确认交卷？',
				success(r) {
					if (r.confirm) {
						//计算答题分数
						var score = 0;
						var errorListid=[]
						for (var i = 0; i < that.dataList.length; i++) {
							if (that.dataList[i].fldAnswer == that.dataList[i].fldTrueAnswer) {
								score = score + 1;
							}else{
								errorListid.push({
									"errorId":that.dataList[i].questionID
								})
							}
						}
						console.log(errorListid);
						console.log('考试得分' + score);
						
						uni.redirectTo({
							url: '../../pages/examExport/examExport?score=' + score + '&num=' + (that.dataList.length)+'&errorid='+JSON.stringify(errorListid) 
						});
					}
				}
			});
		},
		switchIndexBox() {
			this.showIndexBox = !this.showIndexBox;
		},
		checkItem(item) {
			if (!item.fldAnswer) return false;
			let res = (item.questionType != 1 && item.fldAnswer) || (item.questionType == 1 && item.fldAnswer.length != 0);
			if (res) return true;
			else return false;
		},
		radioChange(item) {
			//单选改变
			this.currentHasChange = true;
			//console.log(item)
			this.currentCheck = item.fldOptionIndex;
			this.dataList[this.currentIndex].fldAnswer = item.fldOptionIndex;
			this.$emit('select', {
				question: this.dataList[this.currentIndex],
				anwser: item
			});
		},
		checkboxChange(e) {
			//多选改变
			this.currentHasChange = true;
			this.currentCheckBoxCheck = e.detail.value;
			this.dataList[this.currentIndex].fldAnswer = this.currentCheckBoxCheck;
			this.$emit('select', {
				question: this.dataList[this.currentIndex],
				anwser: this.currentCheckBoxCheck
			});
		},
		bindTextAreaBlur(e) {
			//填空结束
			// this.currentText = e.detail.value;
			// this.currentHasChange = true;
			// this.dataList[this.currentIndex].fldAnswer = this.currentText;
		},
		bindTextinput(e) {
			//填空值改变
			this.currentText = e.detail.value;
			this.currentHasChange = true;
			this.dataList[this.currentIndex].fldAnswer = this.currentText;
		},


		getTxtValue(currentIndex) {
			return this.dataList[currentIndex].fldAnswer ? this.dataList[currentIndex].fldAnswer : '';
		},
		checkNum(num) {
			//把数字转换为字母
			if (typeof num == 'number') return String.fromCharCode(0x60 + num).toUpperCase();
			else return num;
		},
		setCheckboxVal(val) {
			//设置多选框的值，如果是数字，则转换成字符串
			if (typeof val == 'number'){
				 return val + '';
			}else{
				return val;
			}
		
		
		},
		checkboxCheck(num) {
			//检查多选框是否已经选定
			let that = this;
			for (let i = 0; i < that.currentCheckBoxCheck.length; i++){
				if (that.currentCheckBoxCheck[i] == num){
					return true;
				} else{
						return false;
				}
			} 
		
		
		},
		lastQuestion() {
			//上一题
			let newIndex = this.currentIndex - 1;
			this.currentSelectFinish(newIndex);
		},
		nextQuestion() {
			//下一题
			let newIndex = this.currentIndex + 1;
			this.currentSelectFinish(newIndex);
		},
		currentSelectFinish(newIndex) {
			//切换题目
			let that = this;
			let __oldIndex = that.currentIndex;
			let __newIndex = newIndex;
			if (that.dataList[__oldIndex].questionType == 0) {
				that.$emit('selectFinish', {
					currentItem: {
						//当前项
						question: that.dataList[__oldIndex],
						anwser: that.currentCheck,
						hasChange: that.currentHasChange,
						index: __oldIndex,
						total: that.dataList.length
					},
					newItem: {
						//新项
						question: that.dataList[__newIndex],
						index: __newIndex,
						total: that.dataList.length
					}
				});
			} else if (that.dataList[__oldIndex].questionType == 1) {
				that.$emit('selectFinish', {
					currentItem: {
						//当前项
						question: that.dataList[__oldIndex],
						anwser: that.currentCheckBoxCheck,
						hasChange: that.currentHasChange,
						index: __oldIndex,
						total: that.dataList.length
					},
					newItem: {
						//新项
						question: that.dataList[__newIndex],
						index: __newIndex,
						total: that.dataList.length
					}
				});
			} else if (that.dataList[__oldIndex].questionType == 2) {
				that.$emit('selectFinish', {
					currentItem: {
						//当前项
						question: that.dataList[__oldIndex],
						anwser: that.currentText,
						hasChange: that.currentHasChange,
						index: __oldIndex,
						total: that.dataList.length
					},
					newItem: {
						//新项
						question: that.dataList[__newIndex],
						index: __newIndex,
						total: that.dataList.length
					}
				});
			}

			that.currentIndex = newIndex;
			that.currentHasChange = false;
			that.showIndexBox = false;
			that.checkQuestionSelected();
		},
		checkQuestionSelected() {
			//初始化选择
			if (this.dataList[this.currentIndex].questionType == 0) {
				this.currentCheck = this.dataList[this.currentIndex].fldAnswer; //单选选定
			} else if (this.dataList[this.currentIndex].questionType == 1) {
				this.currentCheckBoxCheck = this.dataList[this.currentIndex].fldAnswer ? this.dataList[this.currentIndex].fldAnswer : []; //多选选定
			} else if (this.dataList[this.currentIndex].questionType == 2) {
				this.currentText = this.dataList[this.currentIndex].fldAnswer ? this.dataList[this.currentIndex].fldAnswer : []; //多选选定
			}
		},
		finish() {
			//全部选择完成
			this.$emit('finish', {
				questions: this.dataList
			});
		}
	}
};
</script>

<style>
.jiexiCard {
	background-color: #f5f5f5;
	padding: 20rpx;
	border-radius: 10rpx;
	color: #999999;
	position: absolute;
	width: 650rpx;
	bottom: 300rpx;
	z-index: -1;
}
.card_title {
	font-size: 32rpx;
}
.card_footer {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: 100rpx;
}
.shuxian {
	width: 3rpx;
	height: 60rpx;
	background-color: #007aff;
}
.f_left {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
}
.f_right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
}
page {
	font-size: 28upx;
}
.exam-item-testing {
	margin: 20upx 10upx 20upx 10upx;
	border-radius: 10upx;
	background-color: #fff;
}
.control {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.control button {
	width: 200rpx;
	height: 70rpx;
	line-height: 70rpx;
	font-size: 28rpx;
	margin-right: 40rpx;
	background-color: #007aff;
	color: white;
}
.tihao {
}
.exam-item-inner {
	padding: 0 20upx;
}

.exam-item-title {
	font-size: 35upx;
	margin-bottom: 30rpx;
	margin-top: 30rpx;
}

.exam-item-option {
	font-size: 30upx;
	padding: 10upx 0;
}
.exam-item-option textarea {
	border: 1px solid gainsboro;
	border-radius: 10upx;
	height: 200upx;
	width: 100%;
}

.exam-button-row {
	position: absolute;
	bottom: 200rpx;
	text-align: center;
}

.exam-indexbox {
	padding-bottom: 20upx;
	z-index: 999;
}

.exam-indexbox:before,
.exam-indexbox:after {
	display: table;
	content: ' ';
}
.exam-indexbox:after {
	clear: both;
}
.exam-indexbox-item {
	text-align: center;
	vertical-align: middle;
	line-height: 55upx;
	float: left;
	border: 1px solid gainsboro;
	height: 55upx;
	width: 55upx;
	margin: 5upx;
	padding: 10upx;
	border-radius: 10upx;
	background-color: #fff;
	-moz-box-shadow: 0px 1px 1px #ababab;
	-webkit-box-shadow: 0px 1px 1px #ababab;
	box-shadow: 0px 1px 1px #ababab;
}
.exam-indexbox-item:active {
	background-color: #eee;
}
.exam-indexbox-item-selected {
	color: #007aff;
}

/* 以下为实现0.5px底部边界 */
.line_under {
	position: relative;
	/* .line_under:before{顶部top: 0;background: #000;} */
}

.line_under:before,
.line_under:after {
	position: absolute;
	content: ' ';
	height: 1px;
	width: 100%;
	left: 0;
	transform-origin: 0 0;
	-webkit-transform-origin: 0 0;
}

.line_under:after {
	bottom: 0;
	border-bottom: 1px solid gainsboro;
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5) {
	.line_under:after,
	.line_under:before {
		-webkit-transform: scaleY(0.667);
	}
}

@media only screen and (-webkit-min-device-pixel-ratio: 2) {
	.line_under:after,
	.line_under:before {
		-webkit-transform: scaleY(0.5);
	}
}
</style>
