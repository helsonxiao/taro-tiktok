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
