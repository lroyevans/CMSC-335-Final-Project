import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    
  }  

  getData(){
    fetch('http://localhost:3001/dealership/')
    .then(res => res.json())
    .then(data=>{console.log(data)})
  ;
  }

  render(){
  return (
    <div className="App">
      <button onClick={()=>this.getData()}>Press me to get!</button>
  
    </div>
  );
  }
}

export default App;

