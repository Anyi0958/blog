const express = require('express');
const router = express.Router();
const pool = require('../pool.js');
const url = require('url');
//文章加载
router.post('/index',function(req,res) {
	var sql = 'select aid,title,img_src,content,read_count,send_time from article limit 9;';
	pool.query(sql,function(err,re){
		res.send(re)
	});
});

//阅读量+1
router.post('/a_count',function(req,res){
	pool.query('select read_count from article where aid=?',[req.body.aid],function(err,re){
		var count = re[0].read_count + 1;
		pool.query('update article set read_count=? where aid=?;',[count,req.body.aid],function(err,re){
			res.send({code:200,msg:'阅读量+1'})
		});
	});
});

//文章页
router.post('/aid_info',function(req,res){
	var aid = url.parse(req.body.href).query;
	aid = parseInt(aid.split('=')[1]);
	pool.query('select aid,title,content,read_count,send_time from article where aid=?;',aid,function(err,re){
		pool.query('select aid,title from article where aid=?;',aid-1,function(err,re1){
			if(re1.length==0){
				var re1=[{title:'没有啦',aid:aid}]
				pool.query('select aid,title from article where aid=?;',aid+1,function(err,re2){
					res.send([re,re1,re2])
				})
				return ''
			}
			pool.query('select aid,title from article where aid=?;',aid+1,function(err,re2){
				if(re2.length==0){
					var re2=[{title:'没有啦',aid:aid}]
				}
				res.send([re,re1,re2])
			})
		})
	});
});

//相册加载
router.post('/photo',function(req,res){

	pool.query('select img_name,img_src from photo where p_uid=? limit ?,8;',[req.body.p_uid,(req.body.page-1)*8],function(err,re){
		res.send(re)
	})
})

//时光轴加载
router.post('/times',function(req,res){
	pool.query('select content,send_time from times where t_uid=?;',[req.body.t_uid],function(err,re){
		res.send(re)
	})
})

//留言板加载
router.post('/liuyan', function(req,res){
	pool.query('select user_name,content,send_time from liuyan',function(err,re){
		res.send(re)
	})
})

//获取留言
router.post('/get_liuyan', function(req,res){
	console.log(req.body)
	pool.query('insert into liuyan(content) values(?);',[req.body.content],function(err,re){
		res.send('ok')
		console.log(re)
	})
})

module.exports = router;