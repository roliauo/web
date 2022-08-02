import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { URL, NODE_ENV } from "@shop/constants";

const StyleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    user-select: text;

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
    }

    @media (max-width: 767px) {
        .container {
            width: 300px;
        }
    }

`

interface Props {
    login: (username:string, password: string, callback?) => void;
    loggedIn: boolean;
}

function Login(props: Props) {
    const _CONSTANT = {login: "login", signup: "signup"};
    const [activeTab, setActiveTab] = useState(_CONSTANT.login);
    const inputRef = useRef({
        username: null,
        password: null,
        birthday: null
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (props.loggedIn) {
            navigate(URL.member);
        }
        inputRef.current.username.focus();
    }, [])

    function switchTab(event: React.MouseEvent<HTMLElement>) {
        if (event.currentTarget.id === activeTab) return;
        setActiveTab(event.currentTarget.id);
    }

    function confirmPassword() {
        return;
    }

    function resetInput() {
        inputRef.current = {
            username: null,
            password: null,
            birthday: null
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLElement>) {
        event.preventDefault();
        const {username, password, birthday} = inputRef.current;
        if (process.env.NODE_ENV === NODE_ENV.development) {
            username.value = "atuny0";
            password.value = "9uQFF1Lh";
        }
        props.login(
            username.value,
            password.value ,
            () => {
                resetInput();
                navigate(URL.member);
            }
        );
    }

    return (
        <StyleWrapper>
            <div className="container">
                <div className="tabs">
                    <button id={_CONSTANT.login} className={activeTab === _CONSTANT.login ? "btn-tab active" : "btn-tab"} onClick={switchTab}>LOG IN</button>
                    <button id={_CONSTANT.signup} className={activeTab === _CONSTANT.signup ? "btn-tab active" : "btn-tab"} onClick={switchTab}>SIGN UP</button>
                </div>

                <div className="content">
                    {
                        activeTab === _CONSTANT.login
                        ?
                        <form className="content-login" onSubmit={handleSubmit} method="post">
                            <input type="text" name="username" placeholder="帳號 (E-Mail)" ref={el => inputRef.current.username = el} />
                            <input type="password" name="password" placeholder="密碼" ref={el => inputRef.current.password= el}/>

                            <button> 登入 LOGIN </button>

                            <div> Facebook Login </div>
                        </form>
                        :
                        <form className="content-signup"  onSubmit={handleSubmit} method="post">
                            <input type="text" name="username" placeholder="帳號 (E-Mail)" ref={el => inputRef.current.username = el}/>
                            <input type="password" name="password" placeholder="密碼 Password" ref={el => inputRef.current.password= el}/>
                            <input type="password" name="confirmPwd" placeholder="密碼確認 Confirm Password" onChange={confirmPassword}/>
                            <input type="date" name="birthday" placeholder="生日" ref={el => inputRef.current.birthday= el}/>

                            <button > 註冊 Sign up </button>
                        </form>
                    }

                </div>
            </div>

        </StyleWrapper>
    )
}

import { actionOperations } from "@shop/state/ducks/Member";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    loggedIn: state.setMember.user.id !== undefined,
})

const mapDispatchToProps = (dispatch) => ({
    login: (username: string, password: string, callback?) => {
        dispatch(actionOperations.login(username, password, callback));
    }
})

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;