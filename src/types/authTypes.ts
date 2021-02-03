export enum authTypes {
    login = "[Auth] Login",
    logout =  "[Auth] Logout",
}

interface LoginAction {
    type: authTypes.login,
    payload: {
        uid: number
        displayName: string
    },
}

interface LogoutAction {
    type:  authTypes.logout,
    meta: {
        timestamp: number
    }
}

export type AuthTypes = LoginAction | LogoutAction
