const express = require('express')
const bodyparser = require('body-parser')

const userroute = require('./routers/user.js')
const dataroute = require('./routers/data.js')
const indexroute = require('./routers/index.js')
const adminroute = require('./routers/admin.js')

const server = express()
server.listen(8888)

server.use(bodyparser.urlencoded({
	extended:false
}))

// 导入静态文件
server.use(express.static('./public'))

// 导入路由器
server.use('/user',userroute)
server.use('/data',dataroute)

server.use('/index',indexroute)
server.use('/admin',adminroute)