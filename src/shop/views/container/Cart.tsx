import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionOperations } from "@shop/state/ducks/Cart";
import Card from "../components/Card";
import { I_ProductItem } from "@shop/state/ducks/Product";

const StyleWrapper = styled.div`

`
interface Props {
    cartList: I_ProductItem[] | [];
    userId: number | string; // facebook: string
    getCart: (userId) => void;
    // add: (item) => void;
}

function Cart(props: Props) {
    const {cartList, userId, getCart} = props;

    useEffect(() => {
        getCart(userId);
    }, [userId]);

    return (
        <StyleWrapper>
            {
                cartList.length > 0 &&
                cartList.map((m) => <Card key={m.id} item={m} type='hover' />)
            }
        </StyleWrapper>
    )
}

const mapStateToProps = (state) => ({
    cartList: state.setCart.cartList,
    userId: state.setMember.user.id
})

const mapDispatchToProps = (dispatch) => ({
    getCart: (userId) => {
        dispatch(actionOperations.getCart(userId));
    },
    // add: (item) => {
    //     dispatch(actionOperations.add(item));
    // }
})

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;