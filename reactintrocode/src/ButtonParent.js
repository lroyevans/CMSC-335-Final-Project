import React from 'react';
import Buttons from "./ButtonsExample.js"

class ButtonParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCost: 0
    }
  }

  handler(key) {
    this.setState((prevState, props) => {
      if(key === "TP"){
        return { totalCost: prevState.totalCost + 7 }
      }else if(key === "Eggs"){
        return { totalCost: prevState.totalCost + 3 }
      }else if (key === "Milk"){
        return { totalCost: prevState.totalCost + 4}
      }else if (key === "Reset"){
        return {totalCost: 0}
      }

    })
  }


  render() {
    return (              //"TP"   this.handler("TP")
      <div>
        <Buttons onClick={(key) => { this.handler(key) }} />
        <h1>{this.state.totalCost}</h1>
      </div>
    );
  }
}

export default ButtonParent;