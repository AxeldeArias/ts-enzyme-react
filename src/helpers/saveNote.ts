import { db } from '../firebase/firebase-config'
import { TNote } from '../types/noteTypes'
import { AppThunk } from '../store/store';

export const saveNote = ( note: TNote ):AppThunk => async (dispatch, getState)=> {
    await db.doc(`${getState().auth.uid}/journal/notes/${note.id}`).update(note);
}