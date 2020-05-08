import React from 'react';
import {  Col, Container } from 'react-bootstrap';
import '../Stylesheets/FormCSS.css'
const Weatherform=(props) =>{
 
    return (
        <Container>
            <Col md={12} >
            <form   onSubmit={props.getWeather}>
         <input  className="form-control" type="text" name="city" placeholder="enter city"/>
         <button>find</button>

     </form>
            </Col>
        </Container>
    
    );
  }

  export default Weatherform;

