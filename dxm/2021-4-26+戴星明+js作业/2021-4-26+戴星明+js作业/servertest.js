//导入系统模块
const http = require('http');
const url = require('url');  //导入url路径模块
//根据http模块创建web服务器
const app = http.createServer();

//定义对象存储信息
var data = [{
    name: "戴星明",
    age: 20,
    sex: "男"
}]

//客户请求
app.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })
    res.end(data[0].name);
})
app.listen(8088);  //定义监听电脑的端口号
console.log('本人的服务器已经监听成功...');