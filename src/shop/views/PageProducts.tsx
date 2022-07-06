import React from "react";
import styled from "styled-components";
import Layout from "./components/Layout";

const StyleWrapperTwoColumns = styled.div`
    display: flex;
    flex-wrap: wrap;

    > aside {
        flex: 24%;
    }

    > main {
        flex: 76%;
    }
`;

const Main = () => {
    return(
        <>
            <aside>
                Aside
            </aside>
            <main>
                Page - Products
            </main>
        </>
    )
}

const View = () => {

    return (
        <Layout>
            <StyleWrapperTwoColumns>
               <Main/>
            </StyleWrapperTwoColumns>
        </Layout>
    )
}

export default View;