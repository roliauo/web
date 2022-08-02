import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    loggedIn: state.setMember.user.id !== undefined,
    user: state.setMember.user,
})

const MemberContainer = connect(mapStateToProps);

export default MemberContainer;