export enum uiTypes {
    setError = "[Auth] SetError",
    removeError =  "[Auth] RemoveError",
    uiStartLoading = '[UI] Start loading',
    uiFinishLoading = '[UI] Finish loading',
}

interface SetErrorAction {
    type: uiTypes.setError,
    payload: string,
}

interface RemoveAction {
    type:  uiTypes.removeError,
}


interface StartLoading {
    type: uiTypes.uiStartLoading,
}

interface FinishLoading {
    type: uiTypes.uiFinishLoading,
}

export type UITypes = SetErrorAction | RemoveAction | StartLoading | FinishLoading
