import React, {useState} from "react";
import CheckListItem from './CheckListItem';
import notes from "../notesData";

const Content = () => {
    const [notesData, setNotesData] = useState(notes);
    const handleChange = (id) => {
        const newNotes = notesData.map((note) =>{
            if (note.id === id) {
                note.completed = !note.completed;
            }
            return note;
        })
        setNotesData(newNotes);
    }
    const handleDeleteClick = (id) => setNotesData(notesData.filter(note => note.id !== id))
    
    const checkListItem= notesData.map(note => <CheckListItem handleChange={handleChange} key={note.id} handleDeleteClick={handleDeleteClick} data = {note}/>)
    
    return (
        <>
        {checkListItem}
        </>
    )
}
export default Content;