// pages/coach/coach.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        historyReport:[
            {
                img:'../../images/coach/first.png',
                week:'第一周',
                text:'本周开始训练的，主要包含内容做简单有氧运动，跟老师做体操，按照菜谱进食.',
                date:'2018年12月23日'
            },
            {
                img:'../../images/coach/second.png',
                week:'第二周',
                text:'本周开始训练的，主要包含内容做简单有氧运动，跟老师做体操，按照菜谱进食。',
                date:'2018年12月23日'
            },
            {
                img:'../../images/coach/third.png',
                week:'第三周',
                text:'本周开始训练的，主要包含内容做简单有氧运动，跟老师做体操，按照菜谱进食。',
                date:'2018年12月23日'
            },
            {
                img: '../../images/coach/forth.png',
                week: '第四周',
                text: '本周开始训练的，主要包含内容做简单有氧运动，跟老师做体操，按照菜谱进食。',
                date: '2018年12月23日'
            }
            ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
         let historyReport = this.data.historyReport
        this.setData({
            historyReport:historyReport
        })
        console.log(historyReport)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})