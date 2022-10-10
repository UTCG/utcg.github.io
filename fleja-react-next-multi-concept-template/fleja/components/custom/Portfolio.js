import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import Link from 'next/link'

const masonryOptions = {
    transitionDuration: 0
};

const portfolio_images = [
    { 
        image: "/images/lego_alain.jpg",
        title: "SIGGRAPH Info Session 2020", 
        description: "A photo of some of the exec team from the SIGGRAPH 2020 Information Session!",
        relatedLink: "https://www.facebook.com/events/568018043769485/"
    },
    { 
        image: "/images/clubfair.jpg",
        title: "CS Clubs Fair 2022", 
        description: "Some of the exec team at the 2022 CS Welcome to the Program event!",
        relatedLink: "#"
    },
];

export class Portfolio extends Component {
    render() {
        const images = portfolio_images.map((image, idx) => {
            return (
                <div className="col-lg-3 col-md-4 col-sm-6 item" key={idx}>
                    <div className="portfolio-item">
                        <img src={image.image} alt="portfolio-image" />

                        <div className="portfolio-overlay">
                            <div className="portfolio-content">
                                <h3>{image.relatedLink ? 
                                         <a href={`${image.relatedLink}`}>{image.title}</a> :
                                         <div style={{color: "black"}}>{image.title}</div>
                                    }
                                </h3>
                                <span>{image.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <section className="portfolio-area ptb-120 bg-08071c">
                <div className="container">
                    <div className="section-title">
                        <span>Pictures</span>
                        <h2>Some pictures from some of our past events!</h2>
                    </div>
                </div>

                <Masonry
                    className={'grid row m-0'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    {images}
                </Masonry>
            </section>
        );
    }
}

export default Portfolio;
