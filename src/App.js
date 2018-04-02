import React, { Component } from 'react'
import { connect } from 'react-redux'
import immutPropsToJS from './utils/immutPropsToJS'
import { addNavigationHelpers } from 'react-navigation'
import { AppSwitchNavigator } from './nav'
import { addListener } from './redux/navReduxHelper'

const mapStateToProps = state => ({
  nav: state.get('nav')
})

class AppWithNavState extends Component {
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
