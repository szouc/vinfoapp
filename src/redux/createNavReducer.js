import { NavigationActions } from 'react-navigation'
import { fromJS } from 'immutable'

const initAction = NavigationActions.init()

function createNavReducer(navigator) {
  const initialState = fromJS(
    navigator.router.getStateForAction(initAction, null)
  )
  return (state = initialState, action) => {
    if (
      action.type === NavigationActions.NAVIGATE ||
      action.type === NavigationActions.BACK ||
      action.type === NavigationActions.INIT ||
      action.type === NavigationActions.SET_PARAMS
    ) {
      return fromJS(navigator.router.getStateForAction(action, state.toJS()))
    }
    return state
  }
}

export { createNavReducer, initAction }
