import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Swiper, SwiperItem, Video } from '@tarojs/components'
import './index.scss'

const videos = [
  {
    id: 'video-1',
    src: 'http://storage.jd.com/cjj-pub-images/bear.mp4',
  },
  {
    id: 'video-2',
    src: 'http://storage.jd.com/cjj-pub-images/bear.mp4',
  },
  {
    id: 'video-3',
    src: 'http://storage.jd.com/cjj-pub-images/bear.mp4',
  },
]

const videoRefMap = {};

export default class Index extends Component {

  componentDidMount () {
    videos.forEach((v, index) => {
      videoRefMap[index] = Taro.createVideoContext(v.id);
    })
  }

  render () {
    return (
      <Swiper
        vertical
        circular={false}
        onChange={e => {
          Object.keys(videoRefMap).forEach(k => {
            if (e.detail.current === k) return;
            videoRefMap[k].stop();
          })
          videoRefMap[e.detail.current].play();
        }}
      >
        {videos.map((v, index) => (
          <SwiperItem key={index}>
            <Video id={v.id} src={v.src} />
          </SwiperItem>
        ))}
      </Swiper>
    )
  }
}

            {/* <CoverView>
              <CoverImage src='http://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png' />
            </CoverView> */}
