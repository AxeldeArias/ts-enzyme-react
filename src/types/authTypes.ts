export enum authTypes {
    login = "[Auth] Login",
    logout =  "[Auth] Logout",
}

interface LoginAction {
    type: authTypes.login,
    payload: {
        uid: string
        displayName: string
    },
}

interface LogoutAction {
    type:  authTypes.logout,
}

export type AuthTypes = LoginAction | LogoutAction
