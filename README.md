# Taro TikTok
嗨，这个 Demo 是我基于 `Taro3` 编写的一个跨端（小程序 & H5）短视频应用，它服务于我个人的前端入门课程。

在开发过程中，我遇到了 Taro v3.0.9 在 H5 端的一些问题：

- [x] `Taro.createVideoContext` 无法使用
- [x] `Video` 组件无法全屏，播放暂停等方法无法调用
- [ ] `CoverView` 无法使用
- [ ] `TabBar` 无法使用

于是我开始针对教学需求对 Taro 进行修复，所以这个项目同时也能作为 Taro3 的跨端测试项目。

## 使用到的 API

- ScrollView: 上下滑动的容器组件
- Video: 视频播放器组件
- CoverView / CoverImage / ... : 在视频播放器上覆盖显示其它功能（H5 其实不需要它，但为了多端代码的一致性，我们需要基于 CSS 来实现它）
- TabBar: 多 Tab 页布局组件
- ...

## 使用方法

```shell
# 安装插件
npm install

# 启动 H5
npm run dev:h5

# 启动微信小程序
npm run dev:weapp

# 其它平台请参考 package.json
```

> 项目使用的 Taro 版本为 v3.0.9，所以 H5 端的运行依赖我修改后的代码（可以 pull 我下面最新的 [PR](#PR) 然后进行 build）。手动覆盖 `node_modules/@tarojs/taro-h5` & `node_modules/@tarojs/components` 中"可被覆盖的所有代码"后，即可正常调试，支持热更新。

## 注意事项
- 本项目的 Taro 版本不会更新，因为本项目是以完成跨端应用为目标，讲解如何解决跨端问题，不单单是为了完成这个简单的项目
- 如果在[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)中遇到视频无法播放的情况，请尝试下载 Nightly Build 版本

## PR

- [修复 `Taro.createVideoContext`](https://github.com/NervJS/taro/pull/7605)

- [修复 `Video` 在 Safari 浏览器中的全屏异常](https://github.com/NervJS/taro/pull/7891)

