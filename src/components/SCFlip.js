import '../css/SCFlip.css';
import usc from '../img/usc4.png';

function SCFlip() {

 
 

        return (
          <div class="card">
            <div class="content">
              <div class="container">
                <img src={usc}></img>
              </div>
              <div class="back">
              <h3 style={{color: "#adff2f", fontSize: 14}}>South Fayette High School. Graduated 2021</h3>
              <hr></hr>
              <ul style={{fontSize: 16}}>
                <li>3.55 Major GPA</li>
              </ul>
              <h3 style={{fontSize: 14, color:"greenyellow"}}>Relevant Classes</h3>
              <hr></hr>
              <ul style={{fontSize: 16}}>
                <li>Software Engineering</li>
                <li>Data Structures / Object Orientated Design</li>
                <li>Machine Learning</li>
                <li>Computer Systems</li>
              </ul>
              

                
              
              </div>
            </div>
          </div>
        );
  
}

export default SCFlip;