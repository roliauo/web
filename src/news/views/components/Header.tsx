import React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
    height: var(--header-height);
    padding: 1rem 2rem;
    background: aliceblue;
    position: fixed;
    top: 0;
    width: 100%;

    img {
        height: 100%;
    }
`

export default function Header() {
    return (
        <StyleWrapper>
            <img alt="logo" src="https://1000logos.net/wp-content/uploads/2017/12/Bing-logo.png"></img>
        </StyleWrapper>
    )
}