// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//引入request-promise
var rp = require('request-promise');

// 云函数入口函数
exports.main = async(event, context) => {

  return rp(`https://api.douban.com/v2/movie/in_theaters?start=${event.start}&count=${event.count}`)
    .then(function(res) {
      return res
    })
    .catch(function(err) {
      console.err(err)
    });
}