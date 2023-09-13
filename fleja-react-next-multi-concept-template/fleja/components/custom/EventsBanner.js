import React, { Component } from "react";
import Link from "next/link";

export class EventsBanner extends Component {
  render() {
    return (
      <div className="main-banner freelancer-portfolio-home">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="hero-content">
                <h1 className="wow fadeInUp">Events</h1>
                <ul className="wow fadeInDown">
                  {/*<li><a href="#" target="_blank" className="facebook">*/}
                  {/*    <i className="icofont-facebook"/>*/}
                  {/*</a></li>*/}
                </ul>
                <div className="row align-items-center justify-content-center wow fadeInUp">
                  <div className="col-md-6">
                    <p>
                      We're excited to see you at our in person events this
                      year!
                    </p>
                  </div>
                </div>
                <a href="/home" className="btn btn-primary wow fadeInUp">
                  Back To Home
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="shape1">
          <img src="/images/shapes/cube_corner.png" alt="shape" />
        </div>
        <div className="shape2">
          <img src="/images/shapes/corner_top_rt.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/images/shapes/corner_bot_left.png" alt="shape" />
        </div>
        <div className="shape4">
          <img src="/images/shapes/4.png" alt="shape" />
        </div>
        <div className="shape5">
          <img src="/images/shapes/5.png" alt="shape" />
        </div>
        <div className="shape6">
          <img src="/images/shapes/6.png" alt="shape" />
        </div>
        <div className="shape7">
          <img src="/images/shapes/7.png" alt="shape" />
        </div>
        <div className="shape8">
          <img src="/images/shapes/8.png" alt="shape" />
        </div>
        <div className="shape9 rotateme">
          <img src="/images/shapes/9.png" alt="shape" />
        </div>
        <div className="shape10 rotateme">
          <img src="/images/shapes/10.png" alt="shape" />
        </div>
        <div className="circle-shape1">
          <img src="/images/shapes/circle1.png" alt="shape" />
        </div>
        <div className="circle-shape2">
          <img src="/images/shapes/circle2.png" alt="shape" />
        </div>
        <div className="circle-shape3">
          <img src="/images/shapes/circle3.png" alt="shape" />
        </div>
      </div>
    );
  }
}

export default EventsBanner;
