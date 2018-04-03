import Main from './MainTabNavigator'
import { StackNavigator } from 'react-navigation'
import { FuelAddScreen, FuelFetchScreen } from '../screens'

const AppStackNavigator = StackNavigator({
  Main: { screen: Main },
  FuelAdd: { screen: FuelAddScreen },
  FuelFetch: { screen: FuelFetchScreen }
},
{
  initialRouteName: 'Main'
}
)

export default AppStackNavigator
