import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: [
                {
                    id: 1,
                    icon: 'bi bi-badge2',
                    title: 'The Name of the Book',
                    img: "assets/images/theNameOfTheBook.jpg",
                    text: 
                        `The Name of the Book is an intensely imaginative collection of must-read
                        short stories. Vigilantes, bank robbers, forbidden desire, extraordinary
                        birthday presents, Love defined, and unforgettable road trips fill these
                        pages: from the story of a man who clings to a life less lived to the man
                        who begs to end his charmed life, from the children who try to escape
                        their sadistic parent to the mother who will stop at nothing to hide the
                        crimes of her child. This collection of ten wondrous, and at times, mind-
                        blowing stories is the perfect introduction into the world of William
                        Christopher Spreadbury and his autonomous alter ego, and their
                        fascination with water. While these stories do not attempt to answer the
                        question, why are we here, it will definitely tell you what is here. And it is
                        everywhere.`,
                    bold: "Audiobook coming soon available on Audible, Amazon, and iTunes"
                },
                {
                    id: 2,
                    icon: 'bi bi-support',
                    title: 'Calamitous Fortunes',
                    img: "assets/images/calamitousFortunes.jpg",
                    text: 
                        `William and his mysterious partner are back with the incredible story of
                        three families, all ravaged by the same catastrophic event, each dealing
                        with it in very different ways. Calamitous Fortunes, is a beautifully
                        written novel, that also explores the supernatural force in the Universe that
                        shapes all of our lives. That mystical being that none of us have seen, but
                        still believe in its existence. It is not tangible, but most insist it is not
                        imaginary. We all pray that it looks upon us with great favor. CF is the
                        story of LUCK. Dane Cooper, the patriarch of one of the families comes
                        up with a devious plan for redemption after Luck forsakes him. The plan
                        involves killing one of his own children, but as depraved as Dane’s plan
                        may sound, as you read on, you will find there are others with far more
                        sinister intentions.`
                },
                {
                    id: 3,
                    icon: 'bi bi-rocket2',
                    title: "Saskia's Never",
                    img: "assets/images/saskiasNever.jpg",
                    text:
                        `William’s second novel is a roller coaster ride of sex and murder and rock
                        n roll. Saskia’s Never is Romance meets Dexter meets Quentin Tarantino.
                        A delightfully engaging Love Story, that is not afraid to tackle deep
                        philosophical issues while getting a little blood on its hands, perhaps all
                        the way up to the elbows. Did I mention that it’s also funny?
                        Meet Gando-- the heavy-drinking, pill-popping, jazz musician, turned
                        Catholic high school band leader, trying to raise his fatherless grandson.
                        Meet Never-- the bully, turned victim, turned vigilante, trying to Repair
                        the world. Meet Saskia-- the beautiful nurse, helplessly in Love with her
                        vocation, her boyfriend, and the Universal Order of things. And meet Jinx-
                        - the girl who lives up to her name. Join them all on this bone-chilling,
                        bloodcurdling, heartwarming adventure.`
                }
            ]
        }
    }
    render() {
        return (
        <section className="about-section section-padding bg-grey" id="books">
            <div className="container break">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-img vertical-center">
                            <img src={this.state.about[0].img} alt="Cover of novel" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="section-heading vertical-center">
                            <h3 className="heading-title">{this.state.about[0].title}</h3>
                            <p>{this.state.about[0].text}</p>
                            <b>{this.state.about[0].bold}</b>
                        </div>

                        </div>
                </div>
            </div>
            <div className="container break">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-img vertical-center">
                            <img src={this.state.about[1].img} alt="Cover of novel" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="section-heading vertical-center">
                            <h3 className="heading-title">{this.state.about[1].title}</h3>
                            <p>
                        William and his mysterious partner are back with the incredible story of
                        three families, all ravaged by the same catastrophic event, each dealing
                        with it in very different ways. Calamitous Fortunes, is a beautifully
                        written novel, that also explores the supernatural force in the Universe that
                        shapes all of our lives. That mystical being that none of us have seen, but
                        still believe in its existence. It is not tangible, but most insist it is not
                        imaginary. We all pray that it looks upon us with great favor. CF is the
                        story of LUCK. Dane Cooper, the patriarch of one of the families comes
                        up with a devious plan for redemption after Luck forsakes him. The plan
                        involves killing one of his own children, but as depraved as Dane’s plan
                        may sound, as you <em>read on</em>, you will find there are others with far more
                        sinister intentions.
                            </p>
                        </div>

                        </div>
                </div>
            </div>
            <div className="container break">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-img vertical-center">
                            <img src={this.state.about[2].img} alt="Cover of novel" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="section-heading vertical-center">
                            <h3 className="heading-title">{this.state.about[2].title}</h3>
                            <p>{this.state.about[2].text}</p>
                        </div>

                        </div>
                </div>
            </div>
        </section>  
        );
    }
}

export default Books;
