import React, { Component } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import EventsBanner from '../components/custom/EventsBanner';
import Cta from '../components/custom/Cta';
import BigCalendarComponent from '../components/custom/BigCalendarComponent';
import PastEvents from '../components/custom/PastEvents';
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
                <EventsBanner />
                <BigCalendarComponent />
                <PastEvents />
                <Cta />
                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
