// import AppStackNavigator from './AppStackNavigator'
// import { fromJS } from 'immutable'
// import { NavigationActions } from 'react-navigation'

// // Start with The Main screen
// const initialNavState = AppStackNavigator.router.getStateForAction(
//   NavigationActions.init()
// )

// const navReducer = (state = fromJS(initialNavState), action) => {
//   if (
//     action.type === NavigationActions.NAVIGATE ||
//     action.type === NavigationActions.BACK ||
//     action.type === NavigationActions.RESET ||
//     action.type === NavigationActions.INIT ||
//     action.type === NavigationActions.SET_PARAMS ||
//     action.type === NavigationActions.URI
//   ) {
//     console.log(action)
//     return fromJS(
//       AppStackNavigator.router.getStateForAction(action, state.toJS())
//     )
//   } else {
//     return state
//   }
// }

// export default navReducer
