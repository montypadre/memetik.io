import React from 'react';
import WaterWave from 'react-water-wave';
import logo from './logo-nobackground-alt.png';
import './App.css';


function App(props) {
  const subject = props.subject;

  return (
    <div className="App">
      <header className="App-header">
      <WaterWave 
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${logo})`,
          backgroundPosition: "center center",
          backgroundSize: "100% 150%"
        }}
        dropRadius={200}
        perturbance={0.1}
        interactive={true}
      >
      </WaterWave>
      </header>
      <p className="App-hello">
          Hello, {subject}!
        </p>
    </div>
  );
}

export default App;
