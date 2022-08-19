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
                    quoteText: 'Beyond engaging Tales With Real Substance and Wisdom.',
                    text: `
                        I came across this incredible writer and all I can say is THIS is how it’s done! Short stories are
                        certainly not everyone’s cup of words, but many people simply don’t realize how extremely
                        satisfying it is to read a complete story with vivid characters and an engaging plot, all done in a
                        distinctive and well delivered manner . Each story was unique and well written with few of the
                        stories’ ending with a twist I didn&#39;t see coming.
                        This is a truly inventive collection of William&#39;s short stories and although I enjoyed his other
                        novel too, “Calamitous Fortunes”, I’m hoping that he will publish another book soon. He has a
                        gifted imagination and this collection is definitely one of my favorites.
                    `,
                    name: 'VNB',
                    desigantion: 'Developer',
                    classname: 'review-item'
                },
                {
                    id:2,
                    img: './assets/images/clients/test-2.jpg',
                    alt: 'images',
                    quoteText: 'Remarkable read. A must.',
                    text: `
                        Fully enjoyed the development of each set of characters. I found in a macabre way I was able to
                        relate to them. This is not your ordinary book with ordinary circumstances. The twists are built
                        up in crescendo so that you are unable to leave the story...until that final reveal. And then you get
                        this rush of finality as the story comes to an end. A few of them I wanted to jump up and give a
                        standing ovation.
                    `,
                    name: 'SRH',
                    desigantion: 'Developer',
                    classname: 'review-item'
                },
                {
                    id: 3,
                    img: './assets/images/clients/test-3.jpg',
                    alt: 'images',
                    quoteText: 'Stories that take you on Adventures',
                    text: `
                    Each of the stories takes the reader on very different journeys. The voice of the author is clear
                    and truthful; a pleasure to read. I can&#39;t wait for more....
                    `,
                    name: 'Bruce R. Pfaff',
                    desigantion: 'Developer',
                    classname: 'review-item'
                },
                {
                    id:4,
                    img: './assets/images/clients/test-2.jpg',
                    alt: 'images',
                    quoteText: 'Stop Reading Reviews and Read This Book',
                    text: `
                        I don&#39;t care who you are, what you like, or where you come from... You need to read this book. I
                        promise there is at least one story in this book that will speak to you. For me, it was all ten. Each
                        had a character I related to, a story that I both recognized and did not (in the utmost positive
                        way), and an idea that made me truly think. I wish I could express to you eloquently that you
                        must read this book, but I do not possess the writing skills for this. Mr. Spreadbury does though,
                        so go see for yourself.
                    `,
                    name: 'Riley Lyn',
                    desigantion: 'Developer',
                    classname: 'review-item'
                },
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
            }
        };
        return (
        <section class="testimonial section-padding bg-grey " id="reviews">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-heading center-heading text-center mb-60">
                            <h3 class="heading-title">Reviews for <i>The Name of the Book</i></h3>
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
    </section>
        );
    }
}

export default Review;
