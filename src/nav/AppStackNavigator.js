import Main from './MainTabNavigator'
import { StackNavigator } from 'react-navigation'
import { FuelAddScreen, FuelFetchScreen, TransportAcceptScreen } from '../screens'

const AppStackNavigator = StackNavigator(
  {
    Main: { screen: Main },
    FuelAdd: { screen: FuelAddScreen },
    FuelFetch: { screen: FuelFetchScreen },
    TransAccept: { screen: TransportAcceptScreen }
  },
  {
    initialRouteName: 'Main'
  }
)

export default AppStackNavigator
