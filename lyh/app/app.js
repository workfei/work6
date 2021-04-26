const http = require('http');
const app = http.createServer();

app.on('request', (req,res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf8'
    })

    res.end('李永恒');
})

app.listen('8088');
console.log('ok');