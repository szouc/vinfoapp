import { combineReducers } from 'redux-immutable'
import { reducer as formReducer } from 'redux-form/immutable'
import { reducer as navReducer } from '../nav'
import { reducer as entityReducer } from '../modules/entity'
import { reducer as authReducer } from '../modules/auth'
import { reducer as errorReducer } from '../modules/error'

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  entities: entityReducer,
  nav: navReducer,
  form: formReducer
})

export default rootReducer
