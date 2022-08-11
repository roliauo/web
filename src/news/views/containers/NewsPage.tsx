import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {actionOperations, I_NewsInfo} from '../../state/ducks/News';

const StyleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > div {
        width: 360px;
        height: 360px;
        margin: 1rem;
        border: 0.5px solid #eee;
        border-radius: 0.6rem;
        overflow: hidden;
        cursor: pointer;

        img {
            width: inherit;
            height: 200px;
        }

        .title {
            font-weight: bold;
            font-size: 1.2rem;
            padding: 1rem;
        }

        .from {

        }
    }
`

interface Props {
    list: I_NewsInfo[];
}

function NewsPage(props: Props) {

    useEffect(() => {
        if (props.list.length < 1) {
            console.log("getNews!!")
            // props.getNews();
        }
    }, [])

    return (
        <StyleWrapper>
            {
               props.list.length > 0 &&
               props.list.map((m, i) =>
                    <div key={i}>
                        <img src={m.urlToImage}></img>
                        <div className="title"> {m.title}</div>
                        <div className="from">
                            {m.source.name}
                            {m.publishedAt}
                        </div>
                    </div>
               )
            }
        </StyleWrapper>
    )
}


const mapStateToProps = (state) => ({
    list: state.setNews.list,
    category: state.setNews.category
})

const mapDispatchToProps = (dispatch) => ({
    getNews: () => {
        dispatch(actionOperations.getNews());
    },
})

const NewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPage);

export default NewsPageContainer;