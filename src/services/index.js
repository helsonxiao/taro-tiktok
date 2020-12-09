/**
 * 网上收集的视频
 */
const VIDEOS = [
  {
    id: 'bear',
    isFav: false,
    src: 'http://storage.jd.com/cjj-pub-images/bear.mp4',
  },
  {
    id: 'trailer',
    isFav: true,
    src: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  },
  {
    id: 'bipbopall',
    isFav: true,
    src: 'http://storage.jd.com/cjj-pub-images/bear.mp4',
  }
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
