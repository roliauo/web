import React, {useState} from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <Link to='/'> Home </Link>
            <Link to='/products'> Products </Link>
        </nav>
    )
}