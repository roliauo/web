import React from "react";
import styled from "styled-components";
import './root.css';

/* show random className */
const StyleWrapper = styled.div``
const StyleNav = styled.div``
const StyleMain = styled.div``
const StyleFooter = styled.div``


const View = () => {
    
    /*return (
        <StyleWrapper>
            <StyleNav></StyleNav>
            <StyleMain></StyleMain>
            <StyleFooter></StyleFooter>
        </StyleWrapper>
    )*/
    
    return (
        <StyleWrapper>
            SHOP
            <div className="nav">

            </div>
            <div className="header">

            </div>
            <div className="main">

            </div>
            <div className="footer">

            </div>
        </StyleWrapper>
    )  
}

/* show original className */
const StyledComponent = styled(View)`
    .wrapper {

    }
    
    .nav {

    }
    
    .main {

    }

    .footer {

    }
`;

export default StyledComponent;