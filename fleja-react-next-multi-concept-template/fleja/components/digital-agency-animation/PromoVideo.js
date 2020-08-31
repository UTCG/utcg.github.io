import React, {Component} from 'react';
import ReactPlayer from 'react-player/youtube';

export class PromoVideo extends Component {
    render() {
        return (
            <div className="main-banner freelancer-portfolio-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-7 col-md-12 hero-content" style={{textAlign: 'center'}}>
                                    <ReactPlayer url="https://youtu.be/fiJIP2-Tylw" width="100%" style={{margin: '0px 0px 15px 0px'}}/>
                                    <h2 className="wow fadeInUp">What is UTCG?</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape13">
                    <img src={require("../../images/shapes/13.png")} alt="shape"/>
                </div>
                <div className="shape18">
                    <img src={require("../../images/shapes/18.png")} alt="shape"/>
                </div>
                <div className="shape19">
                    <img src={require("../../images/shapes/19.png")} alt="shape"/>
                </div>
                <div className="shape20 rotateme">
                    <img src={require("../../images/shapes/20.png")} alt="shape"/>
                </div>
                <div className="shape21">
                    <img src={require("../../images/shapes/21.png")} alt="shape"/>
                </div>
                <div className="shape22">
                    <img src={require("../../images/shapes/22.png")} alt="shape"/>
                </div>
            </div>
        );
    }
}

export default PromoVideo;
