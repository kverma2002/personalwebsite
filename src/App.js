import './App.css';
import TimeComponent from './components/TimeComp'
import Information from './components/whoUses';

function App() {
  return (
    
    <body> 
      <div class="box">
        <div class="row header">
          <h1 id="name" className="top">
            <p>
              Krit Verma 
              <TimeComponent />
            </p>
          </h1>
        </div>
        <div className='row cont'>
          <Information />
        </div>
        <div className='row footer'>
          Thank You for Visiting. Inquiry? <a href = "mailto: kritverma2002@gmail.com" style={{color: "white"}}>Email Me</a>
        </div>

        </div>
      
       
    </body>
    

   
    
   
  );
}

export default App;
