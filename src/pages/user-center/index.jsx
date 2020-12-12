import { /* Image, */ Button, Text, Video, View } from '@tarojs/components'
import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { AtIcon, AtInput, AtModal, AtModalAction, AtModalContent, AtModalHeader,  } from 'taro-ui'
// import Wallpaper from './sunset-desert-dunes.jpg'
import './index.scss'
import { editUserNickname, fetchFavVideos, fetchUserInfo } from '../../services';

const videoWidth = Taro.getSystemInfoSync().windowWidth / 3 - 4; // 每行显示 3 个视频，去掉边框宽度
const videoHeight = videoWidth * 16 / 9;


export default class Index extends Component {
  state = {
    userInfo: {
      nickname: '',
    },
    nicknameModalVisible: false,
    nicknameInput: '',
    favVideos: [],
  }

  componentDidMount () {
    this.refreshVideos()
    this.refreshUserInfo();
  }

  onTabItemTap() {
    this.refreshVideos()
    this.refreshUserInfo();
  }

  refreshVideos = () => {
    fetchFavVideos().then(favVideos => this.setState({ favVideos }))
  }

  refreshUserInfo = () => {
    fetchUserInfo().then(userInfo => {
      this.setState({ userInfo });
    })
  }

  render () {
    return (
      <View className='user-center'>
        {/* <Image className='wallpaper' src={Wallpaper} /> */}
        <View className='wallpaper' />
        <View className='user-info' onClick={() => this.setState({ nicknameModalVisible: true })}>
          <Text className='nickname'>{this.state.userInfo.nickname || '点击设置昵称'}</Text>
          <AtIcon value='edit' size='16' color='ghostwhite' />
        </View>
        <View className='fav-videos'>
          {this.state.favVideos.length === 0 && (
            <View>
              TODO: 占位插画
            </View>
          )}
          {this.state.favVideos.map(v => (
            <View
              key={v.id}
              className='fav-video-card' style={{ width: videoWidth, height: videoHeight }}
              onClick={() => {
                Taro.navigateTo({ url: `/pages/video-detail/index?vid=${v.id}` })
              }}
            >
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
            <Button onClick={() => {
                editUserNickname(this.state.nicknameInput).then(() => {
                  this.setState({ nicknameModalVisible: false })
                  this.refreshUserInfo();
                }).catch((err) => {
                  console.error('修改失败: ', err)
                })
              }}
            >
              确定
            </Button>
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}
