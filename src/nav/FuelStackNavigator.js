import { StackNavigator } from 'react-navigation'

import {
  FuelAddScreen,
  FuelFetchScreen
} from '../screens'

const FuelNavigator = StackNavigator(
  {
    FuelAdd: { screen: FuelAddScreen },
    FuelFetch: { screen: FuelFetchScreen }
  },
  {
    headerMode: 'none'
  }
)

export default FuelNavigator
