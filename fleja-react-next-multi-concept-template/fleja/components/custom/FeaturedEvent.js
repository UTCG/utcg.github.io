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
                                    <h1 className="wow fadeInUp">UTCG Projects</h1>
                                    {/*<ul className="wow fadeInDown">*/}
                                    {/*    /!*<li>*!/*/}
                                    {/*    /!*    <a href="#" target="_blank" className="facebook"><i className="icofont-facebook"/></a>*!/*/}
                                    {/*    /!*</li>*!/*/}
                                    {/*</ul>*/}
                                    <div className="row justify-content-center">
                                        <div className="col-md-8">
                                            <p>
                                                Are you interested in VR/AR, animation, VFX, gaming, and creative
                                                coding? UTCG is back for another year with a lot of exciting changes as
                                                we’re going virtual!
                                                <br/>
                                                We launching <b><i>UTCG Projects</i></b>, a brand new initiative that
                                                aims to bring students together in order to create and showcase some
                                                awesome projects by the end of the term! Are you a total beginner,
                                                novice, or an expert? Is your goal to learn new skills, meet new people,
                                                and to create show-stopping side projects? We’ve got you covered!
                                                <br/>
                                                <a href="http://bit.ly/UTCGProjectsInfoSessVid"
                                                   target="_blank"><u>Here's</u></a> a recording of our info session on
                                                UTCG Projects held on September 11.
                                                <br/>
                                                Official registration is closed, but email us if you would still like to
                                                get involved!
                                            </p>
                                            <a href="http://bit.ly/UTCGProjectsInfoSessVid" target="_blank"
                                               className="btn btn-primary wow fadeInUp">
                                                Info Session Recording
                                            </a> <a href="/projects" className="btn btn-primary wow fadeInUp">More
                                            Info</a> <a href="mailto:uoftcomputergraphics@gmail.com"
                                                        className="btn btn-primary wow fadeInUp">Email Us</a>
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

export default FeaturedEvent;
