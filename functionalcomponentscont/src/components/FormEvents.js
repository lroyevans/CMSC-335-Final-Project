import React, {useState} from 'react';
import ReactDOM from 'react-dom';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ""
    }
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (<div>
      <form onSubmit={(e)=>{this.handleSubmit(e)}}>
        
          Enter Something:
        <input type="text" value={this.state.value} onChange={(e)=>{this.handleChange(e)}}></input>
        <input type="submit" value="Submit"></input>

      </form>
      <h1>{this.state.value}</h1>
    </div>

    );
  }


}

class Count extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        counter:0
      }
    }

    updateCounter(){
      this.setState((prevState, props)=>{
        return {counter: prevState.counter+4}
      })
    }

  render(){
    return(<div>
      <h1>{this.state.counter}</h1>
      <button onClick={()=>{this.updateCounter()}}>Click to add 4!</button>
    </div>
      
    ) 
  }

}


function CountFunc (props){
  const [counter, setCounter] = useState(0);
  const [cost, setCost] = useState(5);
  //counter
  //setCounter


  return(<div>
    <h1>{counter}</h1>
    <h1>Cost: {cost}</h1>
    <button onClick={()=>{setCounter(counter+4); setCost(cost+5)}}>Click to add 4!</button>
  </div>);
}

export default CountFunc;