import AppStackNavigator from './AppStackNavigator'

import { createNavReducer } from '../redux/createNavReducer'

const navReducer = createNavReducer(AppStackNavigator)

export default navReducer
