set names utf8;

drop database if exists blog;

create database blog charset = utf8;

use  blog;

#用户表
create table users(
	uid int primary key auto_increment,
	uname varchar(20) not null unique,  	#用户名
	upwd varchar(20) not null,  			#密码
	sex varchar(5) default '保密',			#性别(男 女 保密)
	tel int not null unique,				#手机号
	email varchar(20) not null unique,		#邮箱
	aboutme varchar(5000) default '这个人很懒什么都没留下',								#关于我
	set_time timestamp						#创建时间
);

insert into users values(1,'admin','admin',default,'12345678','1225835221@qq.com',default,null);
insert into users values(null,'asd','asd',default,'1234567','6',default,null);
insert into users values(null,'a1','123456',default,'123456','1',default,null);
insert into users values(null,'a2','123456',default,'12345','2',default,null);
insert into users values(null,'a3','123456',default,'1234','3',default,null);
insert into users values(null,'a4','123456',default,'123','4',default,null);
insert into users values(null,'a5','123456',default,'12','5',default,null);

#文章列表
create table article(
	aid int primary key auto_increment,
	title varchar(200) not null,			#标题
	img_src varchar(100),					#配图
	content text not null, 					#内容
	read_count int,							#阅读量
	a_uid int,								#关联用户
	send_time timestamp 					
);

insert into article values(null,'时光飞逝，机会就在我们眼前1','./img/f.jpg','何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会',900,1,null);
insert into article values(null,'时光飞逝，机会就在我们眼前2','./img/f.jpg','何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会',900,1,null);
insert into article values(null,'时光飞逝，机会就在我们眼前3','./img/f.jpg','何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会',900,1,null);
insert into article values(null,'时光飞逝，机会就在我们眼前4','./img/f.jpg','何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会',900,1,null);
insert into article values(null,'时光飞逝，机会就在我们眼前5','./img/f.jpg','何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会',900,1,null);
insert into article values(null,'时光飞逝，机会就在我们眼前6','./img/f.jpg','何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会',900,1,null);
insert into article values(null,'时光飞逝，机会就在我们眼前7','./img/f.jpg','何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会',900,1,null);
insert into article values(null,'时光飞逝，机会就在我们眼前8','./img/f.jpg','何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会',900,1,null);
insert into article values(null,'时光飞逝，机会就在我们眼前9','./img/f.jpg','何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会',900,1,null);
insert into article values(null,'时光飞逝，机会就在我们眼前10','./img/f.jpg','何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会',900,1,null);

#个人相册
create table photo(
	pid int primary key auto_increment,
	img_name varchar(100),					#图片名称
	img_src varchar(100), 					#图片路径
	read_count int,							#阅读量
	p_uid int,								#关联用户
	send_time timestamp
);
insert into photo values(null,'web学习心得','./img/banner01.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/banner02.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/banner03.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/toppic02.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/toppic02.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/a.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/b.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/e.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/d.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/e.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/f.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/banner01.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/banner02.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/banner03.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/toppic02.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/toppic02.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/a.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/b.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/e.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/d.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/e.jpg','0','1',null);
insert into photo values(null,'web学习心得','./img/f.jpg','0','1',null);

#时光轴
create table times(
	tid int primary key auto_increment,
	content varchar(100),
	t_uid int,								#关联用户
	send_time timestamp
);

insert into times values(null,'时光飞逝，机会就在我们眼前',1,null);
insert into times values(null,'何时找到了灵感，就要把握机遇',1,null);
insert into times values(null,'我们需要智慧和勇气去把握机会',1,null);
insert into times values(null,'时光飞逝，机会就在我们眼前',1,null);
insert into times values(null,'何时找到了灵感，就要把握机遇',1,null);
insert into times values(null,'我们需要智慧和勇气去把握机会',1,null);
insert into times values(null,'时光飞逝，机会就在我们眼前',1,null);
insert into times values(null,'何时找到了灵感，就要把握机遇',1,null);
insert into times values(null,'我们需要智慧和勇气去把握机会',1,null);
insert into times values(null,'时光飞逝，机会就在我们眼前',1,null);
insert into times values(null,'何时找到了灵感，就要把握机遇',1,null);
insert into times values(null,'我们需要智慧和勇气去把握机会',1,null);

#留言板
create table liuyan(
	lid int primary key auto_increment,
	user_name varchar(50) default '游客',
	content varchar(100),
	send_time timestamp
);


insert into liuyan values(null,'安逸','我们需要智慧和勇气去把握机会',null);
insert into liuyan values(null,'张仪兴','写的很好，长得很帅',null);
insert into liuyan values(null,'武亦凡','楼上说的对',null);
insert into liuyan values(null,'蔡徐琨','楼上说的对',null);
