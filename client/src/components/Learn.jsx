import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import '../style/learn.css'

class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
              <Grid className="learn-style">
                <Row>
                <Col xs={12} sm={6}>
                     <Image className="learn-pic" src="assets/rhode-island-purchase.png"/>
                
                  <p className="learn-pic-text">
                    Solar panel technology has also come a long way. Solar power systems are now 
                 much more efficient and have become more affordable for residential customers. 
                 Aesthetically speaking, solar panels are also sleeker and more attractive. 
                 No more ugly arrays! Today’s panels can blend nicely with the roof, adding style and value to 
                 the home.
                 </p>
                 </Col>
                 <Col xs={12} sm={6}>
                  <Row>
                     <Col xs={6} sm={6}>
                       <FontAwesome
                            name='check-circle'
                            size='1x'
                            spn
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                         />  
                     </Col>
                     <Col className="learn-list"  sm={6} xs={6} smPull={6}>
                     <h4>Quality without Compromise</h4>
                     </Col>
                     <p>To every last nut and bolt, we will only install materials to last the test of time.</p>
                  </Row>
                  <Row>
                  <Col xs={6} sm={6}>
                       <FontAwesome
                            name='check-circle'
                            size='1x'
                            spn
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                         />  
                     </Col>
                     <Col className="learn-list"  sm={6} xs={6} smPull={6}>
                     <h4>Ethics in Transparency</h4>
                     </Col>
                     <p>If we plan to be around as long as your system, it is critical to be upfront about performance predictions and return on investment estimates.</p>       
                 </Row>
                 <Row>
                 <Col xs={6} sm={6}>
                       <FontAwesome
                            name='check-circle'
                            size='1x'
                            spn
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                         />  
                     </Col>
                     <Col className="learn-list"  sm={6} xs={6} smPull={6}>
                     <h4>A Holistic Approach</h4>
                     </Col>
                     <p>We provide the knowledge and guidance based on total energy management of the property so you can make the best decision for you.</p>
                 </Row>
                 </Col>
                 </Row>
             </Grid>

        );
    }
}

export default Learn;