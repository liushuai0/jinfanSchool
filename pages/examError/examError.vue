<template>
	<view>
		<exam-widght :dataList='QuestionList' :showjiexi="showjiexi" :index="index" @select='selectItem' @selectFinish='selectFinish' @finish='finish'>
		</exam-widght>

	</view>
</template>

<script>
	import examWidght from '@/components/Li-ExamWidght/Li-ExamWidght.vue';
	var _this;
	export default {
		components: {
			examWidght
		}, 
		data() {
			return {
				fldTestPaperID: undefined,
				fldTestRecordID: undefined,
				items: [],
				index: 0,
				QuestionList: [],
				showjiexi:true,
				errorList:[]
			}
		},
		onLoad(options) {
			console.log("---------错题页面----------")
			console.log(options);
			// if(options.errorListid){     
			// 	this.errorListid=JSON.parse(options.errorListid)
			// }
			// if(options.errorId){		//从答题报告接收过来的
			// 	this.errorList=JSON.parse(options.errorId)
			// }
			this.errorList=uni.getStorageSync('errorList')
			console.log(this);
			_this = this;
			_this.getTestPaper();
		},
		onUnload() {},
		methods: {
			jump(){
				this.index = 10;
			},
			finish(item) {
				console.log("-----finish------")
				console.log(item)
			},
			selectItem(item) {
				console.log("-----selectItem------")
				console.log(item)
			},
			selectFinish(item) {
				console.log("-----selectFinish------")
				console.log(item)
				let index = item.newItem.index + 1;
				let title = index + '/' + item.newItem.total

				if (item.newItem.question.questionType == 0)
					title += "  单选题";
				else if (item.newItem.question.questionType == 1)
					title += "  多选题";
				else
					title += "  填空题";
				uni.setNavigationBarTitle({
					title: title
				});
			},
			getTestPaper() {
				// let data = require('../../static/data.json')  ;

				_this.QuestionList = this.errorList;
				if (_this.QuestionList.length > 0) {
					let title = '1/' + _this.QuestionList.length
					if (_this.QuestionList[0].questionType == 0)
						title += "  单选题";
					else if (_this.QuestionList[0].questionType == 1)
						title += "  多选题";
					else
						title += "  填空题";
					uni.setNavigationBarTitle({
						title: title
					});
				}
			}
		}
	}
</script>

<style>

</style>
