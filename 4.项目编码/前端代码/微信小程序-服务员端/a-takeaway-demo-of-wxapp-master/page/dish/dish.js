// page/dish/dish.js
const app= getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
      image:"",
        dishId:2,
        sold:0,
        dishName:"菜品名称",
        classify:["主菜","小吃","饮料"],
        index: 0,
        introduction:"这里应该显示这个菜品的简介",
        available:true,
        recommend:["不推荐","推荐"],
        rIndex:1,
        price:18
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // console.log(options)
      // this.setData({dishId:parseInt(this.options.foodId)})
      // console.log(typeof(this.data.dishId))
      // var that=this
      // wx.cloud.callFunction({
      //   name:"httpApi",
      //   data:{
      //     url:"http://47.108.225.54:8081/food/select_by_id",
      //     method:"GET",
      //     fdata:{
      //       id:parseInt(this.options.foodId)
      //     }	
      //   }
      // }).then(res=>{
      //   console.log(res);
      //   var json=JSON.parse(res.result);
      //   console.log(json);
        this.setData({
          dishId:app.globalData.food.foodId,
          image:app.globalData.food.image,
        dishName:app.globalData.food.foodName,
        // classify:app.globalData.food.category,
         index:app.globalData.food.category-1 ,
        introduction:app.globalData.food.description,
        // available:json.data.data.is_available,
        // recommend:["不推荐","推荐"],
        // rIndex:1,
        price:app.globalData.food.price
        })
      // })
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
    confirm:function (e) {
        wx.navigateBack({
          delta: 0,
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
        console.log(this.data)
        wx.cloud.callFunction({
            name:"httpApi",
            data:{
              url:"http://47.108.225.54:8081/food/edit",
              method:"POST",
              fdata:{
                foodId:this.data.dishId,
                foodName:this.data.dishName,
                price:parseFloat(this.data.price),
                description:this.data.introduction,
              }	
            }
          }).then(res=>{
            console.log(res)
            var fdata={
              foodId:this.data.dishId,
              foodName:this.data.dishName,
              price:parseFloat(this.data.price),
              description:this.data.introduction,
            }	
            console.log(fdata)
          })
    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
      },
      DishChange:function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          rIndex: e.detail.value
        })
      },
      dishId:function(e){
        this.setData({
          dishId:e.detail.value
        })
      },
    dishName:function(e){
      this.setData({
        dishName:e.detail.value
      })
    },
    introduction:function(e){
      this.setData({
        introduction:e.detail.value
      })
    },
    price:function(e){
      this.setData({
        price:e.detail.value
      })
    }
})