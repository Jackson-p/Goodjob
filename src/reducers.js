import { combineReducers } from 'redux'
import { changeAuth } from './Auth.redux'
import { adjustLiao } from './index.redux'
const Reducers = combineReducers({changeAuth, adjustLiao})
export default Reducers