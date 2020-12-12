export default {
  pages: [
    'pages/index/index',
    'pages/user-center/index',
    'pages/video-detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#fff',
    selectedColor: '#eb735f',
    backgroundColor: '#000',
    borderStyle: 'black',
    /**
     * tabBar 页面列表
     * 图标来自 https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=27172
     */
    list: [
      {
        pagePath: 'pages/index/index',
        text: '短视频',
        iconPath: 'assets/live.png',
        selectedIconPath: 'assets/live-selected.png',
      },
      {
        pagePath: 'pages/user-center/index',
        text: '我的',
        iconPath: 'assets/user.png',
        selectedIconPath: 'assets/user-selected.png',
      },
    ],
  },
}
