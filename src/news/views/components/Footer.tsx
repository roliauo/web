import React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
    .link {
        margin: 0 1rem;
        display: inline-block;
    }

    span {
        float: right;
    }
`

export default function Footer() {
    const links = [
        {title: "隱私權和Cookie"},
        {title: "法律聲明"},
        {title: "廣告"},
        {title: "關於我們的廣告"},
        {title: "說明"},
        {title: "意見反應"},
        ]
    return (
        <StyleWrapper>
            {
                links.map((m, i) =>
                    <div key={i} className="link">
                        {m.title}
                    </div>
                )
            }
            <span> © 2022 roliauo </span>
        </StyleWrapper>
    )
}