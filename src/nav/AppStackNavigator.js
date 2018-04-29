import Main from './MainTabNavigator'
import { StackNavigator } from 'react-navigation'
import {
  FuelAddScreen,
  FuelFetchScreen,
  TransportAcceptScreen,
  TransportActiveScreen,
  TransportCheckScreen,
  TransportListScreen,
  TransportSubmitScreen
} from '../screens'

const AppStackNavigator = StackNavigator(
  {
    Main: { screen: Main },
    FuelAdd: { screen: FuelAddScreen },
    FuelFetch: { screen: FuelFetchScreen },
    TransAccept: { screen: TransportAcceptScreen },
    TransActive: { screen: TransportActiveScreen },
    TransCheck: { screen: TransportCheckScreen },
    TransList: { screen: TransportListScreen },
    TransSubmit: { screen: TransportSubmitScreen }
  },
  {
    initialRouteName: 'Main'
  }
)

export default AppStackNavigator
