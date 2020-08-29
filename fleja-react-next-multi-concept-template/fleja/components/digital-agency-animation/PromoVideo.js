import React, {Component} from 'react';
import Link from 'next/link';

export class PromoVideo extends Component {
    render() {
        return (
            <div className="main-banner freelancer-portfolio-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <div dangerouslySetInnerHTML={`<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/fiJIP2-Tylw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>`}/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h2 className="wow fadeInUp">What is UTCG?</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape1">
                    <img src={require("../../images/shapes/cube_corner.png")} alt="shape"/>
                </div>
                <div className="shape2">
                    <img src={require("../../images/shapes/corner_top_rt.png")} alt="shape"/>
                </div>
                <div className="shape3">
                    <img src={require("../../images/shapes/corner_bot_left.png")} alt="shape"/>
                </div>
                <div className="shape4">
                    <img src={require("../../images/shapes/4.png")} alt="shape"/>
                </div>
                <div className="shape5">
                    <img src={require("../../images/shapes/5.png")} alt="shape"/>
                </div>
                <div className="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape"/>
                </div>
                <div className="shape7">
                    <img src={require("../../images/shapes/7.png")} alt="shape"/>
                </div>
                <div className="shape8">
                    <img src={require("../../images/shapes/8.png")} alt="shape"/>
                </div>
                <div className="shape9 rotateme">
                    <img src={require("../../images/shapes/9.png")} alt="shape"/>
                </div>
                <div className="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape"/>
                </div>


                <div className="circle-shape1">
                    <img src={require("../../images/shapes/circle1.png")} alt="shape"/>
                </div>
                <div className="circle-shape2">
                    <img src={require("../../images/shapes/circle2.png")} alt="shape"/>
                </div>
                <div className="circle-shape3">
                    <img src={require("../../images/shapes/circle3.png")} alt="shape"/>
                </div>
            </div>
        );
    }
}

export default PromoVideo;
