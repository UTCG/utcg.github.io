import React, {Component} from 'react';

export default class AnnouncementBanner extends Component {
    render() {
        return (
            <section className="cta-area ptb-120 bg-08071c">
                <div className="container">
                    <div className="cta-content">
                        <span>Wanna get involved?</span>
                        <h2>Exec applications are open!</h2>
                        <p>
                            We're looking for a First Year Representative as well as a Marketing and Design
                            Coordinator. We encourage you to apply if you're interested in what we do!
                        </p>
                        <a href="http://bit.ly/UTCGExecApp" target="_blank"
                           className="btn btn-primary wow fadeInUp">Apply</a>
                    </div>
                </div>

                <div className="shape5">
                    <img src={require("../../images/shapes/5.png")} alt="shape"/>
                </div>
                <div className="shape7">
                    <img src={require("../../images/shapes/7.png")} alt="shape"/>
                </div>
                <div className="shape9 rotateme">
                    <img src={require("../../images/shapes/9.png")} alt="shape"/>
                </div>
                <div className="shape14 rotateme">
                    <img src={require("../../images/shapes/14.png")} alt="shape"/>
                </div>
                <div className="shape15 rotateme">
                    <img src={require("../../images/shapes/15.png")} alt="shape"/>
                </div>
            </section>
        );
    }
}
