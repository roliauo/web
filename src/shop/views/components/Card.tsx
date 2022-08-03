import { I_ProductItem } from "@shop/state/ducks/Product";
import React from "react";
import styled from "styled-components";

interface Props {
    type?: 'hover' | 'shopping' | 'wishlist';
    item: I_ProductItem;
    handleAddCart?: () => void;
    handleAddWishlist?: () => void;
    handleRemoveWishlist?: () => void;
    favorite?: boolean;
    // title: string;
    // info: string;
    // imgSrc?: string;
}

const StyleWrapper = styled.div`
    display: inline-flex;
    flex-flow: column;
    // background: #cecece;
    background: transparent;
    width: 240px;
    margin: 1rem;
    overflow: hidden;

    .aspect-ratio {
        // background-color: red;
        width: 100%;
        padding-top: 75%; /* Aspect Ratio */
        position: relative;
    }

    .aspect-ratio-content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    img {
        width: inherit;
        height: inherit;
    }

    .link {
        position: relative;
        display: block;
        width: 240px;
        height: 312px;
    }

    .hover-info {
        position: absolute;
        bottom: 0px;
        height: 0px;
        width: 100%;
        background: rgba(0,0,0,0.4);
        color: #fff;
        padding: 8px;
        transition: .4s;
        opacity: 0;
        visibility: hidden;
    }

    .link:hover .hover-info {
        height: 80px;
        opacity: 1;
        visibility: visible;
    }

    .icons {
        display: flex;
        justify-content: space-between;
        margin: 0.5rem 0;
        i {
            cursor: pointer;
        }
    }

    .shopping {
        padding: 0.5rem;
    }
`

export default function Card(props: Props) {
    const {item, type, favorite, handleAddCart, handleAddWishlist, handleRemoveWishlist} = props;

    return (
        <StyleWrapper>
            <a href="#" className="link">
                <img src={item.images[0]} title={item.title}/>
                {
                    (type === 'hover') &&
                    <div className="hover-info">
                        <div className="title">{item.title}</div>
                        <span>{item.description}</span>
                    </div>
                }
            </a>
            {
                (type === 'shopping' || type === 'wishlist') &&
                <div className="shopping">
                    <div className="icons">
                        {
                            handleAddWishlist &&
                            <i className="material-icons" onClick={() => handleAddWishlist()}>{favorite ? 'favorite' : 'favorite_border'}</i>
                        }
                        {
                            handleRemoveWishlist &&
                            <i className="material-icons" onClick={() => handleRemoveWishlist()}>delete</i>
                        }
                        {
                            handleAddCart &&
                            <i className="material-icons" onClick={() => handleAddCart()}>add_shopping_cart</i>
                        }
                    </div>
                    <div className="text-overflow">
                        {item.title}
                    </div>
                    <div>
                        USD {item.price}
                    </div>

                </div>
            }
        </StyleWrapper>
    )

}