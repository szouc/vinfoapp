import React, { Component } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import AddForm from './AddForm'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator } from 'antd-mobile'

class AddFormWithHardwareBack extends Component {
  constructor(props) {
    super(props)
    this.onUserSubmit = props.onSubmit(props.username)
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    this.props.backToMain()
    return true
  }

  render() {
    const { vehicles, initialValues, loading, formLoading } = this.props
    return (
      <View style={styles.container}>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={loading}
        />
        <ErrorBoundary>
          <AddForm
            vehicles={vehicles}
            initialValues={initialValues}
            onSubmit={this.onUserSubmit}
            loading={formLoading}
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

export default AddFormWithHardwareBack
