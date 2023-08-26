import '../css/SCFlip.css';
import dhe from '../img/dhe.png';

function DHEFlip() {

        return (
          <div class="card">
            <div class="content">
              <div class="container">
                <img src={dhe}></img>
              </div>
              <div class="back">
              <h3 style={{color: "#f18705", fontSize: 14}}>Delhi Handicraft Exporters Product Showcase. Made in 2023</h3>
              <hr></hr>
                <p style={{fontSize: 16}}>
                  Private App made in <span style={{color: "#f18705"}}>python</span> for my cousins company DHE. Allows them to upload, edit and delete products. 
                  Stores data in <span style={{color: "#f18705"}}>google cloud sql.</span> Search functionality to pull up simmilar products to show buyers. 
                </p>
              </div>
            </div>
          </div>
        );
  
}

export default DHEFlip;