import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./components/ToDoList";
import './root.css';

const StyleWrapper = styled.div`
    min-height: 100vh;

    aside {
        position: fixed;
        width: var(--nav-width);
        min-height: 100vh;
        padding: 60px 1rem;
        border-right: var(--border);
    }

    main {
        min-height: 100vh;
        margin-left: var(--nav-width);
        padding: 2rem 0;
    }

    .btn {
        cursor: pointer;
    }

`


export default function App () {
    const [activeApp, setActiveApp] = useState(-1);

    const apps = [
        {name: "TodoList"},
        //{name: "CountDown"},
    ]

    return (
        <StyleWrapper>
            <aside>
                {
                    apps.map((m, i) =>
                        <div className="btn" key={i} onClick={() => setActiveApp(i)}>
                            {m.name}
                        </div>
                    )
                }
            </aside>
            <main>
                {
                    activeApp === 0 &&
                    <TodoList />
                }
                {
                    // activeApp === 1 &&
                    // <CountDown />
                }
            </main>
        </StyleWrapper>
    )
}