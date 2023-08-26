import React from "react";
import GlobeComponent from "./Globe";
import '../css/MainPannel.css';
import linked from '../img/linked.png';
import git from '../img/github.png';


class MainPannel extends React.Component {

    render() {
      return (
        <div className="pannelOther">
          <div className="globe">
              <GlobeComponent/>
              <div className="hello" style={{color: "white"}}>
                Hello from Pittsburgh or Los Angeles
              </div>
            

          </div>
          
        </div>

    
        
         
        
      
      );
    };

  }

export default MainPannel;