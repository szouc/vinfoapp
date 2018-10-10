import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image
} from 'react-native'

import Picker from 'react-native-image-picker'
import { uploadFile } from '../../utils/uploadFile'

export default class ImagePicker extends React.Component {
  state = {
    avatarSource: null
  }

  selectPhotoTapped() {
    const options = {
      title: '请选择',
      quality: 1.0,
      storageOptions: {
        skipBackup: true
      }
    }

    Picker.showImagePicker(options, async response => {
      console.tron.log('Response = ', response)
      if (response.didCancel) {
        console.tron.log('User cancelled photo picker')
      } else if (response.error) {
        console.tron.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.tron.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri, path: response.path }

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        })

        const res = await uploadFile(
          this.props.uploadUrl,
          response.fileName,
          response.path
        )
        if (res) {
          await this.props.input.onChange(res.data)
        }
      }
    })
  }

  render() {
    return (
      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
        <View
          style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}
        >
          {this.state.avatarSource === null ? (
            <Text>请选择照片</Text>
          ) : (
            <View>
              <Image style={styles.avatar} source={this.state.avatarSource} />
              <Text>{this.state.avatarSource.uri}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 5,
    width: 200,
    height: 100
  }
})
