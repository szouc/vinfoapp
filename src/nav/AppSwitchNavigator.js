import { SwitchNavigator } from 'react-navigation'

import { Login, Welcome, AuthLoading } from '../screens'
import Main from './MainTabNavigator'

const AppNavigator = SwitchNavigator(
  {
    AuthLoading: { screen: AuthLoading },
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    Main: { screen: Main }
  },
  {
    initialRouteName: 'Welcome'
  }
)

export default AppNavigator
