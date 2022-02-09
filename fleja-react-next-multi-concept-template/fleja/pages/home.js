import React, { Component } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HomepageBanner from '../components/custom/HomepageBanner';
import Contact from '../components/custom/Contact';
import BigCalendarComponent from '../components/custom/BigCalendarComponent';
import FeaturedEvent from '../components/custom/FeaturedEvent';
import PromoVideo from "../components/custom/PromoVideo";
import AnnouncementBanner from "../components/custom/AnnouncementBanner";

export class index extends Component {

    componentDidMount(){
        this.setState({ display: true });
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile:       true,
            live:         true,
        }).init();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <HomepageBanner />
                <FeaturedEvent />
                <PromoVideo/>
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
