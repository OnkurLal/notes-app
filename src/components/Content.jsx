import React from "react";
import CheckListItem from './CheckListItem'

const Content = () => {
    return (
        <>
       <CheckListItem data={{heading:"Do Homework", description : 'I need to do my hw'}}/>
       <CheckListItem data={{heading:"Go to gym", description : 'Gotta workout'}}/>
       <CheckListItem data={{heading:"Go grocery shopping", description : 'I need eat'}}/>
       <CheckListItem data={{heading:"Date night", description : 'Plan out date night'}}/>
       </>
    )
}

export default Content;