import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import CollapsibleMenu from "./components/CollapsibleMenu";

import {I_MenuItem} from './components/CollapsibleMenu';
import dataService from '../service/dataService';

const StyleWrapperTwoColumns = styled.div`
    display: flex;
    flex-wrap: wrap;

    > aside {
        flex: 24%;
        overflow: hidden;
    }

    > main {
        flex: 76%;
    }
`;

function Sidebar() {

}


const View = () => {
    const [menu, setMenu] = useState<I_MenuItem[]>([]);

    useEffect(() => {
        dataService.getSidebarMenu()
            .then((resData) => {
                console.log(resData);
                setMenu(resData); 
            }) 
    }, []);

    return(
        <Layout>
            <StyleWrapperTwoColumns>
                <aside>
                    {
                        menu.length > 0 &&
                        menu.map((m) => 
                            <CollapsibleMenu key={m.id} menuItems={m} />
                        )

                    }
                </aside>
                <main>
                    Page - Products
                </main>
            </StyleWrapperTwoColumns>
        </Layout>
       
    )
}

export default View;