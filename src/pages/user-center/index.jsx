import { /* Image, */ Text, View } from '@tarojs/components'
import React, { Component } from 'react'
import { AtIcon } from 'taro-ui'
// import Wallpaper from './sunset-desert-dunes.jpg'
import './index.scss'

export default class Index extends Component {

  componentDidMount () {
  }

  render () {
    return (
      <View className='user-center'>
        {/* <Image className='wallpaper' src={Wallpaper} /> */}
        <View className='wallpaper' />
        <View className='user-info'>
          <Text className='nickname'>Helson</Text>
          <AtIcon value='edit' size='16' color='ghostwhite'></AtIcon>
        </View>
      </View>
    )
  }
}
