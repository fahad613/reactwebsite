import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
        
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-lg-10 mx-auto">



                        <nav className="navbar navbar-expand-lg navbar-light  ">
                            <NavLink className="navbar-brand" to="/">Log</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink activeClassName="active_nav"
                                            exact
                                            className="nav-link"
                                            to="/">Home
                                          </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            activeClassName="active_nav"
                                            exact
                                            className="nav-link"
                                            to="Services">Services
                                          </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact
                                            activeClassName="active_nav"
                                            className="nav-link"
                                            to="About">About
                                          </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact
                                            activeClassName="active_nav"
                                            className="nav-link"
                                            to="Content">Contact
                                          </NavLink>
                                    </li>

                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;