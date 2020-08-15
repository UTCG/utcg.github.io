import React, {Component} from 'react';
import Link from 'next/link';

export class Banner extends Component {
    render() {
        return (
            <div className="main-banner freelancer-portfolio-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 align-items-center">
                                <div className="hero-content">
                                    <h1 className="wow fadeInUp">Hi UTCG Community!</h1>
                                    {/*<ul className="wow fadeInDown">*/}
                                    {/*    /!*<li>*!/*/}
                                    {/*    /!*    <a href="#" target="_blank" className="facebook"><i className="icofont-facebook"/></a>*!/*/}
                                    {/*    /!*</li>*!/*/}
                                    {/*</ul>*/}
                                    <p>
                                        Are you interested in VR/AR, animation, VFX, gaming, and creative coding? UTCG
                                        is back for another year with a lot of exciting changes as we’re going virtual!
                                        <br/>
                                        We are hoping to launch “UTCG Projects”, a brand new initiative that aims to
                                        bring students together in order to create and showcase some awesome
                                        projects by the end of the term! Are you a total beginner, novice, or an
                                        expert?
                                        Is your goal to learn new skills, meet new people, and to create
                                        show-stopping side projects? We’ve got you covered!
                                        <br/>
                                        With all this excitement, WE NEED YOUR HELP! We want to gauge student
                                        interest, experience levels, and other important information that will
                                        help us craft the perfect project environment.
                                        If you’re interested, please fill out this survey and we will keep you
                                        updated!
                                    </p>
                                    <a href="https://utcomputergraphics.typeform.com/to/mpw28M9I"
                                       className="btn btn-primary wow fadeInUp">
                                        UTCG Projects Survey
                                    </a>

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

export default Banner;
