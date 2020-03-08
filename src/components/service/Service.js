import React, { Component } from 'react';

import './style.css';

import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
import icon3 from '../../assets/img/icon3.png';


class Service extends Component {

    render() {
        return (
            <section className="sec" id="services">
                <div className="content">
                    <div className="mxw800">
                        <h3>Who We Do</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry of that on
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make that on
                            a type specimen book.
                        </p>
                    </div>
                    <div className="services">
                        <div className="box">
                            <div className="iconBx">
                                <img src={icon1}></img>
                            </div>
                            <div className="content">
                                <h2>Design</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="iconBx">
                                <img src={icon2}></img>
                            </div>
                            <div className="content">
                                <h2>Development</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="iconBx">
                                <img src={icon3}></img>
                            </div>
                            <div className="content">
                                <h2>Branding</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;