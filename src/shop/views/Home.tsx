import React from "react";
import styled from "styled-components";
import './root.css';
import Layout from "./components/Layout";

const Main = () => {
    return(
        <main>
            Main
        </main>
    )
}

const View = () => {
    
    return (
        <Layout>
            <Main />
        </Layout>
    )  
}

export default View;