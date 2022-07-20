import { connect } from "react-redux";
import { actionOperations } from "@shop/state/ducks/Sidebar";
import View from './Sidebar';

const mapStateToProps = (state) => ({
    menu: state.setSidebar.menu,
})

const mapDispatchToProps = (dispatch) => ({
    updateSidebarMenu: (menu) => {
        dispatch(actionOperations.updateSidebarMenu(menu));
    }
})

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(View);

export default SidebarContainer;