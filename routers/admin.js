const express = require('express');
const router = express.Router();
const pool = require('../pool.js');

router.post('/admin',function(req,res){
    if(req.body.uname=='admin'&&req.body.upwd=='admin'){return res.send({code:200,msg:'登录成功'})}
    res.send({code:300,msg:'用户名或密码错误'})
})

router.post('/index',function(req,res){
    pool.query('select * from users;',function(req,re){
        res.send(re)
    })
})

module.exports = router;