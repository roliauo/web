import React from "react";
import styled from "styled-components";
import './root.css';
import Layout from "./components/Layout";
import Slideshow from "./components/Slideshow";
import { SLIDESHOWS } from "../constants";


export default function View() {
    return (
        <Layout>
            {/* <Slideshow slideshows={SLIDESHOWS}/> */}
        </Layout>
    )  
}