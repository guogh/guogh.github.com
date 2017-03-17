---
layout: default
title: Ubuntu下配置samba实现文件夹共享
description: 这里的description是自定义属性。
categories: [web-build , jekyll, liquid]
tags: [github-page, jekyll, liquid]
---

####一. samba的安装:
```
1 sudo apt-get install samba
2 sudo apt-get install smbfs
```

####二. 创建共享目录:
```
1 mkdir /home/xiaohua/share      //xiaohua为用户主目录
2 sudo chmod 777 /home/xiaohua/share
```
####三. 创建Samba配置文件:

#####1. 保存现有的配置文件
```
1 sudo cp /etc/samba/smb.conf  /etc/samba/smb.conf.bak
```
#####2. 修改现配置文件
```
sudo gedit /etc/samba/smb.conf
```
然后在smb.conf最后添加
```
[share]
      path = /home/xiaohua/share  //记得修改用户主目录
      available = yes
      browsealbe = yes
      public = yes
      writable = yes
```
####四. 创建samba帐户
```
1   sudo touch /etc/samba/smbpasswd
2   sudo smbpasswd -a xiaohua
```
然后会要求你输入samba帐户的密码

 ［如果没有第四步，当你登录时会提示 session setup failed:NT_STATUS_LOGON_FAILURE］

####五. 重启samba服务器
```
1 sudo service smbd restart
```
####六. 测试
```
smbclient -L //localhost/share
```
####七.使用

可以到windows下输入ip使用了，在文件夹处输入 "\\" + "Ubuntu机器的ip或主机名" + "\\" + "share"