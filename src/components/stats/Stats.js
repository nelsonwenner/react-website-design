import React, { Component } from 'react';
import './style.css';


class Stats extends Component {

    render() {
        return (
            <section className="sec" id="stats">
                <div className="content">
                    <div className="mxw800">
                        <h3>Our Achievements</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry of that on
                            standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div className="statsBox">
                        <div className="box">
                            <h2>1200+</h2>
                            <h4>Projects</h4>
                        </div>
                        <div className="box">
                            <h2>800+</h2>
                            <h4>Happy Clients</h4>
                        </div>
                        <div className="box">
                            <h2>150+</h2>
                            <h4>Countries</h4>
                        </div>
                        <div className="box">
                            <h2>150+</h2>
                            <h4>Awards</h4>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
} 

export default Stats;