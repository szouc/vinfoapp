import { Image, Text, View, StyleSheet } from 'react-native'

import React from 'react'
import { COMPANY_NAME } from '../../../settings/configs'

class Logo extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 160, height: 120 }}
          source={require('../../../images/logo.png')}
        />
        <Text style={styles.logoText}>{COMPANY_NAME}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    fontSize: 28,
    marginVertical: 15,
    color: 'rgba(255,255,255,0.7)'
  }
})

export default Logo
