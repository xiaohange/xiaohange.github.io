---
layout: post
title: "Bluemix 之 IBM Watson Conversation 自然对话实践"
date: 2017-05-20 
description: "Bluemix 之 IBM Watson Conversation 自然对话实践"
tag: Bluemix
--- 
### 前言
 &emsp;&emsp;初步结识Bluemix是在2015年春节，那时候对于一个外来的IBM-PaaS很是好奇，但是又不敢尝试，担心成本高，一直有一种“推倒重来”的感觉，所以当时只做了简单的免费测试；随着2016年产品的成熟变得火热起来，越发难以控制好奇就开始了尝试，起初尝试了MobileData，再有是Push Notification；近期意识到，机器语言打的火热，作为移动开发人员对于机器认知一直处于理论阶段，未曾真正的体验到机器认知带来的快感，由于之前对于昂贵的Watson一直触摸不到，发展至今总算有机会了，Bluemix提供了一个叫 IBM Watson Conversation 的服务，特此体验一把。

### Watson Conversation Service 简介
&emsp;&emsp;Watson Conversation 将自然语言界面添加到您的应用程序中，与程序的最终用户用自然语言进行交互；IBM Watson提供了简易的web应用程序训练服务，帮助用户快速构建产品需求的自然对话流程。我们常见的有web聊天机器人的应用，还有众所熟知的支付宝智能机器人服务等。

### 体验前应熟知基本知识构成
Conversation Service 包含三个部分：Inserts、Entities 和 Dialog，下面简单介绍一下各自的作用：
 
* Inserts: 用户的意图。即用户提供的信息背后所隐含的意图。比如工厂网询价单，用户问你有什么样配置的粉碎机，用户的意图是询问粉碎机的具体配置信息。

* Entities: 用户输入的要素。
* Dialog: 对话的流程，一套逻辑顺序的对话流程；Conversation Service 提供了自定义对话流程的逻辑编写。

### 具体流程（体验版）
#### 熟知基本知识构成后让我们一起来看看整体流程：
#### 1.打开 Bluemix 官网:[https://console.ng.bluemix.net](https://console.ng.bluemix.net)；
#### 2.新用户进来是这样的，这里我们注册一个30天体验账号，如下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105008075?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
#### 3.登陆后，点击目录，并在搜索框输入 Watson Conversation 如下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105032084?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![这里写图片描述](http://img.blog.csdn.net/20170531105220820?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 4.打开 Conversation 介绍页，建立 Bluemix Watson Conversation Service 服务，如下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105236539?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

我们这里选择免费服务并点击创建，如下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105310742?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

创建成功的如下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105329329?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
#### 5.打开图形化工具 Launch tool 定制 Conversation

![这里写图片描述](http://img.blog.csdn.net/20170531105342680?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

点击创建新的空间如下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105358821?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![这里写图片描述](http://img.blog.csdn.net/20170531105412424?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
#### 6.创建 Intention 和实例来训练 Watson 读懂用户输入背后的意图
这里呢，既可以导入修改好的线下Intents，也可以在线添加，这里我们选择线上add，如下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105430315?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
输入一个 Intention 的名字，一个意图至少关联 5 个表达这个意图的问题实例。输入完每个问题回车，完成一个意图点击右上角的 Done，如下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105501634?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
创建好如下图（为了测试这里多创建几个）：

![这里写图片描述](http://img.blog.csdn.net/20170531105521697?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
重复以上的步骤建立其他的意图和实例，输入后的结果可参考下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105535744?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
>目前为止：你定义完成了 intents 和用来识别它们的实例

#### 7.定义 Entity 识别用户输入中的要素
前面有讲到 Entity 是用户输入中的要素。比如水果店有多种水果，那么用户要求的具体水果都是输入中的要素。每个元素 entity 定义了一系列的值用来触发 Watson 给出相应的回答或回应。

点击 Entities 选项卡，同样可以在线 Create 和线下上传两种方式，如下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105551051?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
点击左上角的 Create 按钮，在弹出的对话框内输入 Entities 的名字和所包含的数值，例如在交通工具建立一个交通工具种类的 Entity，步骤如下：

在 Entity 栏位，输入"交通工具分类"来定义交通工具种类。

* 在 Value 栏位，输入"机动车"
* 点击加号按钮来添加更多的值，比如：人力驱动，水上行驶，地下行驶，天上航行等。
    输入结束后，点击"Done"按钮。
    
![这里写图片描述](http://img.blog.csdn.net/20170531105608759?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
>目前为止：你定义了交通工具类的元素，现在可以来定义对话的流程了，这个流程将会使用之前定义好的用户意图 intents 和元素。

#### 8.通过 Dialog 来创建用户问题的自动回应机制
前面讲过 Dialog 组件定义针对用户的意图和问题，如何自动回应。Dialog能自定义对话流程，确立对话流程逻辑；

在 Enter a condition 栏位输入 水果,这是之前你创建过的意图， 在 Watson says 栏位输入"你想买点苹果吗？" 可以输入多个，这里不一一列举，点击"Anything else"节点，这个节点是自动生成的，同样可以输入多个联想意图。

![这里写图片描述](http://img.blog.csdn.net/20170531105625463?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 9.测试 Watson conversation

点击右上角标识，如下图：

![这里写图片描述](http://img.blog.csdn.net/20170531105643572?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

测试结果如下：

![这里写图片描述](http://img.blog.csdn.net/20170531105705068?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

![这里写图片描述](http://img.blog.csdn.net/20170531105720322?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzE4MTAzNTc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

通过效果图我们不难看出，完全自定义的意图与用户输入元素的智能匹配，加上对流程的控制，对于开发者很容易上手，能扩展更多的功能与自由创新，这是很令我惊喜的一点。

### Watson Conversation 体验总结
Watson Conversation 给技术人员对机器认知有了直观的体验，对企业智能客服等提供了更加智能的平台，给云时代高速发展的企业们带来了更多的选择，未来人工智能需要像 Watson Conversation 这样的服务，有效节省企业成本，提高工作效率。Bluemix Watson Conversation，期待你更好的表现！


