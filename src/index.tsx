import React from "react";
import {createRoot} from "react-dom";

const AppLinks = () => {

    return (
        <>
            <a href="./"> Home </a> |
            <a href="./app_redux"> Apps </a> |
            <a href="./shop"> Shop </a> 
        </>      
    )
}

const root = createRoot(document.getElementById('root'));

root.render(
    <AppLinks/>
)