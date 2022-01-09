import React, {Component} from 'react';

export class Banner extends Component {
    render() {
        return (
            <div className="main-banner digital-agency-banner">
                <div id="scroll-down">
                    <span className="arrow-down"></span>
                    <span id="scroll-title">
                        Scroll down
                    </span>
                </div>

                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1 className="wow fadeInUp">Welcome to UTCG!</h1>
                                        <p className="wow fadeInDown">
                                            The University of Toronto Computer Graphics Club
                                            has a mission to create a supportive learning community that provides
                                            graphics-related workshops, research talks, field trips and social events
                                            for people who are interested in any part of computer graphics. This year
                                            we're going virtual!
                                        </p>
                                        <a href="http://eepurl.com/dGyWHr?fbclid=IwAR1VSrHcZcBTUEcFPBovD0sJ2mcxKPaSFr0qrXL_kkM_XRv02tRMbDncwx4"
                                           target="_blank" className="btn btn-primary wow fadeInLeft">Add me to Mailing
                                            List</a>
                                        <a href="https://discord.gg/TjjDYRT6Rz"
                                           target="_blank" className="btn btn-primary wow fadeInLeft">Join the Discord</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-social-buttons">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/UTComputerGraphics">
                                <i className="icofont-facebook"></i>

                                <span>Facebook</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/utcomputergraphics">
                                <i className="icofont-instagram"></i>

                                <span>Instagram</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://discord.gg/TjjDYRT6Rz">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                            </svg>

                                <span>Discord</span>
                            </a>
                        </li>
                    </ul>
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
                    <img src={require("../../images/shapes/cone_grey.png")} alt="shape"/>
                </div>
                <div className="shape5">
                    <img src={require("../../images/shapes/5.png")} alt="shape"/>
                </div>
                <div className="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape"/>
                </div>
                <div className="shape7">
                    <img src={require("../../images/shapes/ring_cyan.png")} alt="shape"/>
                </div>
                <div className="shape8">
                    <img src={require("../../images/shapes/teapot_grey.png")} alt="shape"/>
                </div>
                <div className="shape9 rotateme">
                    <img src={require("../../images/shapes/9.png")} alt="shape"/>
                </div>
                <div className="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape"/>
                </div>
                <div className="circle-shape1">
                    <img src={require("../../images/shapes/bunny_grey.png")} alt="shape" className="w-150"/>
                </div>
            </div>
        );
    }
}

export default Banner;
