const mysql = require('mysql')

const pool = mysql.createPool({
	local:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'blog'
}) 

module.exports = pool