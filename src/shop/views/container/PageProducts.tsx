import React, {useEffect, useState} from "react";
import styled from "styled-components";
import SidebarContainer from "./Sidebar";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { I_ProductItem } from "@shop/state/ducks/Product";

import { connect } from "react-redux";
import {actionOperations} from '@shop/state/ducks/Product';
import { actionOperations as CartOperations } from "@shop/state/ducks/Cart";
import { STORAGE_KEY } from "@shop/constants";

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
    addCart: (item: I_ProductItem) => void;
    addToWishList: (item: I_ProductItem) => void;
    list: I_ProductItem[];
    item: I_ProductItem;
    total: number;
    skip: number;
    limit: number;
}

function PageProducts(props: Props) {
    const [showItem, setShowItem] = useState(false);
    const [wishlist, setWishlist] = useState<I_ProductItem[]>(JSON.parse(localStorage.getItem(STORAGE_KEY.WISH_LIST)) || []);

    useEffect(() => {
        if (props.list.length < 1) {
            props.getProductList();
        }
    }, [])

    // useEffect(() => {
    //     setWishlist(JSON.parse(localStorage.getItem(STORAGE_KEY.WISH_LIST)));
    // }, [JSON.stringify(localStorage.getItem(STORAGE_KEY.WISH_LIST))])


    function handleChangePages(page: number) {
        props.getProductList((page - 1) * props.limit);
    }

    async function handleAddWishlist(item: I_ProductItem) {
        await props.addToWishList(item);
        setWishlist(JSON.parse(localStorage.getItem(STORAGE_KEY.WISH_LIST)));
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
                                    <Card key={m.id} item={m} type='shopping' favorite={wishlist.findIndex((f) => f.id === m.id) > -1} handleAddCart={() => props.addCart(m)} handleAddWishlist={() => handleAddWishlist(m)}/>
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
    },
    addCart: (item) => {
        dispatch(CartOperations.addToCart(item));
    },
    addToWishList: (item: I_ProductItem) => {
        dispatch(CartOperations.addToWishList(item));
    }
})

const PageProductsContainer = connect(mapStateToProps, mapDispatchToProps)(PageProducts);

export default PageProductsContainer;