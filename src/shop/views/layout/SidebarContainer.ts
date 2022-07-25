import { connect } from "react-redux";
import { actionOperations } from "@shop/state/ducks/Sidebar";
import * as Product from "@shop/state/ducks/Product";
import View from './Sidebar';

const mapStateToProps = (state) => ({
    menu: state.setSidebar.menu,
})

const mapDispatchToProps = (dispatch) => ({
    getSidebarMenu: () => {
        dispatch(actionOperations.getSidebarMenu());
    },
    getProductListByCategory: (category: string|number) => {
        dispatch(Product.actionOperations.getProductListByCategory(category));
    }
})

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(View);

export default SidebarContainer;