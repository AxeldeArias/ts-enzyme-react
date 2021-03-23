import { Action, applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer, TAuthState } from '../reducers/authReducer'
import { uiReducer, TUiState } from '../reducers/uiReducer'
import { noteReducer, TNoteState } from '../reducers/noteReducer'


export type TStore = {
  auth: TAuthState,
  ui: TUiState,
  note: TNoteState,
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TStore,
  unknown,
  Action<string>
>

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    note: noteReducer,
})

export const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
      )
    )