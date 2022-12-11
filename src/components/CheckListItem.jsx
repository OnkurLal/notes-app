import React from "react";  
import './CheckListItem.css'
const CheckListItem = (props) => {
        const {id, text, completed} = props.data
    return (
        <>
        <h3 style={{color: 'green'}} className='checkbox'> {id}. {text}  <input type='checkbox' checked = {completed} /></h3>
       
        </>
    )
}

export default CheckListItem;