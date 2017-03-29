---
layout: post
title: iOS的Cookie存取看我就够了
date: 2017-03-29 
description: "当前一些公司为了快速出一款app，很多时候采用UINavigationController+WebView或者NavigationController+UITabbarVC+WebView的方式，这样就不可避免的需要使用cookie与Html5交互，下面讲述几种常用情景下cookie的添加方法"
tag: iOS开发实战 
  
---

>当前一些公司为了快速出一款app，很多时候采用UINavigationController+WebView或者NavigationController+UITabbarVC+WebView的方式，这样就不可避免的需要使用cookie与Html5交互，下面讲述几种常用情景下cookie的添加方法：

### 一. UIWebView：

工厂类中存储cookie的方法

```
+ (void)saveCookies {
    // 创建一个可变字典存放cookie
    NSMutableDictionary *fromappDict = [NSMutableDictionary dictionary];
    [fromappDict setObject:@"fromapp" forKey:NSHTTPCookieName];
    [fromappDict setObject:@"ios" forKey:NSHTTPCookieValue];
    // kDomain是公司app网址
    [fromappDict setObject:kDomain forKey:NSHTTPCookieDomain];
    [fromappDict setObject:kDomain forKey:NSHTTPCookieOriginURL];
    [fromappDict setObject:@"/" forKey:NSHTTPCookiePath];
    [fromappDict setObject:@"0" forKey:NSHTTPCookieVersion];

    // 将可变字典转化为cookie
    NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:params];

    // 获取cookieStorage
    NSHTTPCookieStorage *cookieStorage = [NSHTTPCookieStorage sharedHTTPCookieStorage]

    // 存储cookie
    [cookieStorage setCookie:cookie];
}
```

 UIWebView使用时间较长，只要在cookieStorage中设置了相应的cookie，每次就会自动带上；
    但是这样的弊端是随着与H5的交互增加，Cookie占用的空间越来越大，每次交互都夹带大量的cookie，不仅增加服务器端压力，也浪费用户的流量。比如每次交互都夹带5kb的cookie内容，但是真正用到的只有两三百字节。

### 二. WKWebView

   WKWebView相比于UIWebView：
        速度快了一倍，内存却减少为原来的一半；
        cookie不再是自动携带，需要手动设置；
        交互更加顺畅，比如app底部四个tabBar也都是网页的，在UIWebView下点击，整个H5页面都会闪白一下，但是在WKWebView下点击，四个tabBar效果与原生app效果更加类似，不会有闪白现象。
        增减了一些代理方法，更方便的进行协议拦截和进度条展示





### 1.在创建的时候存放到WKUserScript中进行添加cookie

```
    WKWebViewConfiguration *webConfig = [[WKWebViewConfiguration alloc] init];
    // 设置偏好设置
    webConfig.preferences = [[WKPreferences alloc] init];
    // 默认为0
    webConfig.preferences.minimumFontSize = 10;
    // 默认认为YES
    webConfig.preferences.javaScriptEnabled = YES;
    // 在iOS上默认为NO，表示不能自动通过窗口打开
    webConfig.preferences.javaScriptCanOpenWindowsAutomatically = NO;

    // web内容处理池
    webConfig.processPool = [[WKProcessPool alloc] init];
    // 将所有cookie以document.cookie = 'key=value';形式进行拼接
    #warning 然而这里的单引号一定要注意是英文的，不要问我为什么告诉你这个(手动微笑)
    NSString *cookieValue = @"document.cookie = 'fromapp=ios';document.cookie = 'channel=appstore';";

    // 加cookie给h5识别，表明在ios端打开该地址
    WKUserContentController* userContentController = WKUserContentController.new;
    WKUserScript * cookieScript = [[WKUserScript alloc]
                                   initWithSource: cookieValue
                                   injectionTime:WKUserScriptInjectionTimeAtDocumentStart forMainFrameOnly:NO];
    [userContentController addUserScript:cookieScript];
    webConfig.userContentController = userContentController;

    WKWebView *wkWebView = [[WKWebView alloc] initWithFrame:frame configuration:webConfig];

    wkWebView.UIDelegate = wkWebView;
    wkWebView.navigationDelegate = wkWebView;
```
### 2.加载某个url的时候添加cookie

   如果WKWebView在加载url的时候需要添加cookie，需要先手动获取当前NSHTTPCookieStorage中的所有cookie，然后将cookie放到NSMutableURLRequest请求头中
   
```
- (void)loadRequestWithUrlString:(NSString *)urlString {

    // 在此处获取返回的cookie
    NSMutableDictionary *cookieDic = [NSMutableDictionary dictionary];

    NSMutableString *cookieValue = [NSMutableString stringWithFormat:@""];
    NSHTTPCookieStorage *cookieJar = [NSHTTPCookieStorage sharedHTTPCookieStorage];

    for (NSHTTPCookie *cookie in [cookieJar cookies]) {
        [cookieDic setObject:cookie.value forKey:cookie.name];
    }

    // cookie重复，先放到字典进行去重，再进行拼接
    for (NSString *key in cookieDic) {
        NSString *appendString = [NSString stringWithFormat:@"%@=%@;", key, [cookieDic valueForKey:key]];
        [cookieValue appendString:appendString];
    }

    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:urlString]];
    [request addValue:cookieValue forHTTPHeaderField:@"Cookie"];

    [self loadRequest:request];
}
```
### 3.AFNetworking

    AFNetworking存取cookie就比较常见了，话不多说，都在代码里了 
```
    // 获取AFHTTPRequestOperationManager
    AFHTTPRequestOperationManager *operationManager = [AFHTTPRequestOperationManager manager];

    // 创建可变字典用于存放Cookie
    NSMutableDictionary *cookieDic = [NSMutableDictionary dictionary];

    // 存放新添加的cookie
    #warning 单个的Cookie还好，但是楼主在工厂类方法中拼接了一个包含6个设备信息的value值，最后忘记加分号了，测试也没测出来
    #warning 因为不影响功能，但是后面的cookie就自动拼接上了，H5那边也识别不到，险造成重大事故(涉及金融。。)，望后来者看到，提前做好准备(就凭这个坑，你得给我个赞)
    NSMutableString *cookieValue = [NSMutableString stringWithFormat:@"fromapp=ios;"];

    // 获取
    NSHTTPCookieStorage *cookieJar = [NSHTTPCookieStorage sharedHTTPCookieStorage];

    for (NSHTTPCookie *cookie in [cookieJar cookies]) {
        [cookieDic setObject:cookie.value forKey:cookie.name];
    }

    // cookie重复，先放到字典去重，再进行拼接
    for (NSString *key in cookieDic) {
        NSString *appendString = [NSString stringWithFormat:@"%@=%@;", key, [cookieDic valueForKey:key]];
        [cookieValue appendString:appendString];
    }

    // 将cookie存到请求头中
    [operationManager.requestSerializer setValue:cookieValue forHTTPHeaderField:@"Cookie"];

    //  拼接url地址
    NSString *urlStr = [NSString stringWithFormat:@"%@%@", kHostIP, kPath];

    // 设置参数字典
    NSDictionary *paraDict = @{
                                  @"key" : value
                                  };
    // 发送请求，处理结果
    [operationManager POST:urlStr parameters:paraDict success:^(AFHTTPRequestOperation * _Nonnull operation, id  _Nonnull responseObject) {

         NSLog(@"responseObject-->%@", responseObject);

    } failure:^(AFHTTPRequestOperation * _Nullable operation, NSError * _Nonnull error) {

         NSLog(@"error-->%@", error);
    }];

```