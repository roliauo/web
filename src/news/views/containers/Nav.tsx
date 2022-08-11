import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { I_NavLinks } from "../../constants";
import { connect } from "react-redux";
import {actionOperations} from '../../state/ducks/News';

const StyleWrapper = styled.div`
    a {
        display: block;
    }
    .link {
        // display: flex;
        position: relative;
        background: inherit;
        color: inherit;
        text-decoration: none;
        width: 100%;
        transition: .3s;
        cursor: pointer;
        padding: 1rem 0;
        color: #444;

        >span {
            width: inherit;
        }

        :hover {
            color: #0682a8;
        }

        i {
            display: inline-block;
            line-height: inherit;
            font-size: 1rem;
            margin-left: 8px;
            width: 1rem;
        }
    }

    /* Phone */
    @media (max-width: 768px) {
        .link span {
            display: none;
        }
    }
`

interface Props {
    links: I_NavLinks[];
    getNews: (category: string) => void;
    getNewsByCountry: (country: string) => void;
    getNewsByCategory: (category: string) => void;
}

function Nav(props: Props) {
    const {links} = props;

    function handleClick(path) {
        if (path.length == 1) {
            props.getNews(path);
        } else if (path.length == 2) {
            props.getNewsByCountry(path);
        } else {
            props.getNewsByCategory(path);
        }

    }

    return (
        <StyleWrapper>
            {
                links.length > 0 &&
                links.map((m:I_NavLinks, i) =>
                    <Link key={i} className="link" to={m.url} onClick={() => handleClick(m.url)}>
                        <i className="material-icons">{m.icon}</i>
                        <span> {m.name} </span>
                    </Link>
                )
            }
        </StyleWrapper>
    )
}


const mapDispatchToProps = (dispatch) => ({
    getNews: () => {
        dispatch(actionOperations.getNews());
    },
    getNewsByCountry: (country: string) => {
        dispatch(actionOperations.getNewsByCountry(country));
    },
    getNewsByCategory: (category: string) => {
        dispatch(actionOperations.getNewsByCategory(category));
    },
})

const NavContainer = connect(null, mapDispatchToProps)(Nav);

export default NavContainer;