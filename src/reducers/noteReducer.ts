import { TNote, TNotesEnum, TActionNote } from '../types/noteTypes'


export type TNoteState = {
    notes: TNote[],
    active: null | TNote
}

const initialState = {
    notes: [],
    active: null 
}

export const noteReducer = ( state: TNoteState = initialState, action: TActionNote): TNoteState => {
    switch (action.type) {      
        case TNotesEnum.noteActive :
            return { 
                ...state,
                active: {
                    id:action.payload.id,
                    ...action.payload.note
                },
            }
        case TNotesEnum.addNote:
            return { 
                ...state,
                notes: [...state.notes, action.payload],
            }
        case TNotesEnum.noteLoad:
            return {
                ...state,
                notes: action.payload,
            }
        case TNotesEnum.noteUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    (currentNote) =>  currentNote.id === action.payload.id ? 
                        {...currentNote, ...action.payload}
                        : currentNote 
                )
            }
        case TNotesEnum.noteDelete:

        return  {
            ...state,
            notes: state.notes.filter(
                (currentNote) =>  currentNote.id !== action.payload.id 
            ),
            active: null,
        }

        case TNotesEnum.noteLogOutCleaning:
            return initialState;
             
        default:
            return state;
    }
}