import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import TransportSubmitForm from './Form'
import { ErrorBoundary } from '../../../shared'
import { ActivityIndicator } from 'antd-mobile'
import moment from 'moment'
import { evolve } from 'ramda'

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
    const formatDate = date => moment(date).toDate()
    const TransformDate = {
      from: { date: formatDate },
      to: { date: formatDate }
    }
    const formatDateInitialValues = evolve(TransformDate, initialValues)

    // const formatDateInitialValues = {
    //   ...initialValues,
    //   from: {
    //     ...initialValues.from,
    //     date: moment(initialValues.from.date).toDate()
    //   },
    //   to: { ...initialValues.to, date: moment(initialValues.to.date).toDate() }
    // }
    return (
      <React.Fragment>
        <ActivityIndicator
          toast
          text='载入中...'
          animating={this.props.loading}
        />
        <ErrorBoundary>
          <TransportSubmitForm
            initialValues={formatDateInitialValues}
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
