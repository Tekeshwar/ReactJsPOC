import React, { Component } from 'react'; 

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#"></a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="../app">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li> 
                            <li>
                                <a href="#">Contact</a>
                            </li>                            
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="">
                                    <span className="glyphicon glyphicon-user"></span> Sign Up
					</a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="glyphicon glyphicon-log-in"></span> Login
					</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );

    }
}
export default Header;
