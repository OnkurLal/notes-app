import React, {useState} from "react";
import CheckListItem from './CheckListItem';
import notes from "../data/notesData";
import Button from "@mui/material/Button";
import '../css/Content.css'
import TextField from '@mui/material/TextField';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

const Content = () => {
    const [notesData, setNotesData] = useState(notes);
    const [addItemValue, setAddItemValue] = useState('');
    const [seeCompleted, setSeeCompleted] = useState(false);

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
    const handleSeeCompletedTasks = () => {
        setSeeCompleted(!seeCompleted)
        return seeCompleted ? notesData.filter(note => !note.completed) : notesData.filter(note => note.completed)
    }
    
    return (
        <>
        <div className="list">
            <div id="addItem">
            <TextField id="outlined-basic" className="addItemComponent" label="Add Item" size="small" variant="outlined" value={addItemValue} onChange={(e) => {setAddItemValue(e.target.value)}}/>
            
            <Button  type="submit" variant="contained" id='addButton' className="addItemComponent" size='medium' onSubmit={handleAddItem}><AddCircleSharpIcon size="large" id='addButton'></AddCircleSharpIcon></Button>
            </div>
        {checkListItems}
        <Button variant="contained" id="completedButton" size='medium' onClick={handleSeeCompletedTasks}>{seeCompleted ? 'See Uncompleted Tasks': 'See Completed Tasks'}</Button>
        </div>
        </>
    )
}
export default Content;