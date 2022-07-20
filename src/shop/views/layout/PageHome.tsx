import React from "react";
import styled from "styled-components";
//import Layout from "./Layout";
import Slideshow from "../components/Slideshow";
import { SLIDESHOWS_BANNER_URL } from "../../constants";


export default function View() {
    return (
        <>
            <Slideshow slideshows={SLIDESHOWS_BANNER_URL}/>
        </>
    )  
}