import AppSwitchNavigator from './AppSwitchNavigator'

import { createNavReducer } from '../redux/createNavReducer'

const navReducer = createNavReducer(AppSwitchNavigator)

export default navReducer
