var BaiduAi = require('./baiduAI3');
var qs = require('querystring');
var fs = require('fs');
// var PicApi = function (callback) {
//     var contents = qs.stringify({
//         image:base64str,
//         image_type:'BASE64',
//         face_field:'landmark'
//     })
//     BaiduAi(contents,function (err,data) {
//         var PicData = JSON.parse(data).result.face_list[0].landmark72
//         console.log((PicData))
//     })
// }


//读取图片信息


var BaiduSearch = function(filename,groupid,callback){
    var bitmap = fs.readFileSync('./public/uploads/'+filename);
    var base64str = new Buffer(bitmap).toString('base64');
    var contents = qs.stringify({
        image:base64str,
        image_type:'BASE64',
        group_id_list:groupid,
        max_face_num:5
    });
    BaiduAi(contents,function (err,data) {
        // if (JSON.parse(data).error_code !== 0){
        //     return  callback(err)
        // }
        // console.log(data)
        // var PicData = JSON.parse(data).result.face_list[0].landmark72
        // callback(null,PicData)
        // if (JSON.parse(data).error_code !== 0){
        //     return callback(err)
        // }
        var PicData = JSON.parse(data);
        //.result.face_list[0].landmark72
        callback(null,PicData)
    })
};
module.exports = BaiduSearch;


