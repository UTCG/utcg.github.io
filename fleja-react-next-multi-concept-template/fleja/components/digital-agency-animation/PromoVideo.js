import React, {Component} from 'react';
import Embed from "react-embed";

export class PromoVideo extends Component {
    render() {
        return (
            <div className="main-banner freelancer-portfolio-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-8 col-md-12 hero-content">
                                    <Embed url="https://youtu.be/fiJIP2-Tylw"/>
                                    <h2 className="wow fadeInUp">What is UTCG?</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape13">
                    <img src={require("../../images/shapes/13.png")} alt="shape" />
                </div>
                <div className="shape18">
                    <img src={require("../../images/shapes/18.png")} alt="shape" />
                </div>
                <div className="shape19">
                    <img src={require("../../images/shapes/19.png")} alt="shape" />
                </div>
                <div className="shape20 rotateme">
                    <img src={require("../../images/shapes/20.png")} alt="shape" />
                </div>
                <div className="shape21">
                    <img src={require("../../images/shapes/21.png")} alt="shape" />
                </div>
                <div className="shape22">
                    <img src={require("../../images/shapes/22.png")} alt="shape" />
                </div>
            </div>
        );
    }
}

export default PromoVideo;
