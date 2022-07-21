// page/billList/billList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    billList:[
  
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this
    wx.cloud.callFunction({
      name:'httpApi',
      data: {
      url:'http://47.108.225.54:8082/waiter/to_pay',
      method:'GET',
      fData:{
        user_id:app.globalData.user.userId
      }
      }
     }).then(res=>{
       console.log(res)
       var json = JSON.parse(res.result)
       console.log(json)
          that.setData({
            billList:json.data
          })

          console.log(that.data.billList)
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
    var that =this
    wx.cloud.callFunction({
      name:'httpApi',
      data: {
      url:'http://47.108.225.54:8082/waiter/to_pay',
      method:'GET',
      fData:{
        user_id:app.globalData.user.userId
      }
      }
     }).then(res=>{
       console.log(res)
       var json = JSON.parse(res.result)
       console.log(json)
          that.setData({
            billList:json.data
          })

          console.log(that.data.billList)
     })
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
detail:function(e){
  console.log(e.currentTarget.dataset.id)
  app.globalData.curOrder=e.currentTarget.dataset.id
  wx.navigateTo({
    url: '/page/bill/bill',
  })
},
searchInput:function(e){
this.setData({
 sId:parseInt(e.detail.value)
})
},
search:function(){
  var key=0
  for(let i in this.data.billList){
    if(this.data.billList[i].orderId==this.data.sId) {
      app.globalData.curOrder=this.data.billList[i].orderId
      key=1
      wx.navigateTo({
            url: '/page/bill/bill',
      })
    } 
  } 
  if(key==0)
  wx.showToast({
        title: '未查询到订单',
        icon:'none'
      })
}
})