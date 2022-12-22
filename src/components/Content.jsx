import React, {useState} from "react";
import CheckListItem from './CheckListItem';
import notes from "../data/notesData";
import Button from "@mui/material/Button";
import '../css/Content.css'
import TextField from '@mui/material/TextField';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { SignalWifiStatusbarNullRounded } from "@mui/icons-material";

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
    
    const notCompleted= notesData.map(note => {
        if (!note.completed){
            return (<CheckListItem handleChange={handleChange} key={note.id} data = {note}/>)
        }
    })
    
    const completedMessage = () => {
        if (notesData.filter(note=>!note.completed).length === 0) {
            return 'Hurray All Tasks Have Been Completed!'
        }
}
    const completed = notesData.map(note => {
        if (note.completed){
            return (<CheckListItem handleChange={handleChange} key={note.id} data = {note}/>)
        }
    })
    const handleAddItem = () => {
        const tempArray = [...notesData]
        tempArray.push({id: tempArray.length +1, text:addItemValue, completed:false})
        setNotesData(tempArray)
        setAddItemValue('')
    }
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter'){
        const tempArray = [...notesData]
        tempArray.push({id: tempArray.length +1, text:addItemValue, completed:false})
        setNotesData(tempArray)
        setAddItemValue('')
        }
    }

    const handleSeeCompletedTasks = () => {
        setSeeCompleted(!seeCompleted)
    }
    
    return (
        <>
        <div className="list">
            <div id="addItem">
            <TextField id="outlined-basic" className="addItemComponent" label="Add Task" size="small" variant="outlined" value={addItemValue} onKeyPress={handleKeyPress} onChange={(e) => {setAddItemValue(e.target.value)}}/>
            <Button variant="contained" id='addButton' className="addItemComponent" size='medium' onClick={handleAddItem}><AddCircleSharpIcon size="large" id='addButton'></AddCircleSharpIcon></Button>
            </div>       
        {seeCompleted ? completed: notCompleted}
        <h3>{completedMessage()}</h3>
        <Button variant="contained" id="completedButton" size='medium' onClick={handleSeeCompletedTasks}>{seeCompleted ? 'See Uncompleted Tasks': 'See Completed Tasks'}</Button>
        </div>
        </>
    )
}
export default Content;