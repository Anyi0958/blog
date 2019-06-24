const express = require('express')
const router = express.Router()
const pool = require('../pool.js')

//验证用户名是否占用
router.post('/uname',function(req,res){
	pool.query('select uid from users where uname=?',[req.body.uname],function(err,re){
		if(err){
			res.send({code:500,msg:'*服务器异常'})
		}else if(re.length>0){
			res.send({code:300,msg:'*用户名已被注册'})
		}else{
			res.send({code:200,msg:'*可以使用'})
		}
	})
})

//验证手机号是否占用
router.post('/tel',function(req,res){
	pool.query('select uid from users where tel=?',[req.body.tel],function(err,re){
		if(err){
			res.send({code:500,msg:'*服务器异常'})
		}else if(re.length>0){
			res.send({code:300,msg:'*手机号已被注册'})
		}else{
			res.send({code:200,msg:'*可以使用'})
		}
	})
})

// 用户登录
router.post('/login',function(req,res){
	pool.query('select * from users where uname=? and upwd=?;',[req.body.uname,req.body.upwd],function(err,re){
		if(err){
			res.send({code:500,msg:'err'})
		}else if(re.length>0){
			res.send({code:200,msg:'用户：'+req.body.uname+'登录成功'})
		}else{
			res.send({code:301,msg:'用户名或密码错误'})
		}
	})
	
})

//用户注册
router.post('/register',function(req,res){
	pool.query('insert into users values(null,?,?,?,?,?,default,null);',[req.body.uname,req.body.upwd,req.body.sex,req.body.tel,req.body.email],function(err,re){
		if(err){
			res.send({code:500,msg:'注册失败'})
		}else{
			res.send({code:200,msg:'注册成功'})
		}
	})
})


module.exports = router