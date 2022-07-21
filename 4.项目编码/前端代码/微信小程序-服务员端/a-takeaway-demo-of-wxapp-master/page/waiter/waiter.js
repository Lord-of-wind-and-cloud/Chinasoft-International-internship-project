// page/waiter/waiter.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    elements: [{
      title: '布局',
      name: 'layout',
      color: 'cyan',
      icon: 'newsfill'
    },
    {
      title: '背景',
      name: 'background',
      color: 'blue',
      icon: 'colorlens'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this	
    this.setData({
      user:app.globalData.user
    })
    var channel = ''+app.globalData.user.userId
		var goeasy =app.globalData.goEasy
		var pubsub = goeasy.pubsub;
		pubsub.subscribe({
				channel:[ channel+"message", channel+"notice"],//替换为您自己的channel
				onMessage: function (message) {
						console.log("Channel:" + message.channel + " content:" + message.content);
				},
				onSuccess: function () {
						console.log("Channel订阅成功。");
				},
				onFailed: function (error) {
						console.log("Channel订阅失败, 错误编码：" + error.code + " 错误信息：" + error.content)
				}
    });
    
 
	// 	wx.cloud.callFunction({
	// 		name:'http',
	// 		data: {
	// 		url:'http://127.0.0.1:4523/mock/661561/user/index',
	// 		data:{
	// 			user_id:app.globalData.user.id
	// 		}
	// 		}
	// 	 }).then(res=>{
	// that.setData({
	// 		user: res.data
	// 	});
	// 	app.globalData.user=res.data

	// 	 })
		
	
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
    wx.hideHomeButton()
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
  billList:function(){
    wx.navigateTo({
      url: '/page/billList/billList',
    })
  },
  dishPass:function(){
    wx.navigateTo({
      url: '/page/passDish/passDish',
    })
  },
  order:function(){
    wx.navigateTo ({
			url: '/page/order/order',
		})
  },
  serverMessage:function(){
    wx.navigateTo({
		
			url: '/page/cookNews/cookNews',
		})
  },	
  notice:function(){
    wx.navigateTo({
      url: '/page/noticeList/noticeList',
    })
  },
  scan:function(){
		
    wx.scanCode({
     success:(res) => {
      //  解析参数
			var arr  = res.result.split('&');
			var obj1 ={};
			var obj2 ={};
			for(var i=0;i<arr.length;i++){
				var	newArr = arr[i].split('=');
					for(var j=0;j<newArr.length;j++){
							if(i==0&&j==0){
									if(newArr[0]=='id'){
											obj1.id= newArr[1] 
									}else {
											obj2.old= newArr[1] 
									}
							}
							if(i==1&&j==1){
									if(newArr[0]=='url'){
										 
											obj1.url= newArr[1] 
									}else {
											obj2.id= newArr[1] 
									}
								 
							}
					}
			}
			var obj = Object.assign(obj1, obj2);
       console.log(obj) 
     var url = obj.url
		 app.globalData.tableId=parseInt(obj.id)
    //  跳转页面
        wx.navigateTo({
        url:url,
      })
     }
    })

  },
  donghua(){
    var that = this;
    // 控制向上还是向下移动
    let m = true 
    setInterval(function () {
      if (m) {
        animation.translateY(250).step({ duration: 3000 })
        m = !m;
      } else {
        animation.translateY(-10).step({ duration: 3000 })
        m = !m;
      }
  
      that.setData({
        animation: animation.export()
      })
    }.bind(this), 3000)
  },
  scancode(e){
    // 提示音
    innerAudioContext.play()
    // 校验扫描结果，并处理
		let res = e.detail.result
		console.log(res)
  },
  test:function(){
      var goeasy=app.globalData.goEasy
      var pubsub = goeasy.pubsub
pubsub.publish({
    channel: "",//替换为您自己的channel
    message: "Hello GoEasy!",//替换为您想要发送的消息内容
    onSuccess:function(){
        console.log("消息发布成功。");
    },
    onFailed: function (error) {
        console.log("消息发送失败，错误编码："+error.code+" 错误信息："+error.content);
    }
});
  }
})