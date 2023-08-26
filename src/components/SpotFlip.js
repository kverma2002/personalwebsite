import '../css/SCFlip.css';
import spotify from '../img/spot.png';

function SpotFlip() {

        return (
          <div class="card">
            <div class="content">
              <div class="container">
                <img src={spotify}></img>
              </div>
              <div class="back">
              <h3 style={{color: "#f18705", fontSize: 14}}>SpotifyMenu. Made in 2022</h3>
              <hr></hr>
                <p style={{fontSize: 16}}>
                <span style={{color: "#f18705"}}>Swift</span> app that allows the user to use a shortcut to pullup simplified spotify menu over their current screen. Use spotify api, handle and save user login and auth tokens,
                  and handle playback on local device. I plan to polish the app and publish it one day. 
                </p>
              </div>
            </div>
          </div>
        );
  
}

export default SpotFlip;