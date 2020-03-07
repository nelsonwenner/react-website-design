import React, { Component } from 'react';


class Header extends Component {

    render() {
        return (
            <header className="header">
                <a href="#logo" className="logo">Logo</a>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </header>
        );
    }
}

export default Header;