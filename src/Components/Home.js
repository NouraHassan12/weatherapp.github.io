import React, { Component } from 'react';
import '../Stylesheets/HomeCSS.css';


export default class Home extends Component {
  render() {
    return (
      <div>
  <div className="parent">
          <div className="child1">
          <h3>Logo</h3>
          <div className="copyrights"> 
              <p>cpoy rights saved</p>
          </div>
          </div>

          <div className="child2">
        <h1>Hello<br/>
            i am <br/>
            Patrick
        </h1>

        <div className="content">
            <p> Lorem ipsum is a placeholder text
            <br/>
            Lorem ipsum is a placeholder 
            <br/>
            Lorem ipsum is a 
            
            </p>
           
        </div>
          </div>

          <div className="child3">
          
          </div>
        </div>
 
      </div>
    );
  }
}
