const express = require('express')
const pool = require('../pool.js')

var router = express.Router()
//登录
router.post('/login',function(req,res){
	pool.query('select uid,uname from users where uname=? and upwd=?',[req.body.uname,req.body.upwd],function(err,re){
		if(err){
			res.send({code:500,msg:'服务器错误'})
		}else if(re.length>0){
			res.send({code:200,msg:re})
		}else{
			res.send({code:300,msg:'用户名或密码错误'})
		}
	} )
})

// *****************************************************

//查询用户信息
router.post('/users',function(req,res){
	pool.query('select uid,tel,uname,upwd,sex,email,aboutme from users where uid=?',[req.body.uid],function(err,re){
		if(err){
			res.send({code:500,msg:'服务器错误'})
		}else{
			res.send({code:200,msg:re})
		}
	})
})
//查询时间轴
router.post('/times',function(req,res){
	pool.query('select tid,content,send_time from times where t_uid=?',[req.body.t_uid],function(err,re){
		if(err){
			res.send({code:500,msg:'服务器错误'})
		}else{
			res.send({code:200,msg:re})
		}
	})
})
//查询文章列表
router.post('/article',function(req,res){
	pool.query('select aid,title,content,read_count,send_time from article where a_uid=?',[req.body.a_uid],function(err,re){
		if(err){
			res.send({code:500,msg:'服务器错误'})
		}else{
			res.send({code:200,msg:re})
		}
	})
})
//查询相册
router.post('/photo',function(req,res){
	pool.query('select pid,img_src,read_count,send_time from photo where p_uid=?',[req.body.p_uid],function(err,re){
		if(err){
			res.send({code:500,msg:'服务器错误'})
			console.log(err)
		}else{
			res.send({code:200,msg:re})
		}
	})
})

// *****************************************************

//修改用户信息
router.post('/data_users',function(req,res){
	pool.query('update users set upwd=?,sex=?,aboutme=? where uid=?;',[req.body.upwd,req.body.sex,req.body.aboutme,req.body.uid],function(err,re){
		if(err){
			res.send({code:500,msg:'服务器异常'})
		}else{
			res.send({code:200,msg:'修改成功'})
		}
	})
})
//修改时间轴
router.post('/data_times',function(req,res){
	pool.query('update times set content=? where tid=?;',[req.body.content,req.body.tid],function(err,re){
		if(err){
			res.send({code:500,msg:'服务器异常'})
		}else{
			res.send({code:200,msg:'修改成功'})	
		}
	})
})
//修改文章列表
router.post('/data_article',function(req,res){
	res.send('data_article'+req.body.aid)
})
//修改相册
router.post('/data_photo',function(req,res){
	res.send('data_photo'+req.body.pid)
})

// *****************************************************

//删除时光轴
router.post('/delete_times',function(req,res){
	pool.query('delete from times where tid=?;',[req.body.tid],function(err,re){
		if(err){
			res.send({code:500,msg:'服务器异常'})
		}else{
			res.send({code:200,msg:'删除成功'})			
		}
	})
})
//删除文章列表
router.post('/delete_article',function(req,res){
	pool.query('delete from article where aid=?;',[req.body.aid],function(err,re){
		if(err){
			res.send({code:500,msg:'服务器异常'})
		}else{
			res.send({code:200,msg:'删除成功'})			
		}
	})
})
//删除相册
router.post('/delete_photo',function(req,res){
	res.send(req.body)
})

module.exports = router