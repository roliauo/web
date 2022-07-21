import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SidebarContainer from "./SidebarContainer";

const StyleWrapperTwoColumns = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: inherit;
    min-height: 100vh;

    > aside {
        flex: 24%;
        overflow: hidden;
    }

    > main {
        flex: 76%;
    }

    /* Phone */
    @media (max-width: 768px) {
        > aside {
            display: none;
        }
    }
`;


function View() {

    return(
        <StyleWrapperTwoColumns>
            <aside>
                <SidebarContainer />
            </aside>
            <main>
                Page - Products
            </main>
        </StyleWrapperTwoColumns>
       
    )
}

export default View;