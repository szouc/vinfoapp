import { SwitchNavigator } from 'react-navigation'

import { Login, Welcome } from '../screens'
import Main from './MainTabNavigator'

const AppNavigator = SwitchNavigator(
  {
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    Main: { screen: Main }
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)

export default AppNavigator
