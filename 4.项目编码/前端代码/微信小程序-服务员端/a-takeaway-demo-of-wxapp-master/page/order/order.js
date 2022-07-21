var app = getApp();
Page({
	data: {
		serverId:8,
		tableId:0,
		guestNumber:1,
		memo:"",
		memoVisible:false, 
		goods: {
			1: {
				id: 1,
				name: '娃娃菜',
				pic: '/imgs/index/icon_14.jpg',
				sold: 1014,
				price: 2
			},
			2: {
				id: 2,
				name: '金针菇',
				pic: '/imgs/index/icon_14.jpg',
				sold: 1029,
				price: 3
			},
			3: {
				id: 3,
				name: '方便面',
				pic: '/imgs/index/icon_14.jpg',
				sold: 1030,
				price: 2
			},
			4: {
				id: 4,
				name: '粉丝',
				pic: '/imgs/index/icon_14.jpg',
				sold: 1059,
				price: 1
			},
			5: {
				id: 5,
				name: '生菜',
				pic: '/imgs/index/icon_14.jpg',
				sold: 1029,
				price: 2
			},
			6: {
				id: 6,
				name: '白菜',
				pic: '/imgs/index/icon_14.jpg',
				sold: 1064,
				price: 2
			},
			7: {
				id: 7,
				name: '杏鲍菇',
				pic: '/imgs/index/icon_14.jpg',
				sold: 814,
				price: 3
			},
			8: {
				id: 8,
				name: '香菇',
				pic: '/imgs/index/icon_14.jpg',
				sold: 124,
				price: 3
			},
			9: {
				id: 9,
				name: '猴头菇',
				pic: '/imgs/index/icon_14.jpg',
				sold: 102,
				price: 5
			}
		},
		goodsList: [
			{id: 'recommend',
			classifyName: '推荐',
			goods: [2,3,4,5]
			},
			{
				id: 'dish',
				classifyName: '主菜',
				goods: [1,2,3,4,5,6,7,8]
			},
			{
				id: 'snack',
				classifyName: '小吃',
				goods: []
			},
			{
				id: 'drink',
				classifyName: '饮料',
				goods: []
			}
		],
		boolean:true,
		cart: {
			count: 0,
			total: 0,
			list: {}
		},
		totalPrice:0,
		//传回订单中，相应菜品id和数目的数组
		orderViews:[],
		showCartDetail: false
	},
	onLoad: function (options) {
		this.setData({
			tableId:app.globalData.tableId,
			serverId:app.globalData.user.userId
		})
		wx.cloud.callFunction({
			name:"httpApi",
			data:{
				url:"http://47.108.225.54:8082/waiter/food",
				method:"GET",
				fdata:{
				}	
			}
		}).then(res=>{
			var json=JSON.parse(res.result);
			console.log(json.data)
			this.setData({
				goods:json.data
			})
			
			var goods1=[]
			var goods2=[]
			var goods3=[]
			var recommend=[]
			for(let i in json.data){
				var goods=this.data.goods	
				if(goods[i].category==1){
					goods1.push(parseInt(i))
				}
				else if(goods[i].category==2){
					goods2.push(parseInt(i))
				}
				else if(goods[i].category==3){
					goods3.push(parseInt(i))
				}
				if(goods[i].isLike==1){
					recommend.push(parseInt(i))
				}
			}
			this.setData({
				"goodsList[1].goods":goods1,
				"goodsList[2].goods":goods2,
				"goodsList[3].goods":goods3,
				"goodsList[0].goods":recommend,
				})
		})
	},
	onShow: function () {
		this.setData({
			classifySeleted: this.data.goodsList[0].id
		});

	},
	tapAddCart: function (e) {
		this.addCart(e.target.dataset.id);
	},
	tapReduceCart: function (e) {
		this.reduceCart(e.target.dataset.id);
	},
	addCart: function (id) {
		var num = this.data.cart.list[id] || 0;
		this.data.cart.list[id] = num + 1;
		this.countCart();
	},
	reduceCart: function (id) {
		var num = this.data.cart.list[id] || 0;
		if (num <= 1) {
			delete this.data.cart.list[id];
		} else {
			this.data.cart.list[id] = num - 1;
		}
		this.countCart();
	},
	countCart: function () {
		var count = 0,
			total = 0;
		for (var id in this.data.cart.list) {
			var goods = this.data.goods[id];
			count += this.data.cart.list[id];
			total += goods.price * this.data.cart.list[id];
		}
		this.setData({
			totalPrice:total
		})
		this.data.cart.count = count;
		this.data.cart.total = total;
		this.setData({
			cart: this.data.cart
		});
	},
	follow: function () {
		this.setData({
			followed: !this.data.followed
		});
	},
	onGoodsScroll: function (e) {
		if (e.detail.scrollTop > 10 && !this.data.scrollDown) {
			this.setData({
				scrollDown: true
			});
		} else if (e.detail.scrollTop < 10 && this.data.scrollDown) {
			this.setData({
				scrollDown: false
			});
		}

		var scale = e.detail.scrollWidth / 570,
			scrollTop = e.detail.scrollTop / scale,
			h = 0,
			classifySeleted,
			len = this.data.goodsList.length;
		this.data.goodsList.forEach(function (classify, i) {
			var _h = 70 + classify.goods.length * (46 * 3 + 20 * 2);
			if (scrollTop >= h - 100 / scale) {
				classifySeleted = classify.id;
			}
			h += _h;
		});
		// this.setData({
		// classifySeleted: classifySeleted
		// });	
		// console.log(this.data.classifySeleted)
	},
	tapClassify: function (e) {
		var id = e.target.dataset.id;
		this.setData({
			classifyViewed: id,
				classifySeleted:id,
		})
	},
	showCartDetail: function () {
		this.setData({
			showCartDetail: !this.data.showCartDetail
		});
	},
	hideCartDetail: function () {
		this.setData({
			showCartDetail: false
		});
	},
	submit: function (e) {
		this.data.orderViews.splice(0,this.data.orderViews.length)
		for (var id in this.data.cart.list) {
			var foodDetail1={
			foodId:this.data.goods[id].foodId,
			numFood:this.data.cart.list[id]
			}
			 this.data.orderViews.push(foodDetail1)
		}
		wx.cloud.callFunction({
			name:"http",
			data:{
				url:"http://47.108.225.54:8082/waiter/take_order",
				method:"POST",
				data:{
					userId:this.data.serverId,
					tableId:this.data.tableId,
					numPeople:this.data.guestNumber,
					memo:this.data.memo,
					totalPrice:this.data.totalPrice,
					orderViews:this.data.orderViews
					}
			}
		}).then(res=>{
			
		})
		wx.showModal({
			showCancel: false,
			title: '恭喜',
			content: '订单发送成功！',
			success:function(res){
				wx.navigateBack({
		  delta: 0,
		})
			}
		})
		

	},
	memo:function(){
		var visible=this.data.memoVisible
		this.setData({
			memoVisible:!visible
		})
	},
	guestAdd: function(e){
		var num = this.data.guestNumber
		num++;
		this.setData({
			guestNumber:num
		})
	},
	guestReduce:function(e){
		var num = this.data.guestNumber
		if(num>1){
		num--
		this.setData({
			guestNumber:num
			})
		}
	},
    serverAdd: function(e){
		var num = this.data.serverId
		num++;
		this.setData({
			serverId:num
		})
	},
		serverReduce:function(e){
		var num = this.data.serverId
		if(num>0){
		num--
		this.setData({
			serverId:num
			})
		}
	},
	tableAdd: function(e){
		var num = this.data.tableId
		num++;
		this.setData({
			tableId:num
		})
	},
	tableReduce:function(e){
		var num = this.data.tableId
		if(num>0){
		num--
		this.setData({
			tableId:num
			})
		}
	},

	memoInput:function(e){
		this.setData({
			memo:e.detail.value
		})
	},
	inputTId:function(e){
		this.setData({
		 tableId:e.detail.value
		})
	
	}
});

