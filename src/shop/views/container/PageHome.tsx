import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Slideshow from "../components/Slideshow";
import { SLIDESHOWS_BANNER_URL } from "../../constants";


const StyleWrapper = styled.div``

export default function View() {
    const testArr = Array.from(Array(20).keys());

    return (
        <StyleWrapper>
            <Slideshow slideshows={SLIDESHOWS_BANNER_URL}/>

            <div className="flex-center">
                <Card title="Test" info="info..." imgSrc="https://photo.veryyou.com.tw/Veryyou/Photo/PDImg/76230140/M/76230140.jpg"/>
                {
                    testArr.map((m) => <Card key={m} title={`Test ${m}`} info={`info ${m}...`}/>)
                }
                <Card title="Test" info="info..."/>
            </div>
        </StyleWrapper>
    )
}