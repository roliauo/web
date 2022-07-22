import React, {useEffect, useState} from "react";
import styled from "styled-components";
import CollapsibleMenu from "../components/CollapsibleMenu";

import {I_MenuItem} from '../components/CollapsibleMenu';

interface Props {
    getSidebarMenu: () => void;
    menu: I_MenuItem[];
}

const StyleWrapper = styled.div`

`

function Sidebar(props: Props) {

    useEffect(() => {
        if (props.menu.length == 0) {
            props.getSidebarMenu();
        }
    }, []);

    return (  
        <StyleWrapper>
            {
                props.menu.length > 0 &&
                props.menu.map((m) => 
                    <CollapsibleMenu key={m.id} menuItems={m} />
                )
            }
        </StyleWrapper>     
    )

}

export default Sidebar;
