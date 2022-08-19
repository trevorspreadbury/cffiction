import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Intro extends Component {
    render() {
        return (
            <section className="pt-100 center-about bg-grey">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading text-center">
                                <Link to="https://www.amazon.com/Name-Book-Collection-Interesting-Self-Serving/dp/1717867936">Click here to buy The Name of the Book now on Amazon! </Link>
                            </div>
                            <div className="section-heading text-center">
                                <Link to="https://www.amazon.com/Calamitous-Fortunes-Fiction-Christopher-Spreadbury/dp/107645108X">Click here to buy Calamitous Fortunes now on Amazon! </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="cta-2 clients ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-8 ">
                                <div className="client-logo">
                                    <img src="assets/images/saskiasNever.jpg" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-8">
                                <div className="client-logo">
                                    <img src="assets/images/calamitousFortunes.jpg" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-8">
                                <div className="client-logo">
                                    <img src="assets/images/theNameOfTheBook.jpg" alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Intro;
