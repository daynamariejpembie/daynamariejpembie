import React, {useState} from "react";
import "./Carousel.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';

const slides = [
    {
        src: "https://i.etsystatic.com/37953348/r/il/f907ba/4518081077/il_fullxfull.4518081077_g9gt.jpg",
        alt: 'Sister Earrings'

    },
    {
        src: "https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/63B7355BE2EA465197ACD69AF7AB2179/B_88780_1.gif",
        alt: "Pearl Bracelet"

    },
    {
        src: "https://soflojewels.com/cdn/shop/products/FA7B8D41-BC0E-4C6B-83EE-3E7D90601C96.jpg?v=1668561347&width=3024",
        alt: "Birthstone Bracelet"

    }
]
export default function Carousel() {
    const [slide, setSlide] = useState(0);
    
    const nextSlide = () => {
        setSlide(slide === slides.length - 1 ? 0: slide + 1);
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1);
    }
    return (
        <div className="carousel w-60 h-auto sm:w-72 ">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            {slides.map((item, idx) => {
                return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"}/>
            })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators">
                {slides.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
    )
}