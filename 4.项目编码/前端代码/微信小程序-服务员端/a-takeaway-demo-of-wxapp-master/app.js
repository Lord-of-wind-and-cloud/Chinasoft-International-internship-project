// var server = require('./utils/server');
import GoEasy from './utils/goeasy-2.2.7.min';
// var GoEasy = require('./utils/goeasy-1.0.11');
App({
	onLaunch: function () {
		console.log('App Launch')
		wx.cloud.init({
      env:"cloud1-6gqfwca6ea734cf6"
		})
		
		// wx.connectSocket({
    //   url: 'ws://47.108.225.54:8085/test',
    // })
    // wx.onSocketOpen((result) => {
    //   console.log(result);
    //   console.log("连接已打开");
    //   wx.sendSocketMessage({
    //     data: JSON.stringify("hello server"),
    //     success: (res) => {},
    //     fail: (res) => {},
    //     complete: (res) => {},
		//   });})
		

		// var self = this;
		// var rd_session = wx.getStorageSync('rd_session');
		// console.log('rd_session', rd_session)
		// if (!rd_session) {
		// 	self.login();
		// } else {
		// 	wx.checkSession({
		// 		success: function () {
		// 			// 登录态未过期
		// 			console.log('登录态未过期')
		// 			self.rd_session = rd_session;
		// 			self.getUserInfo();
		// 		},
		// 		fail: function () {
		// 			//登录态过期
		// 			self.login();
		// 		}
		// 	})
		// }
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	globalData: {
		status:0,
		goEasy: GoEasy.getInstance({
			host:"hangzhou.goeasy.io",  //若是新加坡区域：singapore.goeasy.io
			appkey:"BC-39a32d080309433cad62d463a4eea5a0",
			modules:['pubsub']//根据需要，传入‘pubsub’或'im’，或数组方式同时传入
	})
	},
	// rd_session: null,
	// login: function() {
	// 	var self = this;
	// 	wx.login({
	// 		success: function (res) {
	// 			console.log('wx.login', res)
	// 			server.getJSON('/WxAppApi/setUserSessionKey', {code: res.code}, function (res) {
	// 				console.log('setUserSessionKey', res)
	// 				self.rd_session = res.data.data.rd_session;
	// 				self.globalData.hasLogin = true;
	// 				wx.setStorageSync('rd_session', self.rd_session);
	// 				self.getUserInfo();
	// 			});
	// 		}
	// 	});
	// },
	// getUserInfo: function() {
	// 	var self = this;
	// 	wx.getUserInfo({
	// 		success: function(res) {
	// 			console.log('getUserInfo', res)
	// 			self.globalData.userInfo = res.userInfo;
	// 			server.getJSON('/WxAppApi/checkSignature', {
	// 				rd_session: self.rd_session,
	// 				result: res
	// 			}, function (res) {
	// 				console.log('checkSignature', res)
	// 				if (res.data.errorcode) {
	// 					// TODO:验证有误处理
	// 				}
	// 			});
	// 		}
	// 	});
	// }
})
