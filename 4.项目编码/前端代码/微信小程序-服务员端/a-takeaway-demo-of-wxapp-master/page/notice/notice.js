// page/notice/notice.js
const app= getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        noticeId:0,
        createTime:"2022-02-12T23:07:07.000+00:00",
        notice:"",
        title:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that=this
        that.setData({
            noticeId:app.globalData.noticeId
        })
        wx.cloud.callFunction({
            name:'httpApi',
            data: {
            url:'http://47.108.225.54:8082/waiter/notice_details',
            method:'POST',
            fData:{
                notice_id:this.data.noticeId,
                user_id:app.globalData.user.userId
            }
            }
           }).then(res=>{
             var json = JSON.parse(res.result)
             console.log(json.data)
             that.setData({
            noticeId:json.data.noticeId,
            createTime:json.data.createTime,
            notice:json.data.content,
            title:json.data.title
             })

           })
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

    },
    confirm:function(e){
    //     var that=this
    //     wx.cloud.callFunction({
    //       name:'httpApi',
    //       data: {
    //       url:'http://47.108.225.54:8082/waiter/notice/status',
    //       method:'POST',
    //       fData:{
    //         notice_id:parseInt(app.globalData.noticeId),
    //         user_id:parseInt(app.globalData.user.userId)
    //       },
    //       }
    //      }).then(res=>{
    // })
    wx.navigateBack({
          delta: 0,
        })
    }
})