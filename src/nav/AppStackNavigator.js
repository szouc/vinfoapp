import { StackNavigator } from 'react-navigation'

import { Login, Welcome } from '../screens'

const AppNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome },
    Login: { screen: Login }
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
