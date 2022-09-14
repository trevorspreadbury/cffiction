import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Intro extends Component {
    render() {
        return (
            <section id="shop" className="pt-100 center-about bg-grey">

                <section className="cta-2 clients ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4 ">
                                <a href="https://www.amazon.com/Name-Book-Collection-Interesting-Self-Serving/dp/1717867936">
                                    <div className="client-logo">
                                        <img src="assets/images/theNameOfTheBook.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <a href="https://www.amazon.com/Calamitous-Fortunes-Fiction-Christopher-Spreadbury/dp/107645108X">
                                    <div className="client-logo">
                                        <img src="assets/images/calamitousFortunes.jpg" alt="" className="img-fluid"/>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-4">
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
