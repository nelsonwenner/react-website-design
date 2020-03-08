import React, { Component } from 'react';
import './style.css';

import img1 from '../../assets/img/1.jpg';
import img2 from '../../assets/img/2.jpg';
import img3 from '../../assets/img/3.jpg';
import img4 from '../../assets/img/4.jpg';


class Team extends Component {

    render() {
        return (
            <section className="sec" id="team">
                <div className="content">
                    <div className="mxw800">
                        <h3>Meet Our Expert</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry of that on
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make that on
                            a type specimen book.
                        </p>
                    </div>
                    <div className="teamBox">
                        <div className="member">
                            <div className="imgBox">
                                <img src={img1}></img>
                            </div>
                            <div className="details">
                                <div>
                                    <h2> Luan Rodrigues <br></br> <span>Criative Director</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="imgBox">
                                <img src={img2}></img>
                            </div>
                            <div className="details">
                                <div>
                                    <h2> Felipe <br></br> <span>Criative Director</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="imgBox">
                                <img src={img3}></img>
                            </div>
                            <div className="details">
                                <div>
                                    <h2> Paulo Vilarinho <br></br> <span>Criative Director</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="imgBox">
                                <img src={img4}></img>
                            </div>
                            <div className="details">
                                <div>
                                    <h2> Carlos <br></br> <span>Criative Director</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
} 

export default Team;