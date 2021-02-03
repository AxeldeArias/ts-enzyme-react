import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import Swal from 'sweetalert2'
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import {authTypes, AuthTypes} from '../types/authTypes'
import { setError, uiFinishLoading, uiStartLoading } from './ui'

export const login = (uid:string, displayName:string) => ({
    type: authTypes.login,
    payload: {
        uid,
        displayName
    }
})

export const logout = () => ({
    type: authTypes.logout
})

export const startLogout = () => async (dispatch: Dispatch)=>{
    await firebase.auth().signOut();
    dispatch(logout());
}

export const startRegisterWithEmailPasswordName = 
     (name: string, email: string, password: string) => async (dispatch: Dispatch)=> {
        try {
            const {user} = await firebase.auth().createUserWithEmailAndPassword(email,password);            
            await user?.updateProfile({displayName:name})
            dispatch(login(user?.uid ?? "",user?.displayName ?? ""))
        } catch (error) {
            
        }

    }

export const startLoginEmailAndPassword = (email: string,password: string) => async (dispatch: Dispatch)=> {
    try {
        dispatch(uiStartLoading())
        const {user} = await firebase.auth().signInWithEmailAndPassword(email,password);
        dispatch(login(user?.uid ?? "",user?.displayName ?? ""))
    } catch (e) {
        dispatch(setError("Usuario Incorrecto"))   
        Swal.fire("Error", e.message, "error");
    }finally{ 
        dispatch(uiFinishLoading())
    }

}
export const startGoogleLogin = (): ThunkAction<void, AuthTypes, null, Action<string>> => (dispatch)=> {
    try {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user})=>{
            dispatch(login(user?.uid ?? "" , user?.displayName ?? ""))
        })
    } catch (error) {
        
    }

}