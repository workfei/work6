<<<<<<< HEAD
const http = require('http');
const app =http.createServer();
var data = [{
    name:'刘涛'
}]
app.on('request',(req,res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    });
    res.end(data[0].name)
})
app.listen(8088);//监听电脑的8088端口
=======
// 导入系统模块
const http = require('http');
const url = require('url');  //导入url路径模块
// 根据http模块创建web服务器
const app = http.createServer();
let name = '毕文逸';
app.on('request',(req,res) => {
    res.writeHead(200,{
        'Content-Type': 'text/html;charset=utf8'  //防止乱码
    })
    res.end(name);
})
app.listen(8088); //接口为8088
>>>>>>> f628242 (上传作业)
