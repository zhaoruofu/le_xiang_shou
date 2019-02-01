// components/announcement/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        msgList:[ 
         '今日餐饮建议' ,
          "平台消息：欢迎新学员'鹿晗'加入" ,
         '今日健康运动目标' ,
         '12月12日’每日评估报告' 
        ]
    },

    /**
     * 组件的方法列表
     */
   

    methods: {
        onTap(event) {
            wx.navigateTo({
                url: '/pages/message/message',
            })
        },
    }
    //  { title: '今日餐饮建议' },
    // { title: "平台消息：欢迎新学员'鹿晗'加入" },
    // { title: '今日健康运动目标' },
    // { title: '12月12日’每日评估报告' }
})
