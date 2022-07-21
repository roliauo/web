import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Slideshow from "../components/Slideshow";
import { SLIDESHOWS_BANNER_URL } from "../../constants";


export default function View() {
    return (
        <>
            <Slideshow slideshows={SLIDESHOWS_BANNER_URL}/>

            <div className="item-section">
                <Card title="Test" info="info..." imgSrc="https://photo.veryyou.com.tw/Veryyou/Photo/PDImg/76230140/M/76230140.jpg"/>
                <Card title="Test" info="info..."/>
                <Card title="Test" info="info..."/>
                <Card title="Test" info="info..."/>
                <Card title="Test" info="info..."/>
            </div>            
        </>
    )  
}