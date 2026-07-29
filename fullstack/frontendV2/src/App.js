
import React,{useEffect, useState} from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dealer: [],
      tempBrand: "",
      tempModel: "",
      tempYear: 0,
      delBrand: "",
      delModel: "",
      delYear: 0,
      updateBrand: "",
      updateModel: "",
      updateYear: 0,
      updateID: 0
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/dealership/')
      .then(res => res.json())
      .then(data => { 
        this.setState(
          (prevState) => { return { dealer: data.info } }
        )
      });
  }
  postData(event){
    event.preventDefault();
    let data =  {brand: this.state.tempBrand, model: this.state.tempModel, year: this.state.tempYear};
    let options ={
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:3001/dealership/', options).then();
  }
  delData(){
    let data =  {brand: this.state.delBrand, model: this.state.delModel, year: this.state.delYear};
    let options ={
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:3001/dealership/', options);
    
  }
  updateData(){
    let data =  {brand: this.state.updateBrand, model: this.state.updateModel, year: this.state.updateYear, id: this.state.updateID};
    let options ={
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:3001/dealership/', options);
    
  }
  getData() {
    fetch('http://localhost:3001/dealership/')
      .then(res => res.json())
      .then(data => {
        this.setState(
          (prevState) => { return { dealer: data.info } }
        )
      });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        
        <h1>Post a Record</h1>
        <form onSubmit={(e)=>{this.postData(e)}}>

          Enter Brand:
          <input type="text" name="tempBrand" value={this.state.tempBrand} onChange={(e)=>{this.handleChange(e)}}></input>
          Enter Model:
          <input type="text" name="tempModel" value={this.state.tempModel} onChange={(e)=>{this.handleChange(e)}}></input>
          Enter Year:
          <input type="text" name="tempYear" value={this.state.tempYear} onChange={(e)=>{this.handleChange(e)}}></input>
          <input type="submit" value="Submit"></input>

        </form>
        
        
        <h1>Delete a Record</h1>
        <form onSubmit={()=>{this.delData()}}>
          
          Enter Brand:
          <input type="text" name="delBrand" value={this.state.delBrand} onChange={(e)=>{this.handleChange(e)}}></input>
          Enter Model:
          <input type="text" name="delModel" value={this.state.delModel} onChange={(e)=>{this.handleChange(e)}}></input>
          Enter Year:
          <input type="text" name="delYear" value={this.state.delYear} onChange={(e)=>{this.handleChange(e)}}></input>
          <input type="submit" value="Submit"></input>

        </form> 
        <h1>Update a Record</h1>
        <form onSubmit={()=>{this.updateData()}}>
          Enter ID:
          <input type="text" name="updateID" value={this.state.updateID} onChange={(e)=>{this.handleChange(e)}}></input>
          Enter Brand:
          <input type="text" name="updateBrand" value={this.state.updateBrand} onChange={(e)=>{this.handleChange(e)}}></input>
          Enter Model:
          <input type="text" name="updateModel" value={this.state.updateModel} onChange={(e)=>{this.handleChange(e)}}></input>
          Enter Year:
          <input type="text" name="updateYear" value={this.state.updateYear} onChange={(e)=>{this.handleChange(e)}}></input>
          <input type="submit" value="Submit"></input>

        </form> 
        <button onClick={() => this.getData()}>Press me to update!</button>
        <ol>
          {this.state.dealer.map((car) =>
            <li key = {car.id}>{car.year}, {car.brand} {car.model}</li>)}
        </ol>
      </div>
    );
  }
}


// function App(){
//   let[dealer,setDealer] = useState([]);

//   useEffect(()=>{
//     fetch('http://localhost:3001/dealership/')
//       .then(res => res.json())
//       .then(data => {
//           setDealer(data)
//       });
//   });

//   return (
//   <div className="App">
//     <button onClick={() => this.getData()}>Press me to get!</button>
//     <ol>
//       {this.state.dealer.map((car) =>
//         <li key = {car.id}>{car.year}, {car.brand} {car.model}</li>)}
//     </ol>
//      
//   </div>
// );
// }
export default App;
