import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Picker from 'react-native-image-picker'
import { uploadFile } from '../../utils/uploadFile'

export default class ImagePicker extends React.Component {
  state = {
    avatarSource: null
  }

  selectPhotoTapped() {
    const options = {
      title: '请选择',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '使用相机',
      chooseFromLibraryButtonTitle: '从图库中选择',
      quality: 1.0,
      storageOptions: {
        skipBackup: true
      }
    }

    Picker.showImagePicker(options, async response => {
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
          this.props.input.name,
          this.props.uploadUrl,
          response.fileName,
          response.path
        )
        if (res) {
          await this.props.input.onChange(JSON.parse(res.data))
        }
      }
    })
  }

  render() {
    return (
      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
        <View style={styles.avatarContainer}>
          {this.state.avatarSource === null ? (
            <Text style={styles.text}>请选择照片</Text>
          ) : (
            <Image style={styles.avatar} source={this.state.avatarSource} />
          )}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    height: 50
  },
  avatar: {
    flex: 1,
    width: '100%',
    height: 400
  }
})
