import '../css/SCFlip.css';
import market from '../img/uscMarket.png';

function MarketFlip() {

        return (
          <div class="card">
            <div class="content">
              <div class="container">
                <img src={market}></img>
              </div>
              <div class="back">
              <h3 style={{color: "#f18705", fontSize: 14}}>USC MarketPlace. Made in 2022</h3>
              <hr></hr>
                <p style={{fontSize: 16}}>
                   The first <span style={{color: "#f18705"}}>full stack website</span> I worked on. I was in charge of the backend which utilized 
                   <span style={{color: "#f18705"}}>springboot.</span> Exposed me to working with databases like <span style={{color: "#f18705"}}>firebase</span>, 
                   log in authentication, and relational mapping for databases.
                </p>
              </div>
            </div>
          </div>
        );
  
}

export default MarketFlip;