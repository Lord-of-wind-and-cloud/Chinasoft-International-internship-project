var API_URL = 'http://r80d0afyu.hn-bkt.clouddn.com/#/'
// 云函数入口文件
const cloud = require('wx-server-sdk')
var request = require('request')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  var url = event.url
var formData = event.fData;
var method= event.method;
console.log(method)
return new Promise((resolve,reject)=>{
//  if(method=="POST"){
request.post({url:url, formData: formData}, function (error, response, body) {  
  try{

    resolve(body)

}catch(err){

    reject(err)

}
})
//}else if(method =="GET"){
//   request.get({url:url, formData: formData}, function (error, response, body) {  
//     try{
  
//       resolve(body)
  
//   }catch(err){
  
//       reject(err)
  
//   }
//   })
// }
})
}
