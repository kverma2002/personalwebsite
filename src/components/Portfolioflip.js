import '../css/SCFlip.css';
import portfolio from '../img/Portfolio.png';

function PortfolioFlip() {

        return (
          <div class="card">
            <div class="content">
              <div class="container">
                <img src={portfolio}></img>
              </div>
              <div class="back">
              <h3 style={{color: "#f18705", fontSize: 14}}>Portfolio. Made in 2023</h3>
              <hr></hr>
                <p style={{fontSize: 16}}>
                  You are looking at it! One of my first react apps and Im pretty proud of 
                  the animations and overall asthetic of the website. Made with React
                </p>
              </div>
            </div>
          </div>
        );
  
}

export default PortfolioFlip;