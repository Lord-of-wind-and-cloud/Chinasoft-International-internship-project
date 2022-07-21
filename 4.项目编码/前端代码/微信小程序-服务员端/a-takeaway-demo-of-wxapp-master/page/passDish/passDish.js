// page/passDish/passDish.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dishList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this
    wx.cloud.callFunction({
      name:'httpApi',
      data: {
      url:'http://47.108.225.54:8082/waiter/take_food',
      method:'GET',
      fData:{
        user_id:app.globalData.user.userId
      }
      }
     }).then(res=>{
       console.log(res)
       var json = JSON.parse(res.result)
          that.setData({
            dishList:json.data
          })
           console.log(that.data.dishList)
     })
   
     var channel = ''+app.globalData.user.userId
     var goeasy =app.globalData.goEasy
     var pubsub = goeasy.pubsub;
     pubsub.subscribe({
         channel:channel+"dishPass",//替换为您自己的channel
         onMessage: function (message) {          
          console.log("Channel:" + message.channel + " content:" + message.content);
          var list= that.data.dishList 
          console.log( typeof (message))
          console.log( typeof (message.content))
          list.push(JSON.parse(message.content))
          that.setData({
            dishList:list
          })
         },
         onSuccess: function () {
             console.log("Channel订阅成功。");
         },
         onFailed: function (error) {
             console.log("Channel订阅失败, 错误编码：" + error.code + " 错误信息：" + error.content)
         }
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
 passDish:function(e){
  var fid= e.currentTarget.dataset.fid
  var oid= e.currentTarget.dataset.oid
  var index=e.currentTarget.dataset.index
  console.log(index)
  console.log(e)
this.setData({
  fid:fid,
  oid:oid,
  index:index
})
this.showModal()
  
  },
  confirm:function(){

 var oid = this.data.oid
 var fid=this.data.fid
  wx.cloud.callFunction({
    name:'httpApi',
    data: {
    url:'http://47.108.225.54:8082/waiter/take_food/update',
    method:'GET',
    fData:{
      order_id:oid,
      food_id:fid
    }
   }
   }).then(res=>{
     console.log(res)
  var that =this
  var list=that.data.dishList;
  var index=that.data.index
  console.log(index)
  list.splice(index,1)
  that.setData({
    dishList: list
  })
  that.hideModal()
   })

  },
  showModal:function(e) {  
    this.setData({
      modalName:"DialogModal1"
    })
  },
  hideModal:function(e) {
    this.setData({
      modalName: null
    })
  }
})