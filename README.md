# Taro TikTok
嗨，这个 Demo 是我基于 `Taro3` 编写的一个跨端（小程序 & H5）短视频应用，它服务于我个人的前端入门课程。

在开发过程中，我遇到了 Taro 在 H5 端的一些问题：

- [x] `Taro.createVideoContext` 无法使用
- [x] `Video` 组件无法全屏，播放暂停等方法无法调用
- [ ] `CoverView` 无法使用

于是我针对教学需求对 Taro 进行了修复，所以这个项目同时也能作为 Taro3 的跨端测试项目。

## 使用到的 API

- ScrollView: 上下滑动的容器组件
- Video: 视频播放器组件
- CoverView / CoverImage / ... : 在视频播放器上覆盖显示其它功能（H5 其实不需要它，但为了多端代码的一致性，我们需要基于 CSS 来实现它）
- ...

## 使用方法

```shell
# 安装插件
npm install

# 在 npm install 的过程中，很有可能我的 commit 还没被 release，所以需要手动往 node_modules 里覆盖源码，这边暂不赘述

# 启动 H5
npm run dev:h5

# 启动微信小程序
npm run dev:weapp

# 其它平台请参考 package.json
```

## PR

- [修复 `Taro.createVideoContext`](https://github.com/NervJS/taro/pull/7605)

- [修复 `Video` 在 Safari 浏览器中的全屏异常](https://github.com/NervJS/taro/pull/7891)

