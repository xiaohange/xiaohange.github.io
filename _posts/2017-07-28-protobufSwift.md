---
layout: post
title: "Protobuf-Swift 集成小结"
date: 2017-07-14 
description: "Protobuf-Swift 集成小结"
tag: ProtocolBuffers-Swift
--- 

### 第一步、配置环境(跟着github 上面配置就行了)

### 第二步、把项目从gitHub拉下来(以下都是根据这个github的内容配置的)：https://github.com/alexeyxo/protobuf-swift (使用终端操作)

以下两个方法供使用：

```
$ git clone git@github.com:alexeyxo/protobuf-swift.git 

$ git clone https://github.com/alexeyxo/protobuf-swift.git
```
### 第三步、执行 ./scripts/build.sh 文件  (使用终端操作)

使用终端cd到protobuf-swift目录下，然后直接在终端输入以下命令执行(貌似这是一个脚本，反正正常执行会生成一大坨文件)

```
$ ./scripts/build.sh
```

### 第四步、集成protobuf-swift  (手动拖进项目， 或者pod管理)

1.直接拖拽进你的工程中，然后添加编译文件：`target--> build phases  -> Link binary with libraries`  (注意： 拖进去的/`ProtocolBuffers.xcodeproj`文件， 在你的工程里不会存在真实的文件夹， 这里拖进去只是一个引用)

2.然后记得 pod 一下 或者把Source文件夹拖进工程：`protobuf-swift/Source`(和 使用第三方框架一样原理)

```
$ pod 'ProtocolBuffers-Swift'

$ pod install
```

### 第五步、用你自己定义的 .proto 文件生成一个 .swift 文件，.proto 文件使用来写protobuf代码的 (使用终端操作)

1.创建(touch)一个 .proto 文件 ，然后 protobuf 代码就全部写在这个 .ptoto 文件里面

```
$ touch  Test.proto 

例如代码：

syntax = "proto2";

message UserInfo {
required string name = 1;
required int64 level = 2;
}

message TextMessage {
required UserInfo user = 1;
required string text = 2;
}

message GiftMessage {
required UserInfo user = 1;
required string giftname = 2;
required string giftURL = 3;
required string giftCount = 4;
}
```

2.cd到你的 .proto 文件位置， 然后 使用终端 编译成 swift文件

```
$ protoc  Test.proto --swift_out="./"
```

3.生成的 swift文件就可以直接拖进你的项目工程中了

![](http://img.blog.csdn.net/20170424172927736)

更多惊喜:手机加iOS开发者交流群：①446310206 ②446310206

