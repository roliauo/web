import React, {useState} from "react";
import styled from "styled-components";

interface Props {
    totalPages: number;
    handleChangePages: (page: number) => void;
}

const StyleWrapper = styled.div`
    div {
        cursor: pointer;
        padding: 1rem;

        :hover, &.active {
            font-weight: 700;
            color: #8ea7ef;
        }
    }

`

function Pagination(props: Props) {
    if (props.totalPages == 0) return;

    const [activePage, setActivePage] = useState(1);
    const pageArray = Array.from(Array(props.totalPages).keys());

    function handleClick(page: number) {
        if (activePage === page || page > props.totalPages ||  page < 1) return;

        setActivePage(page);
        props.handleChangePages(page);
    }

    return(
        <StyleWrapper className="flex-center">
            <div onClick={() => handleClick(activePage-1)}>
                <i></i>
                prev
            </div>

            {
                pageArray.map((m) =>
                    <div key={m} className={activePage === m+1 ? "active" : ""} onClick={() => handleClick(m+1)}>
                        {m+1}
                    </div>
                )
            }

            <div onClick={() => handleClick(activePage+1)}>
                <i></i>
                next
            </div>
        </StyleWrapper>
    )
}

export default Pagination;