import React, {Component} from 'react';
import Link from 'next/link';

export class FeaturedEvent extends Component {
    render() {
        return (
            <div className="main-banner freelancer-portfolio-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 align-items-center">
                                <div className="hero-content" style={{padding: '20px'}}>
                                    <h1 className="wow fadeInUp">Shaders Workshop</h1>
                                    {/*<ul className="wow fadeInDown">*/}
                                    {/*    /!*<li>*!/*/}
                                    {/*    /!*    <a href="#" target="_blank" className="facebook"><i className="icofont-facebook"/></a>*!/*/}
                                    {/*    /!*</li>*!/*/}
                                    {/*</ul>*/}
                                    <div className="row justify-content-center">
                                        <div className="col-md-8">
                                            <p>
                                                Join us for a workshop on using OpenGL shaders to make noise art! We’ll
                                                cover the basics of shader programming, rendering shapes, fractals, and
                                                patterns, and animating them. Then we’ll compete to see who can make the
                                                prettiest art!
                                                <br/>
                                                Check out our companion page to see some examples of trippy art we'll make.
                                            </p>
                                            <a href="http://bit.ly/UTCGProjectsInfoSessVid" target="_blank"
                                               className="btn btn-primary wow fadeInUp">
                                                Register on EventBrite
                                            </a>
                                            <> </> {/* lol react */}
                                            <a href="https://utcg.github.io/workshops/2022/02/10/shaders" target="_blank"
                                               rel="noopener"
                                               className="btn btn-primary wow fadeInUp">
                                                Companion Page
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape1">

                </div>
                <div className="shape2">

                </div>
                <div className="shape3">

                </div>
                <div className="shape4">
                    <img src="/images/shapes/4.png" alt="shape"/>
                </div>
                <div className="shape5">
                    <img src="/images/shapes/5.png" alt="shape"/>
                </div>
                <div className="shape6">
                    <img src="/images/shapes/6.png" alt="shape"/>
                </div>
                <div className="shape7">
                    <img src="/images/shapes/7.png" alt="shape"/>
                </div>
                <div className="shape8">
                    <img src="/images/shapes/8.png" alt="shape"/>
                </div>
                <div className="shape9 rotateme">
                    <img src="/images/shapes/9.png" alt="shape"/>
                </div>
                <div className="shape10 rotateme">
                    <img src="/images/shapes/10.png" alt="shape"/>
                </div>


                <div className="circle-shape1">
                    <img src="/images/shapes/circle1.png" alt="shape"/>
                </div>
                <div className="circle-shape2">
                    <img src="/images/shapes/circle2.png" alt="shape"/>
                </div>
                <div className="circle-shape3">
                    <img src="/images/shapes/circle3.png" alt="shape"/>
                </div>
            </div>
        );
    }
}

export default FeaturedEvent;
