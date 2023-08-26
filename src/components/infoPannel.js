import React from "react";
import '../css/infoPannel.css';
import PythonFlip from "./PythonFlip";
import JavaFlip from "./JavaFlip";
import NRFlip from "./NodeReact";

class InfoBox extends React.Component {

    render() {
      return (
    <div className='info'>
        <div className="outline">
            <div className="para">
            I have been coding for a little over <span style={{color: "#0087ca"}}>3 years</span> now and these are some of the languages Ive picked up along the way
            </div>
                <div class="row1">
                  <div className="item">
                    <PythonFlip/>
                  </div>
                  <div className="item">
                    <JavaFlip/>
                  </div>
                  <div className="item">
                    <NRFlip/>
                  </div>
                  </div>
                
                
            </div>

        </div>
        
         
        
      
      );
    };

  }

export default InfoBox;