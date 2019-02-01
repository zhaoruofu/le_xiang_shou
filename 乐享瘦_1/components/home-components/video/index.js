
// function getRandomColor() {
//     const rgb = []
//     for (let i = 0; i < 3; ++i) {
//         let color = Math.floor(Math.random() * 256).toString(16)
//         color = color.length == 1 ? '0' + color : color
//         rgb.push(color)
//     }
//     return '#' + rgb.join('')
// }

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    // onReady(res) {
    //     this.videoContext = wx.createVideoContext('myVideo')
    // },
    // inputValue: '',

    /**
     * 组件的初始数据
     */
    data: {
        src: '',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // bindInputBlur(e) {
        //     this.inputValue = e.detail.value
        // },
        // bindButtonTap() {
        //     const that = this
        //     wx.chooseVideo({
        //         sourceType: ['album', 'camera'],
        //         maxDuration: 60,
        //         camera: ['front', 'back'],
        //         success(res) {
        //             that.setData({
        //                 src: res.tempFilePath
        //             })
        //         }
        //     })
        // },
        // bindSendDanmu() {
        //     this.videoContext.sendDanmu({
        //         text: this.inputValue,
        //         color: getRandomColor()
        //     })
        // }
    }
})
