import React, {Component} from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MailingListForm from "../components/custom/MailingListForm";

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Contact Us</li>
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


                <section className="contact-info-area pt-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-email"></i>
                                    </div>
                                    <h3>Email Us</h3>
                                    <p><a href="#">utcomputergraphics@gmail.com</a></p>
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-facebook"></i>
                                    </div>
                                    <h3>Visit Facebook page</h3>
                                    <a href="https://www.facebook.com/UTComputerGraphics">Our Facebook</a>
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                                    </svg>
                                    </div>
                                    <h3>Join our Discord!</h3>
                                    <a href="https://discord.gg/TjjDYRT6Rz">Invite Link</a>
                                    <p></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-email"></i>
                                    </div>
                                    <h3>Join Mailing List</h3>
                                    <a href="http://eepurl.com/dGyWHr?fbclid=IwAR1VSrHcZcBTUEcFPBovD0sJ2mcxKPaSFr0qrXL_kkM_XRv02tRMbDncwx4">Join
                                        now!</a>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-area ptb-120">
                    <MailingListForm/>
                </section>

                <Footer/>
            </React.Fragment>
        );
    }
}

export default index;
