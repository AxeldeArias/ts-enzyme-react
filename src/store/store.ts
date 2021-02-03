import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer, authStateTypes } from '../reducers/authReducer'
import { uiReducer, uiStateTypes } from '../reducers/uiReducer'


export type storeType = {
  auth: authStateTypes,
  ui: uiStateTypes
}

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
})

export const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
      )
    )