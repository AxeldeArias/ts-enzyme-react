import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote, startDelete } from '../../actions/note'
import { useForm } from '../../hooks/useForm'
import { TNoteState } from '../../reducers/noteReducer'
import { TStore } from '../../store/store'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const dispatch = useDispatch();
    
    const active = useSelector<TStore, TNoteState["active"]>((state)=>state.note.active)
    const [formValues,handleInputChange,reset]= useForm(active)

    const currentNoteId = useRef(active?.id);
    
    useEffect(() => {
        if(currentNoteId.current !== active?.id){
            reset()
        }
        currentNoteId.current = active?.id;
    }, [active, reset])

    useEffect(()=>{
        formValues && dispatch(setActiveNote(formValues.id, formValues));
    },[ dispatch, formValues])

    const handleDelete = () => {
        active?.id && dispatch(startDelete(active.id))
    }
    
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formValues?.title}
                    onChange={handleInputChange}
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="Body"
                    name="body"
                    onChange={handleInputChange}
                    className="notes__textarea"
                    value={formValues?.body}
                ></textarea>

                {   
                    active?.imageUrl && (
                        <div className="notes__image">
                            <img 
                            src={`${active?.imageUrl}`}
                            alt="imagen"
                            />
                        </div>
                    )
                }
                
                <div className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </div>

            </div>

        </div>
    )
}
