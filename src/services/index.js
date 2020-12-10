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
    isFav: true,
    src: 'http://storage.jd.com/cjj-pub-images/bear.mp4',
  },
  {
    id: 'trailer2',
    isFav: true,
    src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
]

/**
 * 模拟实际环境中的异步网络请求
 */
export function fetchVideos() {
  return Promise.resolve(VIDEOS);
}

export function fetchFavVideos() {
  return Promise.resolve(VIDEOS.filter(v => v.isFav));
}
