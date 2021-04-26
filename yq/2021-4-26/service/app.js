const http = require("http")
const url = require("url")

// 根据http模块创建web服务器
const app = http.createServer()
// 客户请求
app.on("request", (req,res) => {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf8"
    })
    res.end("杨前")
    let {query} = url.parse(req.url, true)
    console.log(query);
})
app.listen(8088)
