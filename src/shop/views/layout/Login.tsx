import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "@shop/constants";

const StyleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    .container {
        // min-width: 300px;
        // max-width: 600px;
        margin: 1rem 2rem;
        width: 500px;
        transition: .3s;
    }

    .tabs{
        height: 3rem;
        margin-bottom: 1rem;
    }

    .btn-tab {
        background: none;
        color: #ccc;
        font-size: 1.2rem;
        margin-right: 0.5rem;
        transition: .3s;

        &.active {
            color: #000;
            font-size: 2rem;
        }
    }

    .content {
        transition: .3s;

        >div {
            backface-visibility: hidden;
        }
    }

    .content-login {

    }

    .content-signup {

    }

    @media (max-width: 767px) {
        .container {
            width: 300px;
        }
    }

`

export default function Login() {
    const [activeTab, setActiveTab] = useState("login");
    const navigate = useNavigate();
    const loggedIn = false;

    useEffect(() => {
        if (loggedIn) {
            navigate(URL.member);
        }
    }, [])

    function switchTab(event: React.MouseEvent<HTMLElement>) {
        if (event.currentTarget.id === activeTab) return;
        setActiveTab(event.currentTarget.id);
    }

    return (
        <StyleWrapper>
            <div className="container">
                <div className="tabs">
                    <button id="login" className={activeTab === "login" ? "btn-tab active" : "btn-tab"} onClick={switchTab}>LOG IN</button>
                    <button id="signup" className={activeTab === "signup" ? "btn-tab active" : "btn-tab"} onClick={switchTab}>SIGN UP</button>
                </div>

                <div className="content">
                    {
                        activeTab === "login"
                        ?
                        <div className="content-login">
                            <input type="text" name="account" placeholder="帳號 (E-Mail)" />
                            <input type="password" name="password" placeholder="密碼" />

                            <button> 登入 LOGIN </button>

                            <div> Facebook Login </div>
                        </div>
                        :
                        <div className="content-signup">
                            <input type="text" name="account" placeholder="帳號 (E-Mail)" />
                            <input type="password" name="pwd" placeholder="密碼 Password" />
                            <input type="password" name="confirmPwd" placeholder="密碼確認 Confirm Password" />
                            <input type="date" name="birthday" placeholder="生日" />

                            <button> 註冊 Sign up </button>
                        </div>
                    }

                </div>
            </div>

        </StyleWrapper>
    )
}