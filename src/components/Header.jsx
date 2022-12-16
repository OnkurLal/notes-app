import React from "react";
const Header = () => {
    const currentDate = new Date().toLocaleDateString();
    return (
        <>
        <h1>To Do List</h1>
        <h2>{currentDate}</h2>
        </>
    )
}

export default Header;