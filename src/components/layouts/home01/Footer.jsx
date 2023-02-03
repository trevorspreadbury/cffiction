import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (          
            <section className="footer pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mr-auto col-sm-6 col-md-12">
                            <div className="widget footer-widget mb-5 mb-lg-0">
                                <h5 className="widget-title">Contact</h5>
                                <p className="mt-3">Comments? Questions? Observations? Multi million dollar television or movie offers? Contact us at CalamitousFortunes.com</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-sm-6 col-md-12">
                            <div className="footer-widget mb-5 mb-lg-0">
                                <h5 className="widget-title">Social</h5>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="footer-widget footer-contact mb-5 mb-lg-0">
                                                        <ul className="footer-socials">
                    <li><Link to={{ pathname:"https://www.facebook.com/willcspread" }} target="_blank"><i className="fab fa-facebook-f" aria-hidden="true" /></Link></li>
                    <li><Link to={{ pathname:"https://www.instagram.com/willcspread/" }} target="_blank"><i className="fab fa-instagram" aria-hidden="true" /></Link></li>
                </ul>
 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-btm">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="copyright">
                                    <p>Copyright, 2023. Template Crafted by <Link to="https://themeforest.net/user/dreambuzz">Dreambuzz</Link> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="fixed-btm-top">
                    <a href="#top-header" className="js-scroll-trigger scroll-to-top"><i className="fa fa-angle-up"></i></a>
                </div>
            </section>


        );
    }
}

export default Footer;
