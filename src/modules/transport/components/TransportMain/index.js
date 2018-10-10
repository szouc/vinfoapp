import React, { Component } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import TransportGrid from '../TransportGrid'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator, WhiteSpace } from 'antd-mobile'
import Carousel from '../Carousel'

class TransportMain extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    this.props.initialFetchTransports(this.props.username)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    return false
  }

  render() {
    const {
      navToAccept,
      navToActive,
      navToCheck,
      navToList,
      assignCount,
      checkCount,
      acceptCount
    } = this.props
    const gridData = [
      {
        icon: 'check-square',
        text: '接单',
        badge: assignCount,
        action: navToAccept
      },
      {
        icon: 'upload',
        text: '提交',
        badge: acceptCount,
        action: navToActive
      },
      {
        icon: 'stack-overflow',
        text: '待检',
        badge: checkCount,
        action: navToCheck
      },
      {
        icon: 'list-alt',
        text: '查询',
        action: navToList
      }
    ]
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
        <WhiteSpace size='xl' />
        <View style={styles.content}>
          <View style={styles.grid}>
            <ErrorBoundary>
              <TransportGrid data={gridData} />
            </ErrorBoundary>
          </View>
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
  content: {
    flex: 2,
    alignSelf: 'stretch'
  },
  grid: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'stretch'
  }
})

export default TransportMain
