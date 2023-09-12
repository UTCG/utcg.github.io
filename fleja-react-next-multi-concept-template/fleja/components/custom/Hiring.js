import React, { Component } from "react";
import Link from "next/link";

export class Hiring extends Component {
  render() {
    return (
      <div className="main-banner freelancer-portfolio-home">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 align-items-center">
                <div className="hero-content" style={{ padding: "20px" }}>
                  <h1 className="wow fadeInUp">We're Hiring!</h1>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <p>
                        We're recruiting new members for our executive team! If
                        you're interested in being UTCG's next Marketing &
                        Design Coordinator, First Year Representative, or
                        General Executive, please fill out our application!
                      </p>
                      <a
                        href="https://forms.gle/kW4mAwMKGc4Xe7WW6"
                        target="_blank"
                        rel="noopener"
                        className="btn btn-primary wow fadeInUp"
                      >
                        Exec Application
                      </a>
                      <> </> {/* lol react */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
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

export default Hiring;
