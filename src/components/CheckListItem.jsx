import React from "react";  
import './CheckListItem.css'
const CheckListItem = (props) => {
        const {heading, description} = props.data
    return (
        <>
        <h3 style={{color: 'green'}} className='checkbox'> {heading}</h3> <p>{description}</p>
        <input type='checkbox'/>
        </>
    )
}

export default CheckListItem;