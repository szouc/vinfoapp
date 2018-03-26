import { combineReducers } from 'redux-immutable'
import { reducer as formReducer } from 'redux-form/immutable'
import { reducer as navReducer } from '../nav'

const rootReducer = combineReducers({
  nav: navReducer,
  form: formReducer
})

export default rootReducer
