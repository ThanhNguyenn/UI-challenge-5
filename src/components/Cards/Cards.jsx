import React, { useState, useRef } from "react";
import Card from '../Card/Card'
import './Cards_Styled.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";
function Cards() {
    const info = [
        {
            quote: "\"Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others.\"",
            authorName: "TERRY IVANS",
            position: "Project manager",
        },
        {
            quote: "\"Easiest and most effective way to boost your revenue by decreasing card abandonment.\"",
            authorName: "DAVID HENZEL",
            position: "Product manager",
        },
        {
            quote: "\"Within 1 month of setting up, our convention rate of visitors to email subcribers shot up 20%.\"",
            authorName: "BEN PHILBAUM",
            position: "Marketing manager",
        },
        {
            quote: "\"Great theme and my site looks wonderful! A huge step up from the Thesis Framework.\"",
            authorName: "LILACH BULLOCKS",
            position: "Entrepreneur",
        },
    ]



    const customerSlider = useRef();

    const settings = {
        infinite: true,
        arrows: false,
        dots: true,
        // ref={(slider) => (customerSlider.current = slider)}
        ref: (slider) => (customerSlider.current = slider),
        
    }

    console.log(customerSlider.current)



    return (
        <div className="cards--container">
                <Slider {...settings} >
                    {info.map(item => <Card name={item.authorName} quote={item.quote} position={item.position}/>)}
                </Slider>
                <div className="cards--btn--container">
                    <BsChevronLeft stroke-width="1px" className="cards--btn" onClick={() => customerSlider.current.slickPrev()} />
                    <BsChevronRight stroke-width="1px" className="cards--btn" onClick={() => customerSlider.current.slickNext()}/>
                </div>
        </div>
    )
}





export default Cards
