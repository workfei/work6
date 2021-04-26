//导入系统模块
const http = require('http')

//根据http模块创建web服务器
const app = http.createServer();

var data = [{
    name: '刘志林',
    pwd: '123456'
},{
    name: '海波',
    pwd: '123456'
}]

//客户请求
app.on('request',(req,res) => {
    // req:客户端的请求信息: user
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })
    res.end(data[0].name)
})
app.listen(8081) //监听电脑的8081端口