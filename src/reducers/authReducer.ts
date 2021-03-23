import { AuthTypes, authTypes } from '../types'

export type TAuthState = {
    uid?: string,
    name?: string
}

const initialState: TAuthState = {}

export const authReducer = (state = initialState, action: AuthTypes) => {
    switch (action.type) {
        case authTypes.login:
                return {
                    uid: action.payload.uid,
                    name: action.payload.displayName
                }
            case authTypes.logout:
                return { }    
        default:
        return state;
    }
}

