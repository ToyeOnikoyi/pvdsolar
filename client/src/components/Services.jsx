import React, { Component } from 'react';
import {Image } from 'react-bootstrap';
class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h1>Services</h1>
                <Image src="assets/solar-backdrop.jpg" />
            </div>
        );
    }
}

export default Services;