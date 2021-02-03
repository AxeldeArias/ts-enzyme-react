import { uiTypes, UITypes } from '../types'

export type uiStateTypes = {
    loading: boolean,
    msgError: string | null,
}

const initialState: uiStateTypes = { 
    loading: false,
    msgError: null,
}

export const uiReducer = ( state = initialState, action: UITypes)=>{
    switch (action.type) {
        case uiTypes.setError:
            return {
                ...state,
                msgError: action.payload,
            }
        case uiTypes.removeError:
            return {
                ...state,
                msgError: null,
            }
        case uiTypes.uiStartLoading:
            return {
                ...state,
                loading: true,
            }
        case uiTypes.uiFinishLoading:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}