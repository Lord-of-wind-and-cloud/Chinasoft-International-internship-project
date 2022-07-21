// page/billList/billList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList:[{
      "messageId": 1,
      "orderId": 40,
      "title": "做步节常",
      "content": "in laboris",
      "createTime": "2012-11-03 08:05:16",
      "sendUser": 22,
      "receiveUser": 17,
      "status": 1,
      "senderName": "石整发属你权都"
    }

  ],
  status : ['未读','已读'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this
    wx.cloud.callFunction({
      name:'httpApi',
      data: {
      url:'http://47.108.225.54:8082/waiter/message',
      method:'GET',
      fData:{
        receive_user:app.globalData.user.userId
      }
      }
     }).then(res=>{
       console.log(res)
       var json = JSON.parse(res.result)
       console.log(json.data)
       console.log(json.data.messages)
       
          that.setData({
            messageList:json.data.messages
          })

          console.log(that.data.messages)
     })


   var channel = ''+app.globalData.user.userId
		var goeasy =app.globalData.goEasy
		var pubsub = goeasy.pubsub;
		pubsub.subscribe({
				channel:channel+"message",//替换为您自己的channel
				onMessage: function (message) {
            console.log("Channel:" + message.channel + " content:" + message.content);
           var list= that.data.messageList
           console.log( typeof (message))
           console.log( typeof (message.content))
           list.push(JSON.parse(message.content))
           that.setData({
             messageList:list
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
    var that =this
    wx.cloud.callFunction({
      name:'httpApi',
      data: {
      url:'http://47.108.225.54:8082/waiter/message',
      method:'GET',
      fData:{
        receive_user:app.globalData.user.userId
      }
      }
     }).then(res=>{
       console.log(res)
       var json = JSON.parse(res.result)
       console.log(json.data)
       console.log(json.data.messages)
       
          that.setData({
            messageList:json.data.messages
          })

         
     })


   var channel = ''+app.globalData.user.userId
		var goeasy =app.globalData.goEasy
		var pubsub = goeasy.pubsub;
		pubsub.subscribe({
				channel:channel+"message",//替换为您自己的channel
				onMessage: function (message) {
            console.log("Channel:" + message.channel + " content:" + message.content);
           var list= that.data.messageList
           console.log( typeof (message))
           console.log( typeof (message.content))
           list.push(JSON.parse(message.content))
           that.setData({
             messageList:list
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
  app.globalData.curMessage=e.currentTarget.dataset.id
  wx.navigateTo({
    url: '/page/message/serverMessage',
  })
},
searchInput:function(e){
this.setData({
 sId:parseInt(e.detail.value)
})
}
})
// search:function(){
//   var key=0
//   for(let i in this.data.billList){
//     if(this.data.billList[i].orderId==this.data.sId) {
//       app.globalData.curOrder=this.data.billList[i].orderId
//       key=1
//       wx.navigateTo({
//             url: '/page/bill/bill',
//       })
//     } 
//   } 
//   if(key==0)
//   wx.showToast({
//         title: '未查询到订单',
//         icon:'none'
//       })
// }
// })