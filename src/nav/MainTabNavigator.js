import { TransportMainScreen, DriverMainScreen, Maintain, FuelMainScreen } from '../screens'

import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width
const tabCount = 3
const tabWidth = deviceWidth / tabCount

const MainNavigator = TabNavigator(
  {
    Transport: {
      screen: TransportMainScreen,
      navigationOptions: {
        tabBarLabel: '运输',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name='truck' size={26} color={focused ? tintColor : null} />
        )
      }
    },
    Fuel: {
      screen: FuelMainScreen,
      navigationOptions: {
        tabBarLabel: '加油',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name='filter' size={26} color={focused ? tintColor : null} />
        )
      }
    },
    // Maintain: {
    //   screen: Maintain,
    //   navigationOptions: {
    //     tabBarLabel: '维修',
    //     tabBarIcon: ({ focused, tintColor }) => (
    //       <Icon name='wrench' size={26} color={focused ? tintColor : null} />
    //     )
    //   }
    // },
    Profile: {
      screen: DriverMainScreen,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name='user' size={26} color={focused ? tintColor : null} />
        )
      }
    }
  },
  {
    initialRouteName: 'Transport',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    backBehavior: 'none',
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#5f5',
      showIcon: true,
      // showLabel: false,
      labelStyle: {
        fontSize: 12,
        margin: 0
      },
      tabStyle: {
        width: tabWidth,
        height: 55
      },
      style: {
        backgroundColor: '#55f'
      }
    }
  }
)

export default MainNavigator
