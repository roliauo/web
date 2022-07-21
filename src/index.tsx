import React from "react";
import styled from "styled-components";
import {createRoot} from "react-dom";
import './init.css';

const StyleWrapper = styled.div`
    position: relative;
    background: linear-gradient(145deg, transparent, #6991ef);
    height: calc(100vh - 24px);
    padding: 12px;
    margin: 12px;
    border-radius: 16px;

    background: linear-gradient(-45deg, #ecb4a3, #ba4472 , #6973c5, #6991ef);
    background-size: 400% 400%;
    animation: gradient 15s infinite;

    .title {
        font-family: 'Brush Script MT',cursive;
        font-size: 8rem;
        //color: #473c8d8f;
        color: #ffffff8f;
        position: absolute;
        bottom: 50%;
        left: 5%;
        animation: show 3s 1;
    }

    .text-gradient {
        background-image: linear-gradient(45deg, #aca9c0, #473c8d);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }

    .section {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        transition: .4s;
        animation: slide 1s 1;

        background: rgb(56 59 134 / 50%);
        border-radius: 4px;
        width: 30%;
        height: 200px;
        padding: 2rem;
    }

    .links-container {
        position: absolute;
        bottom: 20%;
        left: 5%;
        animation: show 2s 1;
    }

    .btn {
        display: inline-block;
        margin: 14px;
        background: rgb(40 46 114 / 57%);
        border-radius: 4px;
        width: 150px;
        height: 30px;
        text-align: center;
        line-height: 30px;

        font-family: Papyrus,fantasy;
        color: burlywood;
        font-weight: bold;

        :hover {
            background: rgb(124 129 183 / 57%);
        }
    }

    .btn-circle {
        display: block;
        background: rgba(255,255,255,0.6);
        border-radius: 50%;
        width: 150px;
        height: 150px;
        text-align: center;
        line-height: 150px;
    }

    .version {
        color: #f5f7ff;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }

    @keyframes slide {
        from { right: 100%; }
        to { right: 0%; }
    }
    
    @keyframes show {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    
    
`

function Apps() {

    return (
        <StyleWrapper>
            <div className="title">
                Mandy Lin
            </div>
            <div className="links-container">
                <a href="./app_redux" className="btn"> Apps </a>
                <a href="./shop" className="btn"> Shop </a> 
            </div>
            <div className="version">
                version: 20220721
            </div>
        </StyleWrapper>
    )
}


const root = createRoot(document.getElementById('root'));

root.render(
    <Apps/>
)