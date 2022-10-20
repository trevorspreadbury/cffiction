import React, { Component } from 'react';
import {Header, Intro, About, Review, Contact, Footer, Books } from '../layouts/home01/index';

class Home01 extends Component {
    render() {
        return (
            <div className="counter-scroll bg-home1 has-one-page">       
                <Header />       
                        <Intro />
                        <Books />
                        <Review />
                        <About />
                <Footer />
            </div>
        );
    }
}

export default Home01;