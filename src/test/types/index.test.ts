import { authTypes } from '../../types'
import { TNotesEnum } from '../../types'
import { uiTypes } from '../../types'
describe('redux types', () => {
    test('redux types enums ', () => {
        expect(authTypes).toEqual({
            login: "[Auth] Login",
            logout: "[Auth] Logout",
        }) 

        expect(TNotesEnum).toEqual({
            addNote: "[Note] New Note",
            removeNote:  "[Note] Remove Note",
            noteLoad:  "[Note] Set Load Note",
            saveNote:  "[Note] Save Note",
            setActiveNote: "[Note] Set Active Note",
            noteUpdated:  "[Note] Updated note",
            noteDelete:  "[Note] Delete Note",
            noteLogOutCleaning:  "[Note] Logout Cleaning Note",
            noteActive: "[Note] Set Node Active",
            startLoadingNote: "[Note] Start Loading"
        }) 

        expect(uiTypes).toEqual({
            setError: "[Auth] SetError",
            removeError:  "[Auth] RemoveError",
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        }) 
    })
    
   
})
