import React, { Component } from 'react';
import { Video, View } from '@tarojs/components';
import { getCurrentInstance } from '@tarojs/taro';
import './index.scss';
import { fetchFavVideos } from '../../services';

export default class Index extends Component {
  state = {
    video: {},
  };

  componentDidMount() {
    const { vid } = getCurrentInstance().router.params;
    fetchFavVideos().then((videos) => {
      this.setState({ video: videos.find((v) => v.id === vid) });
    });
  }

  render() {
    return (
      <View className="video-detail">
        <Video src={this.state.video.src} autoplay />
      </View>
    );
  }
}
