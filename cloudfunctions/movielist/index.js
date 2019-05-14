// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//引入request-promise
var rp = require('request-promise');

// 云函数入口函数
exports.main = async(event, context) => {

  return rp('http://www.google.com')
    .then(function(htmlString) {
      // Process html...
    })
    .catch(function(err) {
      // Crawling failed...
    });
}