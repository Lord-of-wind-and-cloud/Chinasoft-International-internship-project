// page/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data:{
    loginBtnTxt:'登录',//登录按钮上的文字
    loginBtnBgBgColor:"#ff9900",//初始时背景颜色，点击后变为灰色
    btnLoading:false,//控制登录按钮点击后是否显示loading效果
    disabled:false//登录中，按钮不能点击
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var goeasy =app.globalData.goEasy
    // 建立连接
  goeasy.connect({
 
      onSuccess: function () {  //连接成功
        console.log("GoEasy connect successfully.") //连接成功
      },
      onFailed: function (error) { //连接失败
        console.log("Failed to connect GoEasy, code:"+error.code+ ",error:"+error.content);
      },
      onProgress:function(attempts) { //连接或自动重连中
        console.log("GoEasy is connecting", attempts);
      }
  });





//   var pubsub = goeasy.pubsub;
// pubsub.publish({
//     channel: "my_channel",//替换为您自己的channel
//     message: "Hello GoEasy!",//替换为您想要发送的消息内容
//     onSuccess:function(){
//         console.log("消息发布成功。");
//     },
//     onFailed: function (error) {
//         console.log("消息发送失败，错误编码："+error.code+" 错误信息："+error.content);
//     }
// });


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

  formSubmit:function(e){
    var that=this
    console.log(e.detail.value);
      wx.cloud.callFunction({
        name:'httpApi',
        data: {
        url:'http://47.108.225.54:8081/user/index',
        method:'POST',
        fData:{
          email:e.detail.value.username,
          password:e.detail.value.password
        },
        }
       }).then(res=>{
      console.log(res);
      console.log("done");
      console.log(res.result)
     console.log( typeof(res.result))
    var json= JSON.parse(res.result)
      if(json.code==1){
        app.globalData.user=json.data;
        console.log(app.globalData.user)
        that.setData({
          user:json.data
        })
        console.log(that.data.user)
      if(that.data.user.role==1) {
        wx.redirectTo({
          url: '/page/manager/manager'
        })
      }
      else if(that.data.user.role==2) {
        wx.redirectTo({
          url: '/page/waiter/waiter'
        })
      }
      else if(that.data.user.role==3){
      wx.redirectTo({
        url: '/page/cook/cook'
      })
    }
  }else{
    var msg
    if(json.msg=='1') msg="用户不存在"
    else if(json.msg=='2') msg="密码错误"
    wx.showToast({
      icon:"none",
      title:msg ,
    })
  }
      })
  }
})