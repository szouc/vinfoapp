import React, { Component } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import TransportSubmitForm from './Form'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator } from 'antd-mobile'

class TransportSubmitFormWithHardwareBack extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.backToActive()
    return true
  }

  render() {
    const { username, initialValues, onSubmit } = this.props
    const onUserSubmit = onSubmit(username)
    return (
      <View style={styles.container}>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
        <ErrorBoundary>
          <TransportSubmitForm
            initialValues={initialValues}
            onSubmit={onUserSubmit}
            loading={this.props.formLoading}
          />
        </ErrorBoundary>
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

export default TransportSubmitFormWithHardwareBack
