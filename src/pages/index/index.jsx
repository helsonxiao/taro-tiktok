import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, Swiper, SwiperItem, Video } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { fetchVideos } from '../../services'
import './index.scss'

/**
 * 由于 Swpier 在切换时只提供了当前视频的索引
 * 所以这边维护的是 SwiperItem index 与 video context 的映射关系
 * */
const videoContextMap = {};


export default class Index extends Component {
  state = {
    videos: [],
  }

  componentDidMount() {
    fetchVideos()
      .then(videos => {
        this.setState({ videos }) // === this.setState({ videos: videos })
        videos.forEach((video, index) => {
          // videos 在 Swiper 中是顺序渲染的，所以这边的 index 可以拿来创建映射关系
          videoContextMap[index] = Taro.createVideoContext(video.id);
        })
        console.log(videoContextMap)
      })
      .catch(err => {
        console.log('获取视频失败: ' + err)
      })
  }

  render() {
    return (
      <Swiper
        vertical
        circular={false}
        onChange={e => {
          // 正确做法：暂停当前视频，然后播放新的视频。需要准确记录下当前的 video context
          // 为了降低上手难度，这边在"视频比较少"的情况下，直接停止了所有视频然后再播放
          Object.keys(videoContextMap).forEach(k => {
            if (e.detail.current === k) return;
            videoContextMap[k].stop();
          })
          videoContextMap[e.detail.current].play();
        }}
      >
        {this.state.videos.map((v, index) => (
          <SwiperItem key={index}>
            <Video
              id={v.id}
              src={v.src}
              // muted
              // controls={false}
            />
            <CoverView className='heart'>
              <AtIcon value='heart-2' size='30' color='#F00'></AtIcon>
            </CoverView>
          </SwiperItem>
        ))}
      </Swiper>
    )
  }
}
