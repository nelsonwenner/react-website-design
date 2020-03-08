import React, { Component } from 'react';
import './style.css';

import facebook from '../../assets/img/facebook.png';
import twitter from '../../assets/img/twitter.png';
import linkedin from '../../assets/img/linkedin.png';


class Contact extends Component {

    render() {
        return (
            <section className="sec contact" id="contact">
                <div className="content-contact">
                    <div className="mxw800">
                        <h3>Send Us Message</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div className="contactForm">
                        <form>
                            <div className="row100">
                                <div className="inputBox50">
                                    <input type="text" name="" placeholder="Full Name"></input>
                                </div>
                                <div className="inputBox50">
                                    <input type="text" name="" placeholder="Email Address"></input>
                                </div>    
                            </div>
                            <div className="row100">
                                <div className="inputBox100">
                                    <textarea placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBox100">
                                    <input type="submit" name="" value="Send"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="sci">
                        <ul>
                            <li><a href="#"><img src={facebook}></img></a></li>
                            <li><a href="#"><img src={twitter}></img></a></li>
                            <li><a href="#"><img src={linkedin}></img></a></li>
                        </ul>
                    </div>
                    <p className="copyright">Copyright © Developer by <a href="#">Nelson Dias</a></p>
                </div>
            </section>
        );
    }
} 

export default Contact;