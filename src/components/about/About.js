import React, { Component } from 'react';
import './style.css';

class About extends Component {

    render() {
        return (
            <section className="sec" id="about">
                <div className="content">
                    <div className="mxw800">
                        <h3>Who We Are</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry of that on
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make that on
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining on
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <a href="#" className="bnt">Read Our Story</a>
                    </div>
                </div>
            </section>
        );
    }
} 

export default About;