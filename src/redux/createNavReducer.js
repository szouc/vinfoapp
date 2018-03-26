import { NavigationActions } from 'react-navigation'
import { fromJS } from 'immutable'

const Actions = [
  NavigationActions.BACK,
  NavigationActions.INIT,
  NavigationActions.NAVIGATE,
  NavigationActions.SET_PARAMS,
  NavigationActions.POP,
  NavigationActions.POP_TO_TOP,
  NavigationActions.PUSH,
  NavigationActions.REPLACE,
  NavigationActions.RESET,
  NavigationActions.URI,
  NavigationActions.COMPLETE_TRANSITION
]

const initAction = NavigationActions.init()

function createNavReducer(navigator) {
  const initialState = fromJS(
    navigator.router.getStateForAction(initAction, null)
  )
  return (state = initialState, action) => {
    if (Actions.includes(action.type)) {
      return fromJS(navigator.router.getStateForAction(action, state.toJS()))
    }
    return state
  }
}

export { createNavReducer, initAction }
