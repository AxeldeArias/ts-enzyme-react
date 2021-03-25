import { authReducer } from '../../reducers/authReducer'
import { authTypes } from '../../types';

describe('authReducer', () => {
    test('should login', () => {
        const initialState = {};
        const newState =  authReducer(initialState, {
            type: authTypes.login,
            payload: {
                uid: "1",
                displayName: "axel"
            }
        })

        expect(newState).toEqual({
            uid: "1",
            name: "axel"
        })
        
    })

    test('should logout', () => {
        const initialState = {
            uid: "1",
            name: "axel"
        }
        const newState =  authReducer(initialState, {
            type: authTypes.logout
        })

        expect(newState).toEqual({})
    })

    test('should show initial state', () => {
        const initialState = {
            uid: "1",
            name: "axel"
        }
        const newState =  authReducer(initialState, {
            type: authTypes.logout
        })

        expect(newState).toEqual({})
    })
})
