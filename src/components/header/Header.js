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

    toggle() {
        const header = document.getElementById('header');
        header.classList.toggle('active');
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
            <header id="header">
                <a href="#logo" className="logo">Logo</a>
                <ul>
                    <li><a href="#home" onClick={() => this.toggle()}>Home</a></li>
                    <li><a href="#about" onClick={() => this.toggle()}>About</a></li>
                    <li><a href="#services" onClick={() => this.toggle()}>Services</a></li>
                    <li><a href="#portfolio" onClick={() => this.toggle()}>Portfolio</a></li>
                    <li><a href="#team" onClick={() => this.toggle()}>Team</a></li>
                    <li><a href="#contact" onClick={() => this.toggle()}>Contact</a></li>
                </ul>
                <div className="toggle-header" onClick={() => this.toggle()}>
                </div>
            </header>
        );
    }
}

export default Header;