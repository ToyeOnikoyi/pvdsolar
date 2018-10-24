import React, { Component } from 'react';
import {Grid, Row, Col, Form, FormControl, FormGroup, ControlLabel, Checkbox, Button} from 'react-bootstrap';
import '../style/Contact.css';
import axios from 'axios';


class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            first_name: '', 
            last_name: '',
            email: '', 
            phone: '',
            message: '',
         };
        this.onTextChange = this.onTextChange.bind(this)
        this.onSubmitButton = this.onSubmitButton.bind(this)
    }

    onTextChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    async onSubmitButton(e){
        e.preventDefault();

        const {first_name, last_name, email, phone, message} = this.state

        console.log(first_name)
        console.log(last_name)
        console.log(email)
        console.log(phone)

        const newClient = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            message: message

        }
        
        let name = "toye"

        await axios.post('/api/form', newClient)
        .then(response =>{
            console.log('submit success: '+response.data)
        })
        .catch(error => {
            console.log('submit error: '+error.response.data)
        })

        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            message: ''
        })

    }



    render() {
        return (
            <Grid>
               
                <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    First Name
                    </Col>
                    <Col sm={10}>
                    <FormControl 
                       type="input" 
                       placeholder="First Name"
                       name="first_name" 
                       onChange={this.onTextChange} 
                    />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Last Name
                    </Col>
                    <Col sm={10}>
                    <FormControl 
                      type="input" 
                      placeholder="Last Name"
                      name="last_name"
                      onChange={this.onTextChange} 
                    />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>
                    <Col sm={10}>
                    <FormControl 
                      type="email" 
                      placeholder="Email" 
                      name="email"
                      onChange={this.onTextChange} 
                      />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Phone
                    </Col>
                    <Col sm={10}>
                    <FormControl 
                      type="input" 
                      placeholder="input"
                      name="phone" 
                      onChange={this.onTextChange} 
                      />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Message
                    </Col>
                    <Col sm={10}>
                    <FormControl 
                      componentClass="textarea" 
                      placeholder="How can we Help?" 
                      name="message"
                      onChange={this.onTextChange} 
                      />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={12}>
                    <Button className="contact-submit" onClick={this.onSubmitButton}  type="submit">Submit</Button>
                  </Col>

                </FormGroup>
                </Form>
            </Grid>
        );
    }
}

export default ContactUs;