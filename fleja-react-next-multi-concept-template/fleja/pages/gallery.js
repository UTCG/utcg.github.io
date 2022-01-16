import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import GalleryBanner from '../components/custom/GalleryBanner';
import Portfolio from '../components/custom/Portfolio';

export class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <GalleryBanner />
                <Portfolio />
                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
