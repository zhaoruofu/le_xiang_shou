let Charts = require('../../utils/wxcharts.js');

Page({

    /**
     * 页面的初始数据
     */

    data: {
        months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        month: ' ',
        day:' ',
        hour:' ',
        minute:' ',
        second:' ',
        grade:78,
        upArrowSrc:'../../images/home/up-arrow.png',
        downArrowSrc: '../../images/home/down-arrow.png',
        show_data:false
    },


    onTap(event){
           let show_data=this.data.show_data
            if(!show_data){
                this.setData({
                     show_data:true
                })
            }else{
                this.setData({
                    show_data:false
                })
            }
    },
    onNext:function(event){
        wx.navigateTo({
            url: '/pages/data-record/data-record',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
        let hours = date.getHours()
        let minute = date.getMinutes()
        this.setData({
            month: this.data.months[month],
            day,
            hours,
            minute,
        })
        console.log(month)
        console.log(day)
        console.log(hours)
        console.log(minute)


        new Charts({
            canvasId: 'lineCanvas',     //输入wxml中canvas的id
            type: 'line',       //图标展示的类型有:'line','pie','column','area','ring','radar'

            backgroundColor: '#005CA2', //图表展示背景颜色
            categories: ['2018-6', '2018-7',
                '2018-8', '2018-9'],    //模拟的x轴横坐标参数
            animation: true,  //是否开启动画
            series: [{   //具体坐标数据
                // name: '收缩压',  
                data: [65, 75,73,85],  //数据点
                // format: function (val, name) {  //点击显示的数据注释
                //     return val + 'mmHg';
                // }
            // }, {
            //     name: '心率',
            //     data: [60, 70, 90, 105, 120, 130, 95],
            //     format: function (val, name) {
            //         return val + '次/分钟';
            //     }
            }
            ],
            xAxis: {   //是否隐藏x轴分割线
                disableGrid: true,
                fontColor: '#ffffff',
            },
            yAxis: {      //y轴数据
                // title: '数值',  //标题
                fontColor:'#ffffff',
                // format: function (val) { 
                //     return val.toFixed(2);
                // },
                min: 60,   //最小值
                max: 80,   //最大值
                gridColor: '#fff',
            },
            width: 350,  //图表展示内容宽度
            height: 300,  //图表展示内容高度
            dataLabel: false,  //是否在图表上直接显示数据
            dataPointShape: true, //是否在图标上显示数据点标志
            legend:false,
        
            extra: {
                lineStyle: 'curve'  //曲线
            },
        });

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
        wx.showLoading({
            title: '已无更多数据',
        })
        setTimeout(function () {
            wx.hideLoading()
        }, 1000)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})