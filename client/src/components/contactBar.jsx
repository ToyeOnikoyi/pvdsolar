import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Image, Grid, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../style/ContactBar.css';
import FontAwesome from 'react-fontawesome';

class ContactBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Grid className="contactBar">
                <Row>
                    <Col sm={4} xs={4} >
                        <FontAwesome
                            name='phone'
                            size='2x'
                            spin
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />
                    </Col>
                    <Col className="contactbar-number"  xs={6} sm={4} xsPull={4} smPull={4}  >
                      <h4>401-537-8081</h4>
                      
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ContactBar;