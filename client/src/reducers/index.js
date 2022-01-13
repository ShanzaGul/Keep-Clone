import {combineReducers} from 'redux'

import notes from './notes'
import auth from './auth'

export const reducers = combineReducers({
    notes,
    auth
})