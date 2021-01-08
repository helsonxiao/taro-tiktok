# Taro TikTok
基于 `Taro3` 编写的跨端（小程序 & H5）短视频 demo

在开发过程中，我遇到了 Taro v3.0.9 在 H5 端的一些问题：

- [x] `Taro.createVideoContext` 无法使用
- [x] `Video` 组件无法全屏，播放暂停等方法无法调用
- [ ] `CoverView` 无法使用
- [x] `TabBar` 无法使用
- [ ] `Taro.createVideoContext` 无法处理数字 ID
- [ ] `TabBar` 页面切换时，没有拉齐小程序的生命周期 API
- [ ] `TabBar` 页面的高度没有自动适配

我根据需求对 Taro 进行了一些修复，所以这个项目同时也能作为 Taro3 的跨端测试项目。**在 `taro-latest` 分支中可以体验到最新的跨端效果。**

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

# 启动微信小程序
npm run dev:weapp

# 其它平台请参考 package.json
```

> 项目使用的 Taro 版本为 v3.0.9，仅测试了微信小程序。H5 端的运行需要根据 `taro-latest` 分支中的说明手动 build 并覆盖 `node_modules/@tarojs/[xxx]`。

## 注意事项
- `master` 的 Taro 版本不会更新，因为本项目是以完成跨端应用为目标，讲解如何解决跨端问题，不单单是为了完成这个简单的项目
- 如果在[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)中遇到视频无法播放的情况，请尝试下载 Nightly Build 版本
- `View` 支持使用 style 控制样式，但对于"值"有要求，并非所有值都能生效，编译时会被特殊处理，可能是限制也可能是 bug

## PR

- [修复 `Taro.createVideoContext`](https://github.com/NervJS/taro/pull/7605)

- [修复 `Video` 在 Safari 浏览器中的全屏异常](https://github.com/NervJS/taro/pull/7891)
