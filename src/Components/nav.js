import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Stylesheets/NavCSS.css';
export default class nav extends Component {
  render() {
    return (
        <Container>
        <Navbar   expand="lg" variant="dark">
         
{/* 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Nav >
              <NavLink
                exact
                to="/"
               
              >
           
                HOME
     
              </NavLink>

              <NavLink
                exact
                to="/Weather"
               
              >
             
                
                Weather
              
              </NavLink>
            
              
            </Nav>
          {/* </Navbar.Collapse> */}
        </Navbar>
   </Container>
    );
  }
}
