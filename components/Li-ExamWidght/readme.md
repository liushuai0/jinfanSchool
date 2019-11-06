### Li-ExamWidght 在线答题,试卷测试

在线答题组件，组件名：``Li-ExamWidght``。
支持单选，多选，填空，我觉得判断题可以做成单选形式，所以就没有添加。
有些字段是按照我的项目来写的，请根据自己的需求修改。

**使用方式：**

在 ``script`` 中引用组件 

```javascript
import examWidght from '@/components/Li-ExamWidght/Li-ExamWidght.vue';

export default {
    components: {examWidght}
}

```


**用法：**

```html
<exam-widght :dataList='QuestionList' :index="index" @select='selectItem' @selectFinish='selectFinish' @finish='finish'>
</exam-widght>
```
 
 **模拟数据：**
 
 ```html
	[
        {
            "questionID": "655180e7-c06a-42ca-a043-6ead0dc41b2f",
            "fldName": "下列哪种灭火器不可用于电器类火灾()。",
            "fldTrueAnswer": "3",
            "fldAnswer": null,
            "questionType": 0,
            "QuestionOptionList": [
                {
                    "optionID": "b56faf0b-0157-4820-a4bd-aa6fe1707bde",
                    "fldOptionText": "干粉灭火器",
                    "fldOptionIndex": 1
                },
                {
                    "optionID": "0877f05c-7052-4581-a85a-d46ebe6898b2",
                    "fldOptionText": "二氧化碳灭火器",
                    "fldOptionIndex": 2
                },
                {
                    "optionID": "e1167ea9-6d50-4009-ae73-9a834780c408",
                    "fldOptionText": "泡沫灭火器",
                    "fldOptionIndex": 3
                },
                {
                    "optionID": "d327e262-5eb4-43e8-b4b0-30513994be0f",
                    "fldOptionText": "泡灭火器",
                    "fldOptionIndex": 4
                }
            ]
        },
	]
 ```
  
 
**属性说明：**

|属性名		|类型		|默认值	|说明																		|
|---		|----		|---	|---																		|
|index		|Number		|0		|起始题号，外部可通过此参数修改当前题号										|
|dataList	|array		|[]		|题目列表																	|
|finishText	|String		|完成		|按键文字										|
|lastText	|String		|上一题		|按键文字																	|
|nextText	|String		|下一题		|按键文字										|
|indexText	|String		|题号		|按键文字																	|

**事件：**

|事件名				|说明																		|
|---				|---																		|
|select				|题目类型为单选或者多选时，选择或者切换选择触发																	|
|selectFinish		|切换题目时触发，包括点击上一题、下一题、点击题号、外部修改题号																	|
|finish				|点击完成时触发																	|

**selectFinish事件返回值：**
```html
	{
		"currentItem": {   //当前项
			"question": {
				"questionID": "34d4f7bb-3575-47d8-89a2-55dd12250527",
				"fldName": "火警电话是多少?拨打火警电话，报警内容是什么？",
				"fldTrueAnswer": "火警：119    单位内部火警电话：2130877报警内容：讲清起火地点、起火物质、火势大小，是否有人员被困。",
				"fldAnswer": null,
				"questionType": 2,
				"QuestionOptionList": [{
					"optionID": "00000000-0000-0000-0000-000000000000",
					"fldOptionText": null,
					"fldOptionIndex": 0
				}]
			},
			"anwser": [],
			"hasChange": false,
			"index": 34, 
			"total": 38
		},
		"newItem": {   //新项
			"question": {
				"questionID": "8f569bcd-babc-46e6-86d3-fb3b4826e657",
				"fldName": "乐都汇购物中心内部火警电话是。",
				"fldTrueAnswer": "3",
				"fldAnswer": null,
				"questionType": 2,
				"QuestionOptionList": [{
					"optionID": "00000000-0000-0000-0000-000000000000",
					"fldOptionText": null,
					"fldOptionIndex": 0
				}]
			},
			"index": 33,
			"total": 38
		}
	}
 ```

**1.0.0**
- 初始项目
