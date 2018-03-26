import {
  NavigationActions,
  StackActions,
  DrawerActions
} from 'react-navigation'

const Actions = [
  NavigationActions.BACK,
  NavigationActions.INIT,
  NavigationActions.NAVIGATE,
  NavigationActions.SET_PARAMS,
  StackActions.POP,
  StackActions.POP_TO_TOP,
  StackActions.PUSH,
  StackActions.RESET,
  StackActions.REPLACE,
  StackActions.COMPLETE_TRANSITION,
  DrawerActions.OPEN_DRAWER,
  DrawerActions.CLOSE_DRAWER,
  DrawerActions.TOGGLE_DRAWER
]

console.log(Actions)
