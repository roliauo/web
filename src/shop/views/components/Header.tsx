import React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
    
    .title {
        text-align: center;
        line-height: 100px;
    }
`

const Header = () => {
    return(
        <StyleWrapper>
            <div className="title"> Header </div>
        </StyleWrapper>
    )
}

export default Header;