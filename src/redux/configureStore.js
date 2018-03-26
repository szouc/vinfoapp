// @flow

import '../settings/reactotronConfig'

import { autoRehydrate, persistStore } from 'redux-persist-immutable'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

import { AsyncStorage } from 'react-native'
import type { fromJS as Immut } from 'immutable'
import Immutable from 'immutable'
import Reactotron from 'reactotron-react-native'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'

// configuring saga middleware
const sagaMonitor = Reactotron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
})
const navMiddleware = createReactNavigationReduxMiddleware('root', state =>
  state.get('nav')
)
export const addListener = createReduxBoundAddListener('root')
const middleware = [sagaMiddleware, navMiddleware]
const enhancer = composeWithDevTools(
  applyMiddleware(...middleware),
  autoRehydrate()
)

const defaultState: Immut = Immutable.fromJS({})

export default function configureStore(initialState: Immut = defaultState) {
  const store = Reactotron.createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleware.run(rootSaga)

  persistStore(store, { storage: AsyncStorage, whitelist: ['auth'] })

  return store
}
