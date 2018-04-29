import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import TransportSubmitForm from './Form'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator } from 'antd-mobile'
import moment from 'moment'
import R from 'ramda'

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
    const { username, saveValues, initialValues, onSave, onSubmit } = this.props
    const { from, to } = initialValues
    const fromDate = moment(from.date).toDate()
    const toDate = moment(to.date).toDate()
    initialValues.from.date = fromDate
    initialValues.to.date = toDate
    return (
      <React.Fragment>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
        <ErrorBoundary>
          <TransportSubmitForm
            initialValues={initialValues}
            username={username}
            transportId={initialValues._id}
            onSubmit={onSubmit}
            onSave={onSave}
            saveValues={saveValues}
            loading={this.props.formLoading}
          />
        </ErrorBoundary>
      </React.Fragment>
    )
  }
}

export default TransportSubmitFormWithHardwareBack
