import React, { Component } from 'react';

class PricingTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: [
                {
                    id: 1,
                    icon: 'fa fa-circle',
                    title: 'Ebook Version',
                },
                {
                    id: 2,
                    icon: 'fa fa-circle',
                    title: 'Audio Book',
                },
                {
                    id: 3,
                    icon: 'fa fa-circle',
                    title: 'PDF version',
                },
                {
                    id: 4,
                    icon: 'fa fa-circle',
                    title: 'Free Subscripion',
                },
            ]
        }
    }
   

    render() {
        return (

            <ul className="pricing-features">
                {
                this.state.listItem.map(data => (
                    <li key={data.id}><i className={data.icon}></i> {data.title}</li>
                    ))
                }
            </ul>
        );
    }

}

export default PricingTwo;
