import { db } from '../firebase/firebase-config'
import firebase from 'firebase'

export const loadNotes = async ( uid: string ) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes: firebase.firestore.DocumentData & {id:string}[]= [];

    notesSnap.forEach((snap)=>
        notes.push({
            id:snap.id,
        ...snap.data(),
        })
    )
    
    return notes;
}