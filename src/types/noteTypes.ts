export enum TNotesEnum {
    addNote = "[Note] New Note",
    removeNote =  "[Note] Remove Note",
    noteLoad =  "[Note] Set Load Note",
    saveNote =  "[Note] Save Note",
    setActiveNote = "[Note] Set Active Note",
    noteUpdated =  "[Note] Updated note",
    noteDelete =  "[Note] Delete Note",
    noteLogOutCleaning =  "[Note] Logout Cleaning Note",
    noteActive = "[Note] Set Node Active",
    startLoadingNote = "[Note] Start Loading"
}

export type TNote = {
    id: string,
    title?: string,
    body?: string,
    imageUrl?: string,
    date?: number
}

type TSetActiveNote = {
    type: TNotesEnum.noteActive,
    payload: { 
        id: TNote['id'],
        note:  Omit<TNote, "id">,
    } 
}

type TLoadNotes = {
    type: TNotesEnum.noteLoad,
    payload: TNote[]  
}

type TSaveNote = {
    type: TNotesEnum.saveNote,
    payload: TNote[]  
}

type TStartLoadingNotes = {
    type: TNotesEnum.startLoadingNote,
    payload: TNote[]  
}

type TUpdateNote = {
    type: TNotesEnum.noteUpdated,
    payload: TNote  
}

type TDeleteNote = {
    type: TNotesEnum.noteDelete,
    payload: {
        id: TNote["id"];
    }
}

type TLogoutCleaning = {
    type: TNotesEnum.noteLogOutCleaning,
}

type TAddNewNote = {
    type: TNotesEnum.addNote,
    payload:  TNote
}

export type TActionNote = 
TSetActiveNote |
TLoadNotes |
TStartLoadingNotes |
TSaveNote |
TUpdateNote |
TDeleteNote |
TLogoutCleaning |
TAddNewNote
