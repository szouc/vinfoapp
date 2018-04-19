import React, { Component } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import FuelAddForm from './AddForm'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator } from 'antd-mobile'

class FuelAddFormWithHardwareBack extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.backToMain(this.props.username)
    return true
  }

  render() {
    const { username, vehicles, initialValues, onSubmit } = this.props
    const onUserSubmit = onSubmit(username)
    return (
      <View style={styles.container}>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
        <ErrorBoundary>
          <FuelAddForm
            vehicles={vehicles}
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

export default FuelAddFormWithHardwareBack
