import React from 'react'
import { Button, View } from 'react-native'

const LogoutButton = props => {
  return (
    <View>
      <Button onPress={props.logout} title='Logout' />
    </View>
  )
}

export default LogoutButton
