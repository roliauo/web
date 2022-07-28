import React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div<{width: string, height: string}>`
    background-color: transparent;
    width: ${props => props.width ? props.width :"300px"};
    height: ${props => props.height ? props.height :"300px"};
    perspective: 1000px;

    .container {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    &:hover .container {
        transform: rotateY(180deg);
    }

    .front, .back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .front {
        // background-color: #ccc;
        // color: black;
    }

    .back {
        // background-color: #000;
        // color: white;
        transform: rotateY(180deg);
    }
`
interface Props {
    width?: string;
    height?: string;
    front: React.ReactNode;
    back: React.ReactNode;
}

export default function FlipCard(props: Props) {
    return(
        <StyleWrapper width={props.width} height={props.height}>
            <div className="container">
                <div className="front">
                    {props.front}
                </div>
                <div className="back">
                    {props.back}
                </div>
            </div>
        </StyleWrapper>
    )
}