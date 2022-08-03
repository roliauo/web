import { STORAGE_KEY } from "@shop/constants";
import { I_ProductItem } from "@shop/state/ducks/Product";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

import { connect } from "react-redux";
import { actionOperations as CartOperations } from "@shop/state/ducks/Cart";

const StyleWrapper = styled.div`

`

interface Props {
    addToCart: (item: I_ProductItem) => void;
}

function WishList(props: Props) {
    const [list, setList] = useState<I_ProductItem[]>(JSON.parse(localStorage.getItem(STORAGE_KEY.WISH_LIST)) || []);

    useEffect(() => {
        if (localStorage.getItem(STORAGE_KEY.WISH_LIST) === null) {
            updateWishList([]);
        }
    }, [])

    function updateWishList(wish) {
        console.log("updateWishList: " + wish + JSON.stringify(wish))
        localStorage.setItem(STORAGE_KEY.WISH_LIST, JSON.stringify(wish));
        setList(JSON.parse(localStorage.getItem(STORAGE_KEY.WISH_LIST)))
    }

    function handleAddCart(item) {
        props.addToCart(item);
    }

    function handleRemoveWishlist(item: I_ProductItem) {
        list.splice(list.findIndex((f) => f.id === item.id), 1); // remove the item
        updateWishList(list);
    }

    return(
        <StyleWrapper>
            {
                list && list.length > 0 &&
                list.map((m) => <Card key={m.id} type="wishlist" item={m} handleAddCart={() => handleAddCart(m)} handleRemoveWishlist={() => handleRemoveWishlist(m)}/>)
            }
        </StyleWrapper>
    )
}


const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => {
        dispatch(CartOperations.addToCart(item));
    }
})

const WishListContainer = connect(null, mapDispatchToProps)(WishList);

export default WishListContainer;