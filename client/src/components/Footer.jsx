import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                  <Row className="solar-footer"> 
                    <Col xs={12} sm={3} md={3} lg={3} >
                      <h2 className="footer-text">Products</h2>
                      <p className="footer-text">Power Purchase Agreements</p>
                      <p className="footer-text">Ownership</p>
                      <p className="footer-text">Savings Calculation</p>
                    </Col>
                    <Col xs={12} sm={3} md={3} lg={3} >
                      <h2 className="footer-text">Company</h2>
                      <Link to="learn">
                        <p className="footer-text">Learn</p>
                      </Link>
                      <Link to="about">
                        <p className="footer-text">About Us</p>
                      </Link>
                      <Link to="contactUs">
                        <p className="footer-text">Contact US</p>
                      </Link>
                     </Col>
                     <Col xs={12} sm={3} md={3} lg={3} >
                     <h2 className="footer-text">Connect</h2>
                     <p className="footer-text">Twitter</p>
                     <p className="footer-text">Facebook</p>
                     <p className="footer-text">Youtube</p>
                     <p className="footer-text">Instagram</p>
                     </Col>
                     <Col xs={12} sm={3} md={3} lg={3} >
                       <h2 className="footer-text">Reach Out Now</h2>
                       <p className="footer-text">Rhode Island Solar</p>
                       <p className="footer-text">401-555-5555</p>
                     </Col>
                </Row>
            </div>
        );
    }
}

export default Footer;