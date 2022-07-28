import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 628px;
    margin: auto;
    overflow: hidden;


    .slideshow {
        transition: 0.3s;
        visibility: hidden;
        position: absolute;
        width: 100%;
        height: inherit;
        top: 0;
        left: 0;
        animation: slide-out 0.4s 1;

        img {
            max-height: 100%;
            max-width: 100%;
            min-width: 400px;
            margin: 0 auto;
            display: block;
        }

        &.active {
            visibility: visible;
            overflow: hidden;
            opacity: 1;
            animation: slide-in 0.4s 1;
        }

    }

    @keyframes slide-in {
        from { left: 100%; }
        to { left: 0%; }
    }

    @keyframes slide-out {
        0% { left: 0; opacity: 1;}
        99% { left: -100%; opacity: 1;}
        100% { left: -100%; opacity: 0;}
    }

    .pagination {
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;
        padding: 8px;
        z-index: 1;

        span {
            cursor: pointer;
            height: 0.6rem;
            width: 0.6rem;
            margin: 0 0.5rem;
            background-color: #fbdfc9;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;

            &.active, :hover {
                background-color: #e0a3a3;
            }
        }
    }

    /* Phone */
    @media (max-width: 768px) {
       height: 280px;
    }
`
interface I_Slideshow {
    url: string;
    imgSrc: string;
}

interface Props {
    slideshows: I_Slideshow[];
}

export default function Slideshow (props: Props) {
    const { slideshows } = props;
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const sliderTimer = setTimeout(() => {
            setSlideIndex((slideIndex + 1) % slideshows.length);
        }, 3000);

        return () => clearTimeout(sliderTimer);
      }, [slideIndex]);

    return (
        <StyleWrapper>
            {
                slideshows.map((m, i) =>
                    <div className={slideIndex == i ? "slideshow active" : "slideshow"} key={i}>
                        <Link to={m.url}>
                            <img src={m.imgSrc}/>
                        </Link>
                    </div>
                )
            }

            <div className="pagination">
                {
                    slideshows.map((m, i) =>
                        <span key={i}
                            onClick={() => setSlideIndex(i)}
                            className={slideIndex == i ? "active" : ""}
                        ></span>
                    )
                }
            </div>
        </StyleWrapper>
    )
}