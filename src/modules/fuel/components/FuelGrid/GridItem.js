import React, { PureComponent } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

class GridItem extends PureComponent {
  render() {
    const { item } = this.props
    return (
      <View>
        <TouchableOpacity onPress={item.action}>
          <Image source={{ uri: item.icon }} />
          <Text>{item.text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default GridItem
