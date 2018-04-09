import React, { Component } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import FuelAddForm from './AddForm'
import { ErrorBoundary } from '../../../shared'

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
        <ErrorBoundary>
          <FuelAddForm
            vehicles={vehicles}
            initialValues={initialValues}
            onSubmit={onUserSubmit}
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
