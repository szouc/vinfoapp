import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class GridItem extends PureComponent {
  render() {
    const { item } = this.props
    return (
      <TouchableOpacity onPress={item.action} style={styles.container}>
        <Icon name={item.icon} size={50} color='#33f' />
        <Text>{item.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GridItem
