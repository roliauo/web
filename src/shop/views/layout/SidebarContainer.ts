import { connect } from "react-redux";
import { actionOperations } from "@shop/state/ducks/Sidebar";
import View from './Sidebar';

const mapStateToProps = (state) => ({
    menu: state.setSidebar.menu,
})

const mapDispatchToProps = (dispatch) => ({
    getSidebarMenu: () => {
        dispatch(actionOperations.getSidebarMenu());
    }
})

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(View);

export default SidebarContainer;