import React, {useState, useEffect} from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 600px;
    margin: auto;
    overflow: hidden;


    .slideshow {
        transition: 0.3s;
        visibility: hidden;
        position: absolute;
        width: 100%;
        height: 600px;
        top: 0;
        left: 0;
        animation: slide-out 0.4s 1;

        img {
            width: 100%;
            height: 100%;
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
        z-index: 10;

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
                        <a href={m.url}>
                            <img src={m.imgSrc}/>
                        </a>
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