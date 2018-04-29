import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { ProfileCard } from '../modules/driver/containers'
import { LogoutButton } from '../modules/auth/containers'
import { WhiteSpace, WingBlank } from 'antd-mobile'

class Profile extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <ProfileCard />
        <WhiteSpace size='xl' />
        <WingBlank>
          <LogoutButton />
        </WingBlank>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Profile
