import { AuthTypes, authTypes } from '../types'

export type authStateTypes = {
    uid?: string,
    name?: string
}

const initialState: authStateTypes = {}

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

