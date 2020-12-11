import Taro from '@tarojs/taro';

/**
 * 网上收集的视频，一个适合国内加载，一个适合国外加载
 */
const VIDEOS = [
  {
    id: 'bear',
    isFav: false,
    src: 'http://storage.jd.com/cjj-pub-images/bear.mp4',
  },
  {
    id: 'trailer',
    isFav: false,
    src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
  {
    id: 'bear2',
    isFav: false,
    src: 'http://storage.jd.com/cjj-pub-images/bear.mp4',
  },
  {
    id: 'trailer2',
    isFav: false,
    src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
]

/**
 * 模拟实际环境中的异步网络请求
 */
export function fetchVideos() {
  const ids = Taro.getStorageSync('fav-video-ids') || []
  const videos = VIDEOS.map(v => {
    v.isFav = ids.includes(v.id);
    return v;
  })
  return Promise.resolve(videos);
}

export function fetchFavVideos() {
  return Promise.resolve(VIDEOS.filter(v => {
    const ids = Taro.getStorageSync('fav-video-ids') || []
    return ids.includes(v.id);
  }));
}

export function likeVideo(id) {
  const ids = Taro.getStorageSync('fav-video-ids') || []
  ids.push(id);
  Taro.setStorageSync('fav-video-ids', ids)
}

export function unlikeVideo(id) {
  const ids = Taro.getStorageSync('fav-video-ids') || []
  const index = ids.findIndex(_id => _id === id);
  if (index === -1) return;
  ids.splice(index, 1)
  Taro.setStorageSync('fav-video-ids', ids)
}
