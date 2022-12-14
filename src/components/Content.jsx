import React, {useState} from "react";
import CheckListItem from './CheckListItem';
import notes from "../notesData";

const Content = () => {
    const [notesData, setNotesData] = useState(notes);
    // const [firstName, setFirstName] = useState('Onkur');
    const checkListItem= notesData.map(item => <CheckListItem data = {item}/>)
    const [count, setCount] = useState(0);
    // const handlePlusButton = ()=> setCount(count + 1)
    // const handleMinusButton = ()=> setCount(count - 1)
    const handleClick = (e) => {
        e.target.name === 'plus' ? setCount(count + 1) : setCount(count - 1)
    }
    return (
        <>
        {/* <div className = 'counter'> */}
        {/* <button onClick= {handleClick} name='plus'>+</button>
        <h3>Count: {count}</h3>
        <button onClick={handleClick}>-</button> */}
        {/* <div><h1>{firstName}</h1></div> */}
         {checkListItem}
         {/* </div> */}
        </>
    )
}
export default Content;