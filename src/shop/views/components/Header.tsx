import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {PATH_HOME} from '../../constants';

const StyleWrapper = styled.div`

    .title {
        text-align: center;
        font-size: 1.5rem;
        line-height: 150px;

    }
`

function Header() {
    return(
        <StyleWrapper>
            <Link className="link" to={PATH_HOME.url}>
                <div className="title"> &#8499; Header </div>
            </Link>
        </StyleWrapper>
    )
}

export default Header;