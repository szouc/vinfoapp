import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const BackButton = props => {
  return (
    <TouchableOpacity
      onPress={props.backToMain(props.username)}
      style={{ width: 100 }}
    >
      <Icon name='chevron-left' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})

export default BackButton
