import React, { Component } from 'react'
import Card from '../ProfileCard'
import { View, StyleSheet } from 'react-native'
import Carousel from '../Carousel'
import { ErrorBoundary } from '../../../shared'
import { WhiteSpace, WingBlank, ActivityIndicator } from 'antd-mobile'
import { LogoutButton } from '../../../auth/containers'

class DriverMain extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.username)
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
        <View style={styles.carousel}>
          <Carousel />
        </View>
        <View style={styles.card}>
          <WingBlank>
            <ErrorBoundary>
              <Card profile={this.props.profile} />
            </ErrorBoundary>
            <WhiteSpace size='xl' />
            <LogoutButton />
          </WingBlank>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start'
  },
  card: {
    flex: 2,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

export default DriverMain
