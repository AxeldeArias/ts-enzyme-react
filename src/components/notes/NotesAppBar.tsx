import React, { ChangeEvent, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveNote, startUploading } from '../../actions/note'
import {TStore} from '../../store/store'
import {TNoteState} from '../../reducers/noteReducer'

export const NotesAppBar = () => {
    const dispatch = useDispatch()
    const fileRef = useRef<HTMLInputElement>(null);
    
    const {active: activeNote} = useSelector<TStore, TNoteState>(state => state.note)
    const handleOnSave = () => {
        activeNote && dispatch(saveNote(activeNote))
    }
    const handlePictureClick = () => {
        fileRef.current?.click()
    }
    const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        const files = e?.target?.files 
        if(files?.length && files[0]) {
            dispatch(startUploading(files[0]))
        }
    }
    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <input ref={fileRef} type="file" onChange={handleChangeInput} style={{display:"none"}}/>

            <div>
                <button 
                className="btn"
                onClick={handlePictureClick}>
                    Picture
                </button>

                <button className="btn" onClick={handleOnSave} >
                    Save
                </button>
            </div>
        </div>
    )
}
