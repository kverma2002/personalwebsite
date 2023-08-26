import '../css/SCFlip.css';
import sfl from '../img/sfl.png';

function SFFlip() {

 
 

        return (
          <div class="card">
            <div class="content">
              <div class="container">
                <img src={sfl}></img>
              </div>
              <div class="back">
              <h3 style={{color: "#adff2f", fontSize: 14}}>South Fayette High School. Graduated 2021</h3>
              <hr></hr>
              <ul style={{fontSize: 16}}>
                <li>3.93 GPA</li>
                <li>Highest Honor Roll</li>
                <li>Speech and Debate Vice President</li>
                <li>5th place Nationals Graphic Design - FBLA</li>
              </ul>
              </div>
            </div>
          </div>
        );
  
}

export default SFFlip;