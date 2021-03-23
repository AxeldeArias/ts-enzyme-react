import React from 'react'
import { TNote } from '../../types'
import dayjs from "dayjs";
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../actions/note'

export const JournalEntry = (note: TNote) => {
    const dispatch = useDispatch()    
    const {imageUrl, title, body, date} = note;
    const noteDate = dayjs(date)

    const handleClick = () => {
        dispatch(setActiveNote(note.id, note));
    }

    return (
        <div className="journal__entry pointer" onClick={handleClick}>
           { imageUrl &&
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url( ${imageUrl} )`
                }}
            ></div>
}
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date">
                <span>{noteDate.format("dddd")}</span>
                <h4>{noteDate.format("D")}</h4>
            </div>

        </div>
    )
}
