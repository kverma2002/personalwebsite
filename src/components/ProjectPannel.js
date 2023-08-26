import React from "react";
import '../css/ProjectPannel.css';
import DHEFlip from "./DHEFlip";
import MarketFlip from "./Market";
import SpotFlip from "./SpotFlip";
import PortfolioFlip from "./Portfolioflip";

class ProjectPannel extends React.Component {

    render() {
      return (
    <div className='info-projects'>
        <div className="outline-projects">
          <div className="para-projects">
            Throughout learning how to code in High School and College, these are some of the personal 
            projects I have worked on to enhance the skills they have taught me.
          </div> 
                <div class="row1-projects">
                    <div class="item">
                      <DHEFlip />
                    </div>
                    <div class="item">
                      <MarketFlip />
                    </div>
                    <div class="item">
                      <SpotFlip/>
                    </div>
                    <div class="item">
                      <PortfolioFlip/>
                    </div>
                </div>
              </div>
        
        </div>
          
          
        
         
        
      );
    };

  }

export default ProjectPannel;