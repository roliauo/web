import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SidebarContainer from "./Sidebar";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { I_ProductItem } from "@shop/state/ducks/Product";

import { connect } from "react-redux";
import {actionOperations} from '@shop/state/ducks/Product';

const StyleWrapperTwoColumns = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: inherit;
    min-height: 100vh;

    > aside {
        flex: 14%;
        overflow: hidden;
    }

    > main {
        flex: 86%;
        position: relative;
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
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
    getProductList: (skip?: number) => void;
    list: I_ProductItem[];
    item: I_ProductItem;
    total: number;
    skip: number;
    limit: number;
}

function PageProducts(props: Props) {
    const [showItem, setShowItem] = useState(false);

    useEffect(() => {
        props.getProductList();
    }, [])

    function handleChangePages(page: number) {
        props.getProductList((page - 1) * props.limit);
    }

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
                    <>
                        <div className="flex-center">
                            {
                                props.list.map((m) =>
                                    <Card key={m.id} title={m.title} info={m.description} imgSrc={m.images[0]}/>
                                )
                            }
                        </div>
                        <Pagination totalPages={Math.ceil(props.total/props.limit)} handleChangePages={handleChangePages}/>
                    </>
                }
            </main>
        </StyleWrapperTwoColumns>

    )
}

const mapStateToProps = (state) => ({
    list: state.setProduct.list,
    item: state.setProduct.item,
    total: state.setProduct.total,
    skip: state.setProduct.skip,
    limit: state.setProduct.limit,
})

const mapDispatchToProps = (dispatch) => ({
    getProductList: (skip?: number) => {
        dispatch(actionOperations.getProductList(skip));
    }
})

const PageProductsContainer = connect(mapStateToProps, mapDispatchToProps)(PageProducts);

export default PageProductsContainer;