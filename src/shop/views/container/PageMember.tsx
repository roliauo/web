import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { URL } from "@shop/constants";

import { actionOperations } from "@shop/state/ducks/Member";
import { connect } from "react-redux";

const StyleWrapper = styled.div`

`
interface Props {
    loggedIn: boolean;
    user: any;
}

function PageMember(props: Props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.loggedIn) {
            navigate(URL.login);
        }
    }, [props.loggedIn])

    return (
        <StyleWrapper>
            Welcome! { props.user.username }
        </StyleWrapper>
    )
}

const mapStateToProps = (state) => ({
    loggedIn: state.setMember.user.id !== undefined,
    user: state.setMember.user,
})

const mapDispatchToProps = (dispatch) => ({
    logout: (id: number) => {
        dispatch(actionOperations.logout(id));
    }
})

const PageMemberContainer = connect(mapStateToProps, mapDispatchToProps)(PageMember);

export default PageMemberContainer;