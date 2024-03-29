import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import links from '../links';
import menus from '../menus';

class Header extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }
    render() {
        return (
                        
            <header>
                <div className="site-navigation " id="mainmenu-area">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link to="/" className="navbar-brand">
                                <img src="assets/images/shinySide.jpg" alt="CFfiction -- Real Life... Made Interesting" className="img-fluid"/>
                            </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarMenu">
                                <ul className="navbar-nav ml-auto">
                                    {
                                        menus.map(menu => (
                                            <li className="nav-item " key={menu.id}><Link to={menu.tomenu} className="nav-link js-scroll-trigger">{menu.namemenu}</Link></li>
                                        ))
                                    }  
                                    
                                </ul>
                            </div>

                        </div> 
                    </nav>
                </div>
            </header>
         

        );
    }
}

export default Header;
