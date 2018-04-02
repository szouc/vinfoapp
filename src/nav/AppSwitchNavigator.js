import { SwitchNavigator } from 'react-navigation'

import { Login, Welcome, AuthLoading } from '../screens'
import App from './AppStackNavigator'

const AppSwitchNavigator = SwitchNavigator(
  {
    AuthLoading: { screen: AuthLoading },
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    App: { screen: App }
  },
  {
    initialRouteName: 'Welcome'
  }
)

export default AppSwitchNavigator
