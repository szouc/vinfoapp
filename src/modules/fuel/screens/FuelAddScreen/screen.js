import React from 'react'
import { BackHandler } from 'react-native'
import { backRequest } from '../../modules/fuel/actions'
import { connect } from 'react-redux'
import immutPropsToJS from '../../utils/immutPropsToJS'
import { BackButton, FuelAddForm } from '../../modules/fuel/containers'
import { withNavigation } from 'react-navigation'

const WithHardwareBack = Component => {
  class WrapperComponent extends React.Component {
    static navigationOptions = {
      title: '新增加油记录',
      headerLeft: (<BackButton />)
    }

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
      const WithNavComponent = withNavigation(Component)
      return <WithNavComponent />
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

export default WithHardwareBack(FuelAddForm)
