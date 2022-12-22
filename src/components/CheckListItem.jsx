import React from "react";  
import '../css/CheckListItem.css'
import Checkbox from '@mui/material/Checkbox';

const CheckListItem = (props) => {
        const {id, text, completed} = props.data
        const {handleChange} = props
    return (
        <>
        <h3 className='task'> 
        {text}  
        <Checkbox className='checkbox' id ={id} onChange={()=>handleChange(id)} checked = {completed} />
        </h3>
       
        </>
    )
}

export default CheckListItem;