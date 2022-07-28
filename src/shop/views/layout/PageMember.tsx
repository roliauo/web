import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "@shop/constants";

const StyleWrapper = styled.div`

`

export default function PageMember() {
    const navigate = useNavigate();
    const loggedIn = false;

    useEffect(() => {
        if (!loggedIn) {
            navigate(URL.login);
        }
    }, [])

    return (
        <StyleWrapper>
            Welcome! Member
        </StyleWrapper>
    )
}