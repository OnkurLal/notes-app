import React, {useState} from "react";
import CheckListItem from './CheckListItem';
import notes from "../data/notesData";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

const Content = () => {
    const [notesData, setNotesData] = useState(notes);
    const [addItemValue, setAddItemValue] = useState('');

    const handleChange = (id) => {
        const newNotes = notesData.map((note) =>{
            if (note.id === id) {
                note.completed = !note.completed;
            }
            return note;
        })
        setNotesData(newNotes);
    }
    
    const checkListItems= notesData.map(note => {
        if (!note.completed){
            return (<CheckListItem handleChange={handleChange} key={note.id} data = {note}/>)
        }
    })
    
    const handleAddItem = () => {
        const tempArray = [...notesData]
        tempArray.push({id: tempArray.length +1, text:addItemValue, completed:false})
        setNotesData(tempArray)
        setAddItemValue('')
    }

    
    return (
        <>
        <div>
        <TextField id="outlined-basic" label="Add Item" variant="outlined" value={addItemValue} onChange={(e) => {setAddItemValue(e.target.value)}}/>
        <Button variant="outlined" className = 'p-3' onClick={handleAddItem}>Submit</Button>
        </div>
        {checkListItems}
        </>
    )
}
export default Content;