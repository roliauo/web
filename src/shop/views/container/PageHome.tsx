import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Slideshow from "../components/Slideshow";
import { SLIDESHOWS_BANNER_URL } from "../../constants";

import { connect } from "react-redux";
import { actionOperations, I_ProductItem } from "@shop/state/ducks/Product";


const StyleWrapper = styled.div``

interface Props {
    getProductList: (skip?: number) => void;
    list: I_ProductItem[];
    item: I_ProductItem;
    total: number;
    skip: number;
    limit: number;
}

function Home(props: Props) {
    const testArr = Array.from(Array(20).keys());

    useEffect(() => {
        props.getProductList();
    }, [])

    return (
        <StyleWrapper>
            <Slideshow slideshows={SLIDESHOWS_BANNER_URL}/>

            <div className="flex-center">
                {
                    props.list.map((m) =>
                        <Card key={m.id} item={m} type='hover'/>
                    )
                }
                {/* {
                    testArr.map((m) => <Card key={m} title={`Test ${m}`} info={`info ${m}...`}/>)
                } */}
            </div>
        </StyleWrapper>
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

const PageProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default PageProductsContainer;