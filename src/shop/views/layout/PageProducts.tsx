import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SidebarContainer from "./SidebarContainer";
import Card from "../components/Card";
import { I_ProductItem } from "@shop/state/ducks/Product"; 

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

function PageItem({item: I_ProductItem}) {
    return (
        <div>

        </div>
    )
}

interface Props {
    getProductList: () => void;
    list: I_ProductItem[];
    item: I_ProductItem;
}

function PageProducts(props: Props) {
    const [showItem, setShowItem] = useState(false);

    useEffect(() => {
        props.getProductList();
    }, [])
    
    return (
        <StyleWrapperTwoColumns>
            <aside>
                <SidebarContainer />
            </aside>
            <main>
                <div>
                    data from: https://dummyjson.com/docs/products
                </div>
                {
                    showItem ?
                    <PageItem item={props.item}/>
                    :
                    props.list.map((m) => 
                        <Card key={m.id} title={m.title} info={m.description} imgSrc={m.images[0]}/>
                    )
                }
            </main>
        </StyleWrapperTwoColumns>
       
    )
}

export default PageProducts;