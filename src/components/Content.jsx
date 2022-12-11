import React from "react";
import CheckListItem from './CheckListItem'
import notes from "../notesData";

const Content = () => {
    const checkListItem= notes.map(item => <CheckListItem data = {item}/>)
    return (
        checkListItem
    )
}

export default Content;