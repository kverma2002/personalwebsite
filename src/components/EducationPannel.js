import React from "react";
import '../css/EducationPannel.css';
import SCFlip from "./SCFlip";
import SFFlip from "./SFFlip";

class EducationPannel extends React.Component {

    render() {
      return (
    <div className='info-education'>
        <div className="outline-education">
          <div className="para-education">
          <span style={{color: "greenyellow"}}>Learning</span> has always been one of my <span style={{color: "greenyellow"}}>passions</span> and I have had the oppurtunity to go to two great schools who have helped me become the person I am today
          </div> 
                <div class="row1-education">
                    <div class="item">
                      <SCFlip/>
                    </div>
                    <div class="item">
                      <SFFlip/>
                    </div>
                </div>
              </div>
        
        </div>
          
          
        
         
        
      );
    };

  }

export default EducationPannel;