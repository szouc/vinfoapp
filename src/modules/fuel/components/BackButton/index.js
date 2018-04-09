import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const BackButton = props => {
  return (
    <TouchableOpacity
      onPress={props.backToMain(props.username)}
      style={styles.container}
    >
      <Icon name='chevron-left' size={20} color='#16F' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50
  }
})

export default BackButton
