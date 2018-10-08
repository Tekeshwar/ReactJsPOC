import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">ShareBook</a>
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
                                <a href="../Signup">
                                    <span className="glyphicon glyphicon-user"></span> Sign Up
					</a>
                            </li>
                            <li>
                                <a href="../Signin">
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
