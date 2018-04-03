import React from 'react'
import { BackHandler } from 'react-native'
import { backRequest } from '../../modules/fuel/actions'
import { connect } from 'react-redux'
import immutPropsToJS from '../../utils/immutPropsToJS'
import { BackButton, FuelAddForm } from '../../modules/fuel/containers'

const WithHardwareBack = Component => {
  class WrapperComponent extends React.Component {
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
      return <Component />
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      username: state.getIn(['auth', 'username'])
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      backToMain: username => {
        dispatch(backRequest(username))
      }
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(
    immutPropsToJS(WrapperComponent)
  )
}

const FuelAddFormWithBack = WithHardwareBack(FuelAddForm)

export default class FuelAddScreen extends React.Component {
  static navigationOptions = {
    title: 'whatever',
    headerLeft: () => <BackButton />
  }

  render() {
    return <FuelAddFormWithBack />
  }
}
