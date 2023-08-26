import React from "react";
import '../css/PannelOther.css';
import linked from '../img/linked.png';
import git from '../img/github.png';
import chess from '../img/chess.png';
import Countdown from "react-countdown";

class OtherPannel extends React.Component {

    render() {
        const date = new Date("2024-03-17");
      return (
    <div className='info-other'>
        <div className="outline-other">
          <div className="para-other">
             Check out my Github, LinkedIn or see if I have run my first marathon yet
          </div> 
                <div class="row1-projects">
                    <div class="item">
                        <a href="https://www.linkedin.com/in/krit-verma-2a39b1256/"><img src={linked} style={{height: 250, width: 250}}></img></a>
                    </div>
                    <div class="item">
                        <a href="https://github.com/kverma2002"><img src={git} style={{height: 250, width: 250}}></img></a>
                    </div>
                    <div className="itempog" >
                        Days till 1st Marathon! &nbsp;
                        <Countdown date={date} />
                    </div>
                </div>
              </div>
        
        </div>
          
          
        
         
        
      );
    };

  }

export default OtherPannel;