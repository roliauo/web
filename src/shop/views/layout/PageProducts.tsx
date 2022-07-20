import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Layout from "./Layout";
import CollapsibleMenu from "../components/CollapsibleMenu";
import SidebarContainer from "./SidebarContainer";

import {I_MenuItem} from '../components/CollapsibleMenu';
import dataService from '../../service/dataService';

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


const View = () => {
    const [menu, setMenu] = useState<I_MenuItem[]>([]);

    // useEffect(() => {
    //     dataService.getSidebarMenu()
    //         .then((resData) => {
    //             setMenu(resData); 
    //         }) 
    // }, []);

    return(
        <Layout>
            <StyleWrapperTwoColumns>
                <aside>
                    <SidebarContainer />
                </aside>
                <main>
                    Page - Products
                </main>
            </StyleWrapperTwoColumns>
        </Layout>
       
    )
}

export default View;