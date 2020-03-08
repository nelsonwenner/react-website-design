import React, { Component } from 'react';
import './style.css';


class Portfolio extends Component {

    render() {
        return (
            <section className="sec work" id="portfolio">
                <div className="content">
                    <div className="mxw800">
                        <h3>Recent Work</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry of that on
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make that on
                            a type specimen book. 
                        </p>
                    </div>
                    <div className="workBox">
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
} 

export default Portfolio;