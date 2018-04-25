import Main from './MainTabNavigator'
import { StackNavigator } from 'react-navigation'
import {
  FuelAddScreen,
  FuelFetchScreen,
  TransportAcceptScreen,
  TransportActiveScreen,
  TransportSubmitScreen
} from '../screens'

const AppStackNavigator = StackNavigator(
  {
    Main: { screen: Main },
    FuelAdd: { screen: FuelAddScreen },
    FuelFetch: { screen: FuelFetchScreen },
    TransAccept: { screen: TransportAcceptScreen },
    TransActive: { screen: TransportActiveScreen },
    TransSubmit: { screen: TransportSubmitScreen }
  },
  {
    initialRouteName: 'Main'
  }
)

export default AppStackNavigator
