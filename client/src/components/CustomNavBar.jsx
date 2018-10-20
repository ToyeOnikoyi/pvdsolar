import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../style/CustomNavBar.css';

class CustomNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Navbar default collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">RI SOLAR</Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
              </Navbar.Header>
              <Navbar.Collapse/>
                <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                      Home
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/contact" to="/contact">
                    Contact
                    </NavItem>

                    
                </Nav>

            </Navbar>
        );
    }
}

export default CustomNavBar;