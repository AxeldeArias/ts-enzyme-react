import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { useSelector } from 'react-redux';
import { TStore } from '../../store/store';
import { TNoteState } from '../../reducers/noteReducer';
import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {
    const { active } = useSelector<TStore,TNoteState>(state => state.note)
    return (
        <div className="journal__main-content">
            
            <Sidebar />
            <main>
                { 
                    active ? 
                        <NoteScreen /> 
                        : <NothingSelected />
                }

            </main>


        </div>
    )
}
