import Main from './MainTabNavigator'
import { StackNavigator } from 'react-navigation'
import {
  FuelAddScreen,
  FuelFetchScreen,
  MaintainAddScreen,
  MaintainFetchScreen,
  TransportAcceptScreen,
  TransportActiveScreen,
  TransportCheckScreen,
  TransportListScreen,
  TransportSubmitScreen,
  ChangePasswordScreen
} from '../screens'

const AppStackNavigator = StackNavigator(
  {
    Main: { screen: Main },
    FuelAdd: { screen: FuelAddScreen },
    FuelFetch: { screen: FuelFetchScreen },
    MaintainAdd: { screen: MaintainAddScreen },
    MaintainFetch: { screen: MaintainFetchScreen },
    TransAccept: { screen: TransportAcceptScreen },
    TransActive: { screen: TransportActiveScreen },
    TransCheck: { screen: TransportCheckScreen },
    TransList: { screen: TransportListScreen },
    TransSubmit: { screen: TransportSubmitScreen },
    ChangePassword: { screen: ChangePasswordScreen }
  },
  {
    initialRouteName: 'Main'
  }
)

export default AppStackNavigator
