import React, { Component } from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'
import TransportGrid from '../TransportGrid'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator } from 'antd-mobile'

class TransportMain extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    this.props.fetchTransports(this.props.username)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    return false
  }

  render() {
    const { navToAccept, navToActive, navToList } = this.props
    return (
      <View style={styles.container}>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
        <View style={styles.title}>
          <Text>运输页面</Text>
        </View>
        <View style={styles.grid}>
          <ErrorBoundary>
            <TransportGrid
              navToAccept={navToAccept}
              navToActive={navToActive}
              navToList={navToList}
            />
          </ErrorBoundary>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  vehicle: {
    flex: 1
  },
  grid: {
    flex: 2
  }
})

export default TransportMain
