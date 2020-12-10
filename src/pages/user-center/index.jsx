import { /* Image, */ Button, Text, Video, View } from '@tarojs/components'
import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { AtIcon, AtInput, AtModal, AtModalAction, AtModalContent, AtModalHeader,  } from 'taro-ui'
// import Wallpaper from './sunset-desert-dunes.jpg'
import './index.scss'
import { fetchFavVideos } from '../../services';

const videoWidth = Taro.getSystemInfoSync().windowWidth / 3;
const videoHeight = videoWidth * 16 / 9;


export default class Index extends Component {
  state = {
    nicknameModalVisible: false,
    nicknameInput: '',
    favVideos: [],
  }

  componentDidMount () {
    fetchFavVideos().then(favVideos => this.setState({ favVideos }))
  }

  render () {
    return (
      <View className='user-center'>
        {/* <Image className='wallpaper' src={Wallpaper} /> */}
        <View className='wallpaper' />
        <View className='user-info' onClick={() => this.setState({ nicknameModalVisible: true })}>
          <Text className='nickname'>Helson</Text>
          <AtIcon value='edit' size='16' color='ghostwhite' />
        </View>
        <View className='fav-videos'>
          {this.state.favVideos.length === 0 && (
            <View>
              TODO: 占位插画
            </View>
          )}
          {this.state.favVideos.map(v => (
            <View key={v.id} className='fav-video-card' style={{ width: videoWidth, height: videoHeight }}>
              {/* 放少量 Video 仅作示例，实际上应该放每个视频的封面图，否则很占用资源 */}
              <Video
                src={v.src}
                muted
                showCenterPlayBtn={false}
                controls={false}
              />
            </View>
          ))}
        </View>

        <AtModal isOpened={this.state.nicknameModalVisible}>
          <AtModalHeader>修改昵称</AtModalHeader>
          <AtModalContent>
            <AtInput
              type='text'
              placeholder='请输入昵称'
              value={this.state.nicknameInput}
              onChange={(value) => {
                this.setState({ nicknameInput: value });
                // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
                return value;
              }}
            />
          </AtModalContent>
          <AtModalAction>
            <Button onClick={() => this.setState({ nicknameModalVisible: false })}>取消</Button>
            <Button onClick={() => this.setState({ nicknameModalVisible: false })}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}
