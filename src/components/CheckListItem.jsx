import React from "react";  
import './CheckListItem.css'
const CheckListItem = (props) => {
        const {id, text, completed} = props.data
        const {handleChange, handleDeleteClick} = props
    return (
        <>
        <h3 style={{color: 'green'}} className='checkbox'> 
        {id}. {text}  
        <input type='checkbox' id ={id} onChange={()=>handleChange(id)} checked = {completed} />
        <button id = {id} onClick={()=>handleDeleteClick(id)}>Delete Note</button>
        </h3>
       
        </>
    )
}

export default CheckListItem;