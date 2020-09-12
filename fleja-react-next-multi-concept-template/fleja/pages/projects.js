import React, {Component} from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

export class projects extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Projects</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Projects</li>
                        </ul>
                    </div>
                    <div className="shape1">
                        <img src={require("../images/shapes/cube_corner.png")} alt="shape"/>
                    </div>
                    <div className="shape2">
                        <img src={require("../images/shapes/corner_top_rt.png")} alt="shape"/>
                    </div>
                    <div className="shape3">
                        <img src={require("../images/shapes/corner_bot_left.png")} alt="shape"/>
                    </div>
                </div>
                <section className="why-choose-us-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-us-img">
                                    {/*<img src={require("../images/1.jpg")} className="front-img" alt="img"/>*/}
                                    {/*<img src={require("../images/2.jpg")} className="back-img" alt="img"/>*/}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="why-choose-us-content">
                                    <div className="section-title">
                                        <span>About UTCG Projects</span>
                                        <h2>Don't let your dreams be dreams</h2>
                                    </div>
                                    <p>
                                        UTCG Projects is a new program to help you meet new people and develop new
                                        skills through working on a project related to CG. What you make is up to you,
                                        whether it's something in whether it be in computer vision, AR/VR, 3D modelling,
                                        or anything in between.
                                    </p>
                                    <p>
                                        Our goal is to help you network, get ahead academically, and develop outstanding
                                        projects for your resume.
                                    </p>
                                    {/*<a href="http://bit.ly/UTCGProjectsInfo" className="btn btn-primary">More Info</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="circle-top rotateme">
                        <img src={require("../images/circle-shape.png")} alt="circle"/>
                    </div>
                    <div className="circle-bottom rotateme">
                        <img src={require("../images/circle-shape.png")} alt="circle"/>
                    </div>
                    <div className="circle-dot">
                        <img src={require("../images/shapes/dot-shape1.png")} alt="shape"/>
                    </div>
                </section>
                <section className="about-us-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-8">
                                <div className="about-us-content">
                                    <div className="section-title">
                                        <h2>What you can do</h2>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-lg-6 col-md-6 col-sm-6 pr-3 pl-0">
                                            <div className="single-about-box">
                                                <div className="icon">
                                                    <i className="icofont-book"/>
                                                </div>
                                                <h3>Learner track</h3>
                                                <p>
                                                    For beginners who want to learn about different technologies
                                                    and develop their skills. They wish to learn about CG and develop a
                                                    smaller side project (individually or with a team) near the end of
                                                    the year.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 pr-0 pl-3">
                                            <div className="single-about-box">
                                                <div className="icon">
                                                    <i className="icofont-tools"/>
                                                </div>
                                                <h3>Project track</h3>
                                                <p>
                                                    For intermediates/experts with significant experience in CG or other
                                                    areas of CS who want to use this as an opportunity to develop
                                                    personal projects with a team.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 pr-3 pl-0">
                                            <div className="single-about-box">
                                                <div className="icon">
                                                    <i className="icofont-video"/>
                                                </div>
                                                <h3>Final Project</h3>
                                                <p>
                                                    No matter which track you choose, you get to make a neat project. You'll
                                                    demo it with a short video, which can be uploaded to YouTube and
                                                    shown off. What a flex!
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 pr-0 pl-3">
                                            <div className="single-about-box">
                                                <div className="icon">
                                                    <i className="icofont-mustache"/>
                                                </div>
                                                <h3>Mentors</h3>
                                                <p>
                                                    For students who want to take more initiative and leadership in
                                                    guiding groups of students, designing lesson content, answering
                                                    questions, and facilitating a community.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="about-us-image">
                                    {/*<img src={require("../images/about2.jpg")} alt="image"/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-info-area pt-120">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <a href="http://bit.ly/UTCGProjectsInfo" target="_blank">
                                        <i className="icon icofont-learn"/>
                                    </a>
                                    <h3>More Info</h3>
                                    <a href="http://bit.ly/UTCGProjectsInfo" target="_blank">bit.ly/UTCGProjectsInfo</a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <a href="http://bit.ly/UTCGProjectReg" target="_blank">
                                        <i className="icon icofont-pencil"/>
                                    </a>
                                    <h3>Register for Learner/Project Track</h3>
                                    <a href="http://bit.ly/UTCGProjectReg" target="_blank">bit.ly/UTCGProjectReg</a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="contact-info-box">
                                    <a href="http://bit.ly/UTCGMentorApp" target="_blank">
                                        <i className="icon icofont-mustache"/>
                                    </a>
                                    <h3>Apply to be a Mentor</h3>
                                    <a href="http://bit.ly/UTCGMentorApp" target="_blank">bit.ly/UTCGMentorApp</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}

export default projects;

let x = <p>This year, the University of Toronto Computer Graphics club (UTCG) has created a program that will help you
    network, get ahead academically, and most importantly, develop outstanding projects for your resume.</p>;