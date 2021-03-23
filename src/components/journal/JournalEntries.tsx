import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';
import { TStore } from '../../store/store'
import { TNoteState } from '../../reducers/noteReducer'

export const JournalEntries = () => {

   const note = useSelector<TStore,TNoteState>(state => state.note)

    return (
        <div className="journal__entries">
            
            {
                note.notes.map( currentNote => (
                    <JournalEntry 
                        key={currentNote.id} 
                        { ...currentNote } 
                    />
                ))
            }

        </div>
    )
}
