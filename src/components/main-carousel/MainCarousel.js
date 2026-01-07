import React from 'react';
import './MainCarousel.scss';
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import ExampleCarouselImage from './ExampleCarouselImage';


export default function MainCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const slides = [
    {
        image: "https://m.media-amazon.com/images/I/718-1-VUk7L.jpg",
        title: "Technology",
        about: "Latest tech news and innovations",
        badge: "Technology",
        slideTitle: "10 tell-tale signs you need to get a new startup.",
        description: "No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case.",
        author: "Louis",
        date: "Jan 01 2020",
        readTime: "5 min read"
    },
    {
        image: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=pexels-eberhardgross-443446.jpg&fm=jpg", 
        title: "Business",
        about: "Business strategies and insights",
        badge: "Business",
        slideTitle: "55 tell-tale signs you need to get a new startup.",
        description: "No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case.",
        author: "Louis",
        date: "Jan 01 2020",
        readTime: "5 min read"
    },
    {
        image: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-1080p-Full-HD-Images.jpg",
        title: "Lifestyle", 
        about: "Living tips and wellness",
        badge: "Lifestyle",
        slideTitle: "99 tell-tale signs you need to get a new startup.",
        description: "No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case.",
        author: "Louis",
        date: "Jan 01 2020",
        readTime: "5 min read"
    }
];

    return (
        <div className="position-relative">
            <Carousel className='carousel' controls={false} indicators={false} activeIndex={index} onSelect={handleSelect}>
                {slides.map((slide, idx) => (
                    <Carousel.Item key={idx}>
                        <ExampleCarouselImage src={slide.image} text="First slide" />
                        <Carousel.Caption className='text-start w-50'>
                            <Badge bg="danger">  <span className="dot-icon">●</span> {slide.badge}</Badge>
                            <h1>{slide.slideTitle}</h1>
                            <p>{slide.description}</p>
                            <p>
                                <img
                                    src="https://blogzine.webestica.com/assets/images/avatar/11.jpg"
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                    alt="Profile"
                                />&nbsp;
                                <span>by {slide.author}</span> &nbsp;
                                <span className="dot-icon">●</span> &nbsp; {slide.date} &nbsp; <span className="dot-icon">●</span> &nbsp; {slide.readTime}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            
            <div className="side-indicators position-absolute top-50 w-25 end-0 translate-middle-y me-3">
                {slides.map((slide, idx) => (
                    <div 
                        key={idx}
                        className={`side-indicator ${idx === index ? 'active' : ''}`}
                        onClick={() => handleSelect(idx)}
                    >
                        <img 
                            src={slide.image} 
                            alt={slide.title}
                            className="side-indicator-image"
                        />
                        <div className={`side-indicator-content ${idx === index ? 'active' : ''}`}>
                            <h1 className={`side-indicator-title ${idx === index ? 'active' : ''}`}>{slide.title}</h1>
                            <p className={`side-indicator-about ${idx === index ? 'active' : ''}`}>{slide.about}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
