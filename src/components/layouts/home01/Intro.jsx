import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Intro extends Component {
    render() {
        return (
            <section id="shop" className="pt-100 center-about bg-grey">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="banner-content center-text">
                        <h1>Foster & VonCharles</h1>
                        <h3>Proudly welcome you to</h3>
                        <h3>The Works of William Christopher Spreadbury</h3>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="row align-items-center justify-content-between">
                        <div className="banner-content center-text">
                        <h2>AUDIOBOOK NOW AVAILABLE</h2>
                        <h2>GET IT ON AUDIBLE, ITUNES, OR AMAZON</h2>
                        <h2>Click the banner below!</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <a href="https://www.audible.com/pd/B0BT448PF5/?source_code=AUDFPWS0223189MWT-BK-ACX0-337284&ref=acx_bty_BK_ACX0_337284_rh_us">
                                <div className="client-logo">
                                    <img src="assets/images/theNameOfTheBook-banner.jpg" alt="banner for The Name of The Book" className="img-fluid"></img>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <div className="banner-content center-text">
                        <h2>Narrated by the incomparable, Scott Fleming</h2>
                        </div>
                    </div>
                </div>
                <section className="cta-2 clients ">
                    <div className="container">
                        <div className="center-text">
                            <h4><em>Click images to purchase on Amazon!</em></h4>
                        <br></br>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-4 col-sm-4">
                                <a href="https://www.amazon.com/Name-Book-Collection-Interesting-Self-Serving/dp/1717867936">
                                    <div className="client-logo">
                                        <img src="assets/images/theNameOfTheBook.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-4 col-sm-4">
                                <a href="https://www.amazon.com/Calamitous-Fortunes-Fiction-Christopher-Spreadbury/dp/107645108X">
                                    <div className="client-logo">
                                        <img src="assets/images/calamitousFortunes.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-4 col-sm-4">
                                <a href="https://www.amazon.com/Saskias-Never-Repairmans-Never-Ending-Story/dp/B09WPZ9PQR/">
                                    <div className="client-logo">
                                        <img src="assets/images/saskiasNever.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Intro;
