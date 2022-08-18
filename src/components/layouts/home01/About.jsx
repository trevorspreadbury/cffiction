import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: [
                {
                    id: 1,
                    icon: 'bi bi-badge2',
                    title: '10+ award achieved',
                    text: 'Debitis ab ipsum a autem sit ducimus voluptatem, quos. Consequatur non eum facilis, ex repellendus, vitae debitis.'
                },
                {
                    id: 2,
                    icon: 'bi bi-support',
                    title: 'Read On Any Device',
                    text: 'Debitis ab ipsum a autem sit ducimus voluptatem, quos. Consequatur non eum facilis, ex repellendus, vitae debitis.'
                },
                {
                    id: 3,
                    icon: 'bi bi-rocket2',
                    title: 'Marketing Goals',
                    text: 'Debitis ab ipsum a autem sit ducimus voluptatem, quos. Consequatur non eum facilis, ex repellendus, vitae debitis. '
                }
            ]
        }
    }
    render() {
        return (
        <section className="about-section section-padding bg-grey" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-img">
                            <img src="assets/images/williamchristopherspreadbury.jpg" alt="Headshot of William Christopher Spreadbury" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="section-heading">
                            {/* <span className="subheading">50% discount on early purchase</span> */}
                            <h3 className="heading-title">About The Author</h3>
                            <p>William Christopher Spreadbury (aka: Bill, Will, and upon occasion
                                Willie) is a writer and a pretty groovy dude. He is kind to the elderly and somewhat,
                                slightly tolerant of idiots and buffoons. He likes to think of himself as a nice guy and
                                most who know him would agree. He enjoys drinking wine and dancing but is not very
                                good at either. He calls Chicago home and has two amazing adult children that make
                                him prouder every day. William embraces all that is dark and forbidden within him and
                                pours it out onto his pages. If you are willing to join him on his journey, he will introduce
                                you to the part of your soul you pretend does not exist.</p>
                            </div>

                        {
                            this.state.about.map(data => (
                                <div className="about-text-block" key={data.id}>
                                    <i className={data.icon}></i>
                                    <h4>{data.title}</h4>
                                    <p>{data.text} </p>
                                </div>
                            ))
                        }
                        
                        <Link to="#" className="btn btn-main-2"><i className="fa fa-check mr-2"></i>More About Support</Link> 
                    </div>
                </div>
            </div>
        </section>  
        );
    }
}

export default About;
