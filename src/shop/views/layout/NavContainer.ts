import { connect } from "react-redux";
import {actionOperations} from '@shop/state/ducks/Product';
import Nav from "./Nav";

const mapDispatchToProps = (dispatch) => ({
    searchProduct: (search: string) => {
        dispatch(actionOperations.searchProduct(search));
    }
})

const NavConatiner = connect(null, mapDispatchToProps)(Nav);

export default NavConatiner;