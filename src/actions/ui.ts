import { uiTypes } from '../types/uiTypes'

export const setError = (error: string) => ({
    type: uiTypes.setError,
    payload: error
})

export const removeError = () => ({
    type: uiTypes.removeError,  
})

export const uiStartLoading = () => ({
    type: uiTypes.uiStartLoading,  
})

export const uiFinishLoading = () => ({
    type: uiTypes.uiFinishLoading,  
})