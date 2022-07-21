// page/message/serverMessage.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderId:"",
        tableId:"",
        message:"",
        title:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that=this
        wx.cloud.callFunction({
          name:'httpApi',
          data: {
          url:'http://47.108.225.54:8082/waiter/message_details',
          method:'POST',
          fData:{
            message_id:parseInt(app.globalData.curMessage),
    
          },
          }
         }).then(res=>{
           console.log(res)
           console.log(res.result)
           var json=JSON.parse(res.result)
           console.log(json)
           that.setData({
             message:json.data,
           })
         }
          )
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
        var that=this
        wx.cloud.callFunction({
          name:'httpApi',
          data: {
          url:'http://47.108.225.54:8082/waiter/message/status',
          method:'POST',
          fData:{
            message_id:parseInt(app.globalData.curMessage),
          },
          }
         }).then(res=>{
           console.log(res)
        wx.navigateBack({
          delta: 0,
        })
    })
    }
})