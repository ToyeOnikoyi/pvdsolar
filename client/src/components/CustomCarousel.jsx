import React, { Component } from 'react';
import {Carousel,Image, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../style/Home.css';

class CustomCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
                <Carousel>
                    <Carousel.Item>
                        <Image src="assets/solar-8.jpg" />
                      <Carousel.Caption>
                          <h3>Jump In The New Age To Saving With Solar In Rhode Island</h3>
                          <Link to="contact">
                            <Button bsStyle="primary">Calculate Savings</Button>
                          </Link>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="assets/solar-4.jpg" />
                      <Carousel.Caption>
                          <h3> A solar investment here should provide a better return than the stock market </h3>
                          <Link to="contact">
                          <Button bsStyle="primary">Calculate Savings</Button>
                          </Link>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="assets/solar-3.jpg" />
                      <Carousel.Caption>
                          <h3>Turn Your Dreams of Solar Power For Your Home Into Reality</h3>
                          <Link to="contact">
                          <Button bsStyle="primary">Calculate Savings</Button>
                          </Link>
                      </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
           
            
        );
    }
}

export default CustomCarousel;