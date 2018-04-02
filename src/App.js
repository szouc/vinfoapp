import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'
import immutPropsToJS from './utils/immutPropsToJS'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import { AppSwitchNavigator } from './nav'
import { addListener } from './redux/navReduxHelper'

const mapStateToProps = state => ({
  nav: state.get('nav')
})

class AppWithNavState extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props
    if (nav.routes[nav.index].routeName === 'Welcome') {
      return false
    }
    if (nav.routes[nav.index].routeName === 'Login') {
      return false
    }
    if (nav.routes[nav.index].index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  render() {
    const { dispatch, nav } = this.props
    return (
      <AppSwitchNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
      />
    )
  }
}

export default connect(mapStateToProps)(immutPropsToJS(AppWithNavState))
