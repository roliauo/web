import React, { useRef } from "react";
import { connect } from "react-redux";
import { actionOperations } from "../../state/ducks/News";
import styled from "styled-components";

const StyleWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    img {
        height: inherit;
    }

    .search {
        display: flex;
        width: 40%;
        border: var(--border);
        border-radius: 2.4rem;
        padding: 0.5rem 1rem;
        overflow: hidden;
        height: 2.6rem;
        margin: 0 2rem;

        input {
            border: none;
            width: 100%;
            outline: none;
            color: var(--main-color);
            font-size: .875rem;
            font-weight: 700;
        }

        i {
            color: var(--main-color-highlight);
            cursor: pointer;
        }
    }
`

interface Props {
    searchNews: (search: string) => void;
}

function Header(props: Props) {
    const searchRef = useRef<HTMLInputElement>();

    function handleSearch() {
        props.searchNews(searchRef.current.value)
    }

    return (
        <StyleWrapper>
            <img alt="logo" src="https://1000logos.net/wp-content/uploads/2017/12/Bing-logo.png"></img>
            <div className="search">
                <input type="text" ref={searchRef} name="Search" placeholder="Search" />
                <i className="material-icons" onClick={handleSearch}>search</i>
            </div>
        </StyleWrapper>
    )
}

const mapDispatchToProps = (dispatch) => ({
    searchNews: (search: string) => {
        dispatch(actionOperations.searchNews(search));
    },
})

const HeaderContainer = connect(null, mapDispatchToProps)(Header);

export default HeaderContainer;