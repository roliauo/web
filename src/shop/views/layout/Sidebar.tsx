import React, {useEffect, useState} from "react";
import styled from "styled-components";
import CollapsibleMenu from "../components/CollapsibleMenu";

import {I_MenuItem} from '../components/CollapsibleMenu';

interface Props {
    getSidebarMenu: () => void;
    getProductListByCategory: (category: string|number) => void;
    menu: I_MenuItem[];
}

const StyleWrapper = styled.div`

`

function Sidebar(props: Props) {
    const [clickedItem, setClickedItem] = useState<string|number>(-1);

    useEffect(() => {
        if (props.menu.length == 0) {
            props.getSidebarMenu();
        }
    }, []);

    function handleClickItem(item: I_MenuItem) {
        if (clickedItem === item.id) return;
        setClickedItem(item.id);
        props.getProductListByCategory(item.id);
    }

    return (
        <StyleWrapper>
            {
                props.menu.length > 0 &&
                props.menu.map((m) =>
                    <CollapsibleMenu key={m.id} menuItems={m} handleClickItem={handleClickItem}/>
                )
            }
        </StyleWrapper>
    )

}

export default Sidebar;
