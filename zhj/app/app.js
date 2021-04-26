//导入系统模块
const http = require('http')
const url = require('url') //导入url路径模块

//根据http模块创建web服务器
const app = http.createServer();

//客户请求
app.on('request', (req,res) => {
    //req:客户端的请求信息： user
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })
    // res.end(data[0].name)
    let {query} = url.parse(req.url, true)
    console.log(query);
    if(query.name == '/' || query.name == 'index') {
        res.end('曾豪杰')
    }
})
app.listen(8088) //监听电脑的8088端口
console.log('监听ok...');