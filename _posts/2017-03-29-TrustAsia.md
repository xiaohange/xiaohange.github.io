---
layout: post
title: 手把手教你SSL证书申购-TrustAsia证书
description: "Apple从2016年逐步要求HTTPS，SSL相关证书等，上月的JSPatch封杀更是引起广大开发者的注意，整体来说多是为了安全考虑，那么SSL证书是硬需，考虑到上一篇：[HTTPS时代已来，老司机手把手指导申请免费SSL证书 ](http://blog.csdn.net/qq_31810357/article/details/53543828) "
date: 2017-04-09 
tags: SSL证书申购   
---
###前言
Apple从2016年逐步要求HTTPS，SSL相关证书等，上月的JSPatch封杀更是引起广大开发者的注意，整体来说多是为了安全考虑，那么SSL证书是硬需，考虑到上一篇：[HTTPS时代已来，老司机手把手指导申请免费SSL证书 ](http://blog.csdn.net/qq_31810357/article/details/53543828) 介绍了阿里云的相关证书，为了不仅仅依赖一家证书，特此又研究了一下又拍云的SSL-TrustAsia证书申购，希望能帮助到你！
###第一步： 绑定域名并解析域名
>创建服务-添加域名-解析域名

![](https://ww4.sinaimg.cn/large/006tNbRwgy1febiwkdshwj30yj0p1770.jpg)
>*提示：记得选择全网加速服务，不要问为什么，因为它免费，也方便绑定域名与解析*

![](https://ww4.sinaimg.cn/large/006tNbRwgy1febirz6tbnj30wx0q277i.jpg)

>提示1：解析的域名最好是备案好的，不然后期证书可能会导致失败，现在所有的国内域名都严格要求起来了，包括阿里云，万网，新网，主机屋等等等等，总之名不正言不顺，备案一下一劳永逸，这里我测试的是我已备案好的

>提示2：添加过域名记得及时解析CNAME操作，不然可能影响后期证书，最近收到又拍云升级通知：

![](https://ww3.sinaimg.cn/large/006tNbRwgy1febjcs9u1aj30it0b740o.jpg)

###第二步： 证书申购（免费）

![](https://ww2.sinaimg.cn/large/006tNbRwgy1febicujmipj30y80ki77d.jpg)

>申购的是免费版的TrustAsia证书（苹果认证可放心使用）

![](https://ww4.sinaimg.cn/large/006tNbRwgy1febidhb688j30v80hgacd.jpg)

###第三步： 证书配置

![](https://ww2.sinaimg.cn/large/006tNbRwgy1febiez0h7dj30we0lujup.jpg)

>选择TrustAsia证书，其他不用操作，接着下一步

![](https://ww3.sinaimg.cn/large/006tNbRwgy1febifiebtfj30wm0msjts.jpg)


![](https://ww2.sinaimg.cn/large/006tNbRwgy1febigiwa90j30w60jomzy.jpg)

###第四步： 补全资料

![](https://ww4.sinaimg.cn/large/006tNbRwgy1febijdij6qj31kw0vhwju.jpg)

![](https://ww4.sinaimg.cn/large/006tNbRwgy1febiko4oa3j30h50bnjs2.jpg)

>*填入第一步绑定的域名，由于第一步已解析域名证明了域名所有权，直接点击提交即可！*

###第五部：审核结果查看
![](https://ww2.sinaimg.cn/large/006tNbRwgy1febjeng4ydj30wg0hhtbh.jpg)

审核通过的如下：

![](https://ww2.sinaimg.cn/large/006tNbRwgy1fefi84ry6yj31kw0vz7b5.jpg)
>温馨提示：又拍云免费SSL证书申购是通过第三方提交审核的，所以官网不受控制，甚至由于解析错误未能审核通过状态也不显示和邮件提醒，所以特此提醒开发者，正常审核周期是一个工作日，若你的申购一直处于待审核，原因可能有两点：1.解析域名时，顶级域名和带www的域名解析是要和又拍云保持一致的；2.未绑定解析域名，或者节假日延后，更多问题可以咨询官方客服。

###第六步： 证书的管理
![](https://ww3.sinaimg.cn/large/006tNbRwgy1fefi91tt7lj31kw0qe44a.jpg)



上一篇：[HTTPS时代已来，老司机手把手指导申请免费SSL证书 ](http://blog.csdn.net/qq_31810357/article/details/53543828)    

更多：[每周更新关注新浪微博！](http://weibo.com/hanjunqiang)  手机加iOS开发者交流QQ群： 446310206