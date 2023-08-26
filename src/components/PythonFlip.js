import '../css/SCFlip.css';
import python from '../img/pythLogo.png';

function PythonFlip() {

 
  

        return (
          <div class="card">
            <div class="content">
              <div class="container">
                <img src={python}></img>
              </div>
              <div class="back">
              <h3 style={{color: "#0087ca", fontSize: 14}}>Python</h3>
              <hr></hr>
                <p style={{fontSize: 16}}>
                  My langauge of choice for <span style={{color: "#0087ca"}}>software development</span>, <span style={{color: "#0087ca"}}>automation </span>
                  and used in my <span style={{color: "#0087ca"}}>ML/AI</span> classes. Ive been using it for 2 years and I'd call myslef <span style={{color: "#0087ca"}}>intermediate</span>
                </p>
              </div>
            </div>
          </div>
        );
  
}

export default PythonFlip;