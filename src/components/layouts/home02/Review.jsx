import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: './assets/images/clients/test-1.jpg',
                    alt: 'images',
                    quoteText: 'Very Effective!',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'John Doe',
                    desigantion: 'Developer',
                    classname: 'review-item'
                },
                {
                    id:2,
                    img: './assets/images/clients/test-2.jpg',
                    alt: 'images',
                    quoteText: 'Very Effective!',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'John Doe2',
                    desigantion: 'Developer',
                    classname: 'review-item'
                },
                {
                    id: 3,
                    img: './assets/images/clients/test-3.jpg',
                    alt: 'images',
                    quoteText: 'Very Effective!',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'John Doe3',
                    desigantion: 'Developer',
                    classname: 'review-item'
                },
                {
                    id:4,
                    img: './assets/images/clients/test-2.jpg',
                    alt: 'images',
                    quoteText: 'Very Effective!',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'John Doe2',
                    desigantion: 'Developer',
                    classname: 'review-item'
                },
            ]
        }
    }

    render() {
        const options = {
            loop: true,
            nav: false,
            dots: true,
            margin: 10,
            center: true,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 6000,
            responsiveClass: true,
            responsive: {
                0: {
                items: 1
                },
                576: {
                items: 1
                },
                768: {
                items: 1
                },
                1000: {
                items: 1
                },
                1200: {
                items: 3
                }
            }
        };
        return (
        <section class="testimonial section-padding bg-grey pb-0" id="testimonial">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-heading center-heading text-center mb-60">
                            <h3 class="heading-title">Reviews from happy readers</h3>
                            <p>This book is concerned with creating typography and is essential for professionals who regularly work for clients.</p>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="testimonials-slides">
                            <OwlCarousel ref="reviews" options={options}>
                            {
                                this.state.testimonial.map(data => (
                                    <div className={data.classname} key={data.id}>
                                        <div className="client-info">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <h4>{data.quoteText}</h4>
                                            <p>{data.text}</p>
                                        </div>

                                        <div class="client-desc d-flex align-items-center">
                                            <div className="client-img">
                                                <img src={data.img} alt={data.alt} className="img-fluid"/>
                                            </div>
                                            <div class="client-text">
                                                <h5>{data.name}</h5>
                                                <span className="designation">{data.desigantion}</span>
                                            </div>
                                        </div>
                                    </div> 
                                ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}

export default Review;
