import React from 'react';
import '../Stylesheets/WeathercardCSS.css'
import { Container } from 'react-bootstrap';


const Weathercard =(props)=> {
 
    return (
        <Container>
      <div className="weatherinfo">
          <p>
          {props.city} 
          </p>
         <p> {props.description}</p>
     <p> {props.temprature}</p>
    <p>  {props.temp_min} {props.temp_max}
      </p>
      </div>
      </Container>
    );

}
export default Weathercard;