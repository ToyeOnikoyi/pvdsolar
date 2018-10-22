import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import FA from 'react-fontawesome';
import '../style/Home.css';
import Footer from './Footer';
import ContactUs from './ContactUs';
import Learn from './Learn';
import Carousel from './CustomCarousel';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Grid>
                <Carousel/>
                <Jumbotron> 
                    <h2>WELCOME TO RI's #1 SOLAR Company </h2>
                    <p>Get a free estimate to see how much you can save a month with this renewable energy</p>
                    <p>Average Yearly savings in RI $367 </p>
                    <Link to="/contact">
                    <Button bsStyle="primary">Learn More</Button>
                    </Link>
                </Jumbotron>


                <Row>
                    <h2 className="text-center section-title">What We Do?</h2>
                    <Col xs={12} sm={4}>
                    <Image className="solar-man-pic" src="assets/solar-service-3.png"/>
                    <p>
                        Saving money without having to put anything down is always going to have a positive NPV. In Rhode Island, A PPA will save you a little bit each month, adding up to $10,588 over 20 years. That's like having an extra $5,178 to invest today, but it can't even come close to the return of a solar loan.
                    </p> 
                    </Col>
                    <Col xs={12} sm={4}>
                    <Image className="solar-man-pic" src="assets/solar-service-2.png"/>
                    <p>As we’re fond of saying, taking a loan for solar is a no-brainer, because it’s like agreeing to pay over time for something that is also making you money. In Rhode Island, the money you make comes from electricity savings, performance payments, and a huge federal tax credit equal to 30% of the cost of your solar installation at tax time next year. All that helps push the NPV of a solar loan to $15,654 better than a similar investment in the stock market. That's a mind-boggling return for any investment, and it's insane for something that requires no money down</p> 
                    </Col>
                    <Col xs={12} sm={4}>
                    <Image className="solar-man-pic" src="assets/solar-service-1.png"/>
                    <p>We give you a full estimate of how much you will be saving monthly and anually with our solar panels.</p> 
                    </Col>
                </Row>
                <Row>
                    <h2 className="text-center section-title">Solar Plans & Services</h2>
                    <Col>
                      
                    </Col>

                </Row>
                <Row>
                  <Col xs={12} sm={6} md={6} lg={6}>
                  <Image className="solar-fam-pic person-wrapper" src="assets/solar-6.jpg"/>
                  <p>
                      There are two huge factors working in solar's favor in Rhode Island: the state's Small-Scale Solar grant program and the Renewable Energy Growth Program. Combined, they mean you'll save thousands up front on a new solar system and sell the electricity it produces for thousands more. Solar is cheaper than ever, so the Rhode Island incentives combined with the Federal 30% tax credit for solar means a solar panel system pays itself back quickly and makes you lots of money over its 25-year warrantied life!
                  </p>
                  <p>
                        Residential solar is one of the most environmentally and financially beneficial home improvements available
                        today. The sun's rays have no operating or maintenance costs so pre-purchasing 
                        the next 25+ years of electricity through a solar installation can be both financially
                        and environmentally beneficial.
                  </p>
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={6} >
                    <iframe title="Solar-video" width="560" height="315"
                      src="http://www.youtube.com/embed/inPtRWtvDaM">
                    </iframe>
                  </Col>
                </Row>

                <Row>
                  <h2 className="text-center section-title">Contact Us To Find Out More</h2>
                    <ContactUs/>
                </Row>
                <h2 className="text-center section-title">Learn</h2>

                <Learn/>


                
            </Grid>
 
        );
    }
}

export default Home;