import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';


class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                    name: "The Name of the Book",
                    testimonial: require("../../../reviews/nameofthebook.json")
                },
                {
                    name: "Calamitous Fortunes",
                    testimonial: require("../../../reviews/calamitousfortunes.json")
                }
            ]
        }
    }

    render() {
        const options = {
            loop: true,
            nav: true,
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
            },
            navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        };
        return (
        <section class="testimonial section-padding bg-grey " id="reviews">
            {
                this.state.books.map(book => (

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-heading center-heading text-center mb-60">
                                <h3 class="heading-title">Reviews for <i>{book.name}</i></h3>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="testimonials-slides">
                                <OwlCarousel ref="reviews" options={options}>
                                {
                                    book.testimonial.map(data => (
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
                                                {/* <div className="client-img"> */}
                                                    {/* <img src={data.img} alt={data.alt} className="img-fluid"/> */}
                                                {/* </div> */}
                                                <div class="client-text">
                                                    <h5>{data.name}</h5>
                                                    {/* <span className="designation">{data.desigantion}</span> */}
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
                ))
            }
    </section>
        );
    }
}

export default Review;
