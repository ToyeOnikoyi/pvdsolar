import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import NavBar from './components/CustomNavBar';
import ContactUs from './components/ContactUs';
import About from './components/About';
import ContactBar from './components/contactBar';
import Learn from './components/Learn';

class App extends Component {
  render() {
    return (
  
      <Router>
        <div>
          <ContactBar/>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route  path="/services" component={Services}/>
          <Route  path="/contact" component={ContactUs}/>
          <Route  path="/about" component={About}/>
          <Route  path="/learn" component={Learn}/>
         

        </div>
      </Router>
    );
  }
}

export default App;
