/**
 * 全部 API 基于 Taro Async Storage API 模拟网络请求
 */
import Taro from '@tarojs/taro';

/**
 * 网上收集的视频，部分适合国内加载，部分适合国外加载
 */
const VIDEOS = [
  {
    id: 'bear',
    isFav: false,
    src: 'http://storage.jd.com/cjj-pub-images/bear.mp4',
  },
  {
    id: '277004',
    isFav: false,
    src: 'https://v-cdn.zjol.com.cn/277004.mp4',
  },
  {
    id: '276986',
    isFav: false,
    src: 'https://v-cdn.zjol.com.cn/276986.mp4',
  },
  {
    id: '276991',
    isFav: false,
    src: 'https://v-cdn.zjol.com.cn/276991.mp4',
  },
  // {
  //   id: 'oceans',
  //   isFav: false,
  //   src: 'http://vjs.zencdn.net/v/oceans.mp4',
  // },
  // {
  //   id: 'trailer',
  //   isFav: false,
  //   src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  // },
  // {
  //   id: 'big_buck_bunny',
  //   isFav: false,
  //   src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
  // },
  // {
  //   id: 'trailer2',
  //   isFav: false,
  //   src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  // },
]

/**
 * 获取视频列表，视频对象中包含了用户的点赞情况
 */
export function fetchVideos() {
  const ids = Taro.getStorageSync('fav-video-ids') || []
  const videos = VIDEOS.map(v => {
    v.isFav = ids.includes(v.id);
    return v;
  })
  return Promise.resolve(videos);
}

/**
 * 获取用户点赞的视频列表
 */
export function fetchFavVideos() {
  return Promise.resolve(VIDEOS.filter(v => {
    const ids = Taro.getStorageSync('fav-video-ids') || []
    return ids.includes(v.id);
  }));
}

/**
 * 点赞视频
 * @param {Integer} id 视频唯一标识符
 */
export function likeVideo(id) {
  const ids = Taro.getStorageSync('fav-video-ids') || []
  ids.push(id);
  return Taro.setStorage({
    key: 'fav-video-ids',
    data: ids,
  })
}

/**
 * 取消点赞视频
 * @param {Integer} id 视频唯一标识符
 */
export function unlikeVideo(id) {
  const ids = Taro.getStorageSync('fav-video-ids') || []
  const index = ids.findIndex(_id => _id === id);
  if (index === -1) return;
  ids.splice(index, 1)
  return Taro.setStorage({
    key: 'fav-video-ids',
    data: ids,
  })
}


const userToken = 'test'; // 用户登录后可获得临时 token（作为身份凭据），这里简单把 token 当成永久有效

/**
 * 获取用户信息
 * @returns {Promise<{
 *   nickname?: String
 * }>} userInfo
 */
export function fetchUserInfo() {
  const info = Taro.getStorageSync(`user-info@${userToken}`) || {}
  return Promise.resolve(info)
}

/**
 * 修改用户昵称
 * @param {String} nickname
 */
export async function editUserNickname(nickname) {
  const info = await fetchUserInfo();
  info.nickname = nickname;
  return Taro.setStorage({
    key: `user-info@${userToken}`,
    data: info,
  });
}
