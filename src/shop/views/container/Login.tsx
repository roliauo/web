import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { URL, NODE_ENV, FACRBOOK_APPID } from "@shop/constants";
import FacebookLogin from "react-facebook-login";

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
        display: inline-block;
        margin-right: 1.2rem;
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

    .btn-fb {
        background-color: #4c69ba;
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        border: 1px solid #4c69ba;

        i {
            margin-right: 8px;
        }
    }

    .buttons {
        margin: 2rem 0;
        display: flex;
        justify-content: space-evenly;
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

    const responseFacebook = (response) => {
        console.log(response);
      }

    return (
        <StyleWrapper>
            <div className="container">
                <div className="tabs">
                    <div id={_CONSTANT.login} className={activeTab === _CONSTANT.login ? "btn-tab active" : "btn-tab"} onClick={switchTab}>LOG IN</div>
                    <div id={_CONSTANT.signup} className={activeTab === _CONSTANT.signup ? "btn-tab active" : "btn-tab"} onClick={switchTab}>SIGN UP</div>
                </div>

                <div className="content">
                    {
                        activeTab === _CONSTANT.login
                        ?
                        <form className="content-login" onSubmit={handleSubmit} method="post">
                            <input type="text" name="username" placeholder="帳號 (E-Mail)" ref={el => inputRef.current.username = el} />
                            <input type="password" name="password" placeholder="密碼" ref={el => inputRef.current.password= el}/>

                            <div className="buttons">
                                <button> 登入 LOGIN </button>
                                <FacebookLogin
                                    appId={FACRBOOK_APPID}
                                    textButton="Login"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    cssClass="btn-fb"
                                    icon="fa-facebook"
                                />
                            </div>

                        </form>
                        :
                        <form className="content-signup"  onSubmit={handleSubmit} method="post">
                            <input type="text" name="username" placeholder="帳號 (E-Mail)" ref={el => inputRef.current.username = el}/>
                            <input type="password" name="password" placeholder="密碼 Password" ref={el => inputRef.current.password= el}/>
                            <input type="password" name="confirmPwd" placeholder="密碼確認 Confirm Password" onChange={confirmPassword}/>
                            <input type="date" name="birthday" placeholder="生日" ref={el => inputRef.current.birthday= el}/>

                            <div className="buttons">
                                <button> 註冊 Sign up </button>
                            </div>
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