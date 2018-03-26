/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import moment from 'moment'
import Vinfo from './src'

moment.locale('zh-cn')
export default class App extends Component<Props> {
  render() {
    return <Vinfo />
  }
}
