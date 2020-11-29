import React, { Component } from 'react';

export class Team extends Component {
    render() {
        return (
            <section className="team-area bg-image ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span className="wow fadeInUp">Team Members</span>
                        <h2 className="wow fadeInDown">Meet UTCG's Executive Team</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/vice_president_e.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="https://www.instagram.com/roya_makes_stuff/"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Roya Shams</h3>
                                    <span>Co-President</span>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/chanz.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Chanz Valmonte</h3>
                                    <span>Co-President</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/sally.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="https://www.instagram.com/sketchedbysally/"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Sally Chiu</h3>
                                    <span>VP Internal</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/2.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="https://rikingurditta.github.io"><i className="icofont-home"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/rikin-gurditta"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="https://github.com/rikingurditta"><i className="icofont-github"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Rikin Gurditta</h3>
                                    <span>VP External</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/team-image/2.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                        <li><a href="https://ca.linkedin.com/in/akiki-liang-830019177"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="https://github.com/akiki-liang0"><i className="icofont-github"></i></a></li>
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Akiki Liang</h3>
                                    <span>Projects Chair</span>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/patsy.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Patsy Jian</h3>
                                    <span>Marketing & Design Coordinator</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={require("../../images/louis.jpg")} className="member-img" alt="team" />
                                    <img src={require("../../images/team-image/team-back.jpg")} className="back-image" alt="back-image" />

                                    <ul className="social-links">
                                    </ul>
                                </div>

                                <div className="team-content">
                                    <h3>Louis Zhang</h3>
                                    <span>First Year Rep</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-top rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="shape2">
                    <img src={require("../../images/shapes/ring_cyan.png")} alt="shape" />
                </div>
                <div className="shape10 rotateme">
                    <img src={require("../../images/shapes/10.png")} alt="shape" />
                </div>
                <div className="circle-bottom rotateme">
                    <img src={require("../../images/circle-shape.png")} alt="circle" />
                </div>
                <div className="shape6">
                    <img src={require("../../images/shapes/6.png")} alt="shape" />
                </div>
            </section>
        );
    }
}

export default Team;
