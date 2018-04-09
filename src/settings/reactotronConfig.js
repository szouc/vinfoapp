import Reactotron, {
  trackGlobalErrors,
  asyncStorage
} from 'reactotron-react-native'

import Immutable from 'immutable'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

Reactotron.configure({
  name: 'React Native Demo',
  host: '192.168.1.2',
  port: 9090
})
Reactotron.useReactNative()
Reactotron.use(trackGlobalErrors())
Reactotron.use(asyncStorage())
Reactotron.use(reactotronRedux({ onRestore: state => Immutable.fromJS(state) }))
Reactotron.use(sagaPlugin())
Reactotron.connect()

Reactotron.clear()

console.tron = Reactotron
