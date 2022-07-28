import React from "react";
import styled from "styled-components";

interface Props {
    title: string;
    info: string;
    imgSrc?: string;
}
const StyleWrapper = styled.div`
    display: inline-flex;
    width: 240px;
    height: 312px;
    background: #cecece;
    margin: 1rem;
    overflow: hidden;

    .aspect-ratio {
        // background-color: red;
        width: 100%;
        padding-top: 75%; /* Aspect Ratio */
        position: relative;
    }

    .aspect-ratio-content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    img {
        width: inherit;
        height: inherit;
    }

    .link {
        position: relative;
        display: block;
        height: inherit;
        width: 100%;
    }

    .info {
        position: absolute;
        bottom: 0px;
        height: 0px;
        width: 100%;
        background: rgba(0,0,0,0.4);
        color: #fff;
        padding: 8px;
        transition: .4s;
        opacity: 0;
        visibility: hidden;
    }

    .link:hover .info {
        height: 80px;
        opacity: 1;
        visibility: visible;
    }
`

export default function Card(props: Props) {
    const {title, info, imgSrc} = props;
    return (
        <StyleWrapper>
            <a href="#" className="link">
                <img src={imgSrc} />
                <div className="info">
                    <div className="title">{title}</div>
                    <span>{info}</span>
                </div>
            </a>
        </StyleWrapper>
    )
}