import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import links from '../links';
import menus from '../menus2';

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="site-navigation main_menu" id="mainmenu-area">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link to="/" className="navbar-brand">
                                <img src="assets/images/logo-light.png" alt="Bookhunt" className="img-fluid"/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>
                           
                            <div className="collapse navbar-collapse" id="navbarMenu">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle"  
                                            id="navbar2" role="button" data-toggle="dropdown" aria-haspopup="true" 
                                            aria-expanded="false">Home <i className="fa fa-angle-down"></i>
                                        </Link>
                                        <ul className="dropdown-menu" >
                                            {
                                                links.map(data => (
                                                    
                                                    <Link className="dropdown-item" to={data.tolink} onClick={() => {window.location.href=data.tolink}}>
                                                        {data.namelink}
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </li>

                                    {
                                        menus.map(menu => (
                                            <li className="nav-item " key={menu.id}><Link to={menu.tomenu} className="nav-link js-scroll-trigger">{menu.namemenu}</Link></li>
                                        ))
                                    }  
                                    
                                </ul>
                            </div> 

                            <div className="header-right-info d-none d-lg-block">
                                <Link to="#" className="btn btn-dark-bg btn-small"><i className="fa fa-shopping-cart mr-2"></i>Get it Now</Link>
                            </div>
                        </div> 
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
