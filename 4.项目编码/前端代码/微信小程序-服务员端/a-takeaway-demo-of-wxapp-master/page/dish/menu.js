// page/dish/menu.js
const app= getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dishList:[
            {
                foodId:1,
               image:"",
               foodName:" 菜品名称",
               category:"菜品种类",
               price:"18"
            //    recommend:true
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.cloud.callFunction({
			name:"httpApi",
			data:{
				url:"http://47.108.225.54:8082/waiter/food",
				method:"GET",
				fdata:{
				}	
			}
		}).then(res=>{
			console.log(res);
			var json=JSON.parse(res.result);
			console.log(json.data);
			this.setData({
				dishList:json.data
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

    /**
     * 点击跳转到菜品详情
     */
    },
    dishDetail:function (e) {
        app.globalData.food=e.currentTarget.dataset.food
        console.log(e)
        console.log(e.currentTarget.dataset.food)
        wx.navigateTo({
          url: '/page/dish/dish',
        })
    }
})
