import Reactotron from 'reactotron-react-native'

// import Reactotron, {
//   trackGlobalErrors,
//   asyncStorage
// } from 'reactotron-react-native'

import Immutable from 'immutable'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

Reactotron.configure({
  name: 'React Native Demo',
  host: '192.168.1.2',
  port: 9090,
  socketIoProperties: {
    reconnection: true,
    reconnectionDelay: 2000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5
  }
})

Reactotron.useReactNative() // add all built-in react native plugins
// Reactotron.use(trackGlobalErrors())
// Reactotron.use(asyncStorage())
Reactotron.use(
  reactotronRedux({
    onBackup: state => state.toJS(),
    onRestore: state => Immutable.fromJS(state)
  })
)
Reactotron.use(sagaPlugin())
Reactotron.connect()

Reactotron.clear()

console.tron = Reactotron
