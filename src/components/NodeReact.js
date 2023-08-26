import '../css/SCFlip.css';
import nr from '../img/masterpiece.png';

function NRFlip() {

 
 

        return (
          <div class="card">
            <div class="content">
              <div class="container">
                <img src={nr}></img>
              </div>
              <div class="back">
              <h3 style={{color: "#0087ca", fontSize: 14}}>Nodejs / React</h3>
              <hr></hr>
                <p style={{fontSize: 16}}>
                 I have mostly used Nodejs for <span style={{color: "#0087ca"}}>quick server scripts</span> using <span style={{color: "#0087ca"}}>express</span> and React for <span style={{color: "#0087ca"}}>front end interfaces.</span> I am still a <span style={{color: "#0087ca"}}>beginner</span> at both languages but they will be my <span style={{color: "#0087ca"}}>main focus</span> for my next few projects
                </p>
              
              </div>
            </div>
          </div>
        );
  
}

export default NRFlip;