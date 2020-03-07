import React, { Component } from 'react';
import './style.css';


class Header extends Component {
    
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 0;
            const header = document.getElementById('header');
            
            if (isTop) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
            <header id="header">
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