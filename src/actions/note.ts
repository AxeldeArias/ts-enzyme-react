import { db } from '../firebase/firebase-config'
import { loadNotes } from '../helpers/loadNotes'
import { AppThunk } from '../store/store'
import { TActionNote, TNote, TNotesEnum } from '../types/noteTypes'
import { fileUpload } from '../helpers/fileUpload'

export const startNewNote = (): AppThunk => 
    async (dispatch, getState) => {
        const { uid } = getState().auth
        const newNote = {
            title:"",
            body:"",
            date: new Date().getTime(),
        }
        const doc = await db.collection(
            `${uid}/journal/notes`
        ).add(newNote)
        dispatch(setActiveNote(doc.id, newNote))
        dispatch(addNewNote({id:doc.id, ...newNote}));
    }
    
export const setActiveNote = (id: TNote["id"], note: Partial<TNote>): TActionNote => ({
    type: TNotesEnum.noteActive,
    payload: {
        id,
        note
    }
})

export const addNewNote = (note: TNote): TActionNote => ({
    type: TNotesEnum.addNote,
    payload: note
})

export const setNotes = (notes : TNote[]): TActionNote => ({
    type: TNotesEnum.noteLoad,
    payload: notes,
})  

export const startLoadingNotes = 
    (): AppThunk => 
    async (dispatch, getState) => {
        let uid = getState().auth.uid;
        uid && dispatch(setNotes(await loadNotes(uid)))
    }

export const saveNote = 
    ({id, ...note}: TNote) : AppThunk => 
    async (dispatch, getState) => {
        try {
            await db.doc(`${getState().auth.uid}/journal/notes/${id}`).update(note);
            dispatch(refreshNote({id, ...note}));
        } catch (error) {
            console.log({error})
            
        }
}

export const refreshNote = (note: TNote): TActionNote=> ({
    type: TNotesEnum.noteUpdated,
    payload: note
})


export const startUploading = 
    (file: File): AppThunk =>
    async (dispatch, getState) => { 
    const currentNote = getState().note.active;
    const fileResp = await fileUpload(file);
    console.log({fileResp})
    currentNote && dispatch(setActiveNote(currentNote.id, {imageUrl: fileResp}))
}

export const startDelete = 
    (noteId:TNote["id"]): AppThunk =>
    async (dispatch, getState) => { 
        try {
            await db.doc(`${getState().auth.uid}/journal/notes/${noteId}`).delete();
            dispatch(deleteNote(noteId));
        } catch (error) {
            console.log({error})
            
        }

}

export const deleteNote = (id: TNote["id"]) => {
    return {
        type: TNotesEnum.noteDelete,
        payload:{
            id
        }
    }
}


export const logoutCleaning = () => {
    return {
        type: TNotesEnum.noteLogOutCleaning,
    }
}