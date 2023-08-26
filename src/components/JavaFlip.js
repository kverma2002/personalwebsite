import '../css/SCFlip.css';
import java from '../img/java.png';

function JavaFlip() {

 
 

        return (
          <div class="card">
            <div class="content">
              <div class="container">
                <img src={java}></img>
              </div>
              <div class="back">
              <h3 style={{color: "#0087ca", fontSize: 14}}>Java</h3>
              <hr></hr>
                <p style={{fontSize: 16}}>
                    First langauge I picked up in my coding class in High School. 
                    I have most use it for <span style={{color: "#0087ca"}}>back end development.</span> I would call my self <span style={{color: "#0087ca"}}>intermediate.</span>
                </p>
              </div>
            </div>
          </div>
        );
  
}

export default JavaFlip;