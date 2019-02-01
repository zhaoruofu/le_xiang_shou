
var recordData = require( '../../data/data.js')

var date = new Date()
console.log(recordData.recordData[0].date)

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        records:Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        // record:'',
        bodySrc:'/components/record/images/ios-body.png',
        addSrc:'/components/record/images/add.png',
        wrongSrc:'/components/record/images/icon-wrong.png',
        newSrc:'/components/record/images/new.png',
        checkBtn:false
    },


    // attached(event) {
    //     this.setData({
    //         record: recordData.recordData
    //     })
    // },
    /**
     * 组件的方法列表
     */
    methods: {
        onTap(event){
            let checkBtn = this.data.checkBtn
            if(!checkBtn){
                this.setData({
                    checkBtn:true
                })
            }else{
                this.setData({
                    checkBtn:false
                })
            }
        }
    }
})
