import React, {useEffect, useState} from "react";
import styled from "styled-components";
import CollapsibleMenu from "../components/CollapsibleMenu";

import {I_MenuItem} from '../components/CollapsibleMenu';
import dataService from '../../service/dataService';

interface Props {
    updateSidebarMenu: (menu: I_MenuItem) => void;
    menu: I_MenuItem[];
}

const StyleWrapper = styled.div`

`

function Sidebar(props: Props) {

    useEffect(() => {
        console.log('updateSidebarMenu');
        dataService.getSidebarMenu()
            .then((resData) => {
                props.updateSidebarMenu(resData); 
            }) 
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
