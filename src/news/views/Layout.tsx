import React from "react";
import styled from "styled-components";
import Nav from "./containers/Nav";
import { NAV_LINKS } from "../constants";
import './root.css';
import Footer from "./components/Footer";
import Header from "./components/Header";

const StyleWrapper = styled.div`
    width: 100%;
    min-width: 300px;

    header {
        height: var(--header-height);
        padding: 1rem 2rem;
        background: aliceblue;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }

    footer {
        height: var(--footer-height);
        padding: 1rem;
        position: fixed;
        bottom: 0;
        background: #fff;
        width: 100%;
        // background: aliceblue;
    }

    .content {
        min-height: var(--main-height);
        margin-top: var(--header-height);

        > aside {
            position: fixed;
            width: var(--nav-width);
            height: var(--main-height);
            overflow: hidden;
            padding: 60px 1rem;
            border-right: var(--border);
        }

        > main {
            padding: 2rem 0;
            margin-left: var(--nav-width);
        }
    }

    /* Phone */
    @media (max-width: 768px) {
        .content > aside {
            width: var(--nav-min-width);
        }
        .content > main {
            margin-left: var(--nav-min-width);
        }
    }

`

export default function Layout(props) {
    return (
        <StyleWrapper>
            <header>
                <Header />
            </header>

            <div className="content">
                <aside>
                    <Nav links={NAV_LINKS}/>
                </aside>
                <main>
                    {props.children}
                </main>
            </div>

            <footer>
                <Footer/>
            </footer>

        </StyleWrapper>
    )
}