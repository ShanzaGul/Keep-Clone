import React from 'react'
import {useSelector} from 'react-redux'

function Notes() {
    const notes = useSelector(state => state.notes)
    console.log(notes, "bro I am here")
    
    return (
        <div>
            <h3>notes</h3>
        </div>
    )
}

export default Notes
