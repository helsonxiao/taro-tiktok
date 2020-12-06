export default {
  pages: [
    'pages/index/index',
    'pages/user-center/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#fff',
    selectedColor: '#fff',
    backgroundColor: '#000',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '短视频',
      },
      {
        pagePath: 'pages/user-center/index',
        text: '我的',
      },
    ],
  },
}
