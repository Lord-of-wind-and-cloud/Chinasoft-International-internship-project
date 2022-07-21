// 云函数入口文件
const cloud = require('wx-server-sdk')
var request = require('request')
cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
//   var url = event.url
//   return new Promise((resolve, reject) => {
//     request.post(url, (error, response, body) => {
//       console.log("进入")
//       if (error) {
//         console.log("第一个错误捕获")
//         console.log(error)
//         reject()
//       } else {
//         console.log("小成功")
//         try {
//           console.log("成功")
//           console.log(body)
//         resolve(body)
//         } catch (e) {
//           console.log("第2个错误捕获")
//           console.log(e)
//           reject()
//         }
//       }
//     })
//   })

//   var options = {
//     'method': 'GET',
//     'url': '/user/index',
//     'headers': {
//        'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)'
//     },
//     formData: {
//        'user_id': '123456',
//        'password': 'ZXCVBN'
//     }
//  };
//  try{
//  request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
//     return response.body;
//  })

//  }catch(e){
//    console.log(e)
//  }
// ;


var url = event.url
var data = event.data
var method=event.method
console.log(data)
// request({
//     url: url,
//     method:method,
//     json: true,
//     headers: {
//         "content-type": "application/json",
//     },
//     body: JSON.stringify(data)
// }, function(error, response, body) {
//    console.log("请求完毕")
//     if (!error && response.statusCode == 200) {
//        try{
//           console.log(body)
//           return body
//        }catch(e){
//           console.log("发生错误")
//        }
//     }else{
//        console.log("发生异常")
//        console.log(error)
//     }
    
// }); 
const options = {
   method: method,
   url: url,
   json: true,
   headers: {
      "content-type": "application/json",
  },
   body:data
};

return new Promise((resolve,reject)=>{

   request(options, function (err, res, body) {

       try{

           resolve(body)

       }catch(err){

           reject(err)

       }

   })

})







}