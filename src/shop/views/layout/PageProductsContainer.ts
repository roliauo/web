import { connect } from "react-redux";
import PageProducts from "./PageProducts";
import {actionOperations} from '@shop/state/ducks/Product';

const mapStateToProps = (state) => ({
    list: state.setProduct.list,
    item: state.setProduct.item
})

const mapDispatchToProps = (dispatch) => ({
    getProductList: () => {
        dispatch(actionOperations.getProductList());
    }
})

const PageProductsContainer = connect(mapStateToProps, mapDispatchToProps)(PageProducts);

export default PageProductsContainer;