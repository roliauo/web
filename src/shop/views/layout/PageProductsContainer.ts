import { connect } from "react-redux";
import PageProducts from "./PageProducts";
import {actionOperations} from '@shop/state/ducks/Product';

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