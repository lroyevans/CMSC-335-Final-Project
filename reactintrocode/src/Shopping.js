import React from 'react'
class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "Toilet Paper",
      price1: 3.99,
      name2: "Milk",
      price2: 2.99,
      name3: "Cookies",
      price3: 4.99,
      total: 0
    }
  }

  updateCost(itemName, e) {
    e.preventDefault();
    this.setState((prevState, props) => {
      return { total: prevState.total + prevState[itemName] }
    })
  }


  render() {
    return (
    <div className="container">
      <h1>Hello</h1>
      <div className="row">
        <h1 className="col">{this.state.name1}</h1>
        <button className="col" onClick={(e) => { this.updateCost("price1", e) }} >Add To Cart!</button>
      </div>
      <div className="row">
      <h1 className="col">{this.state.name2}</h1>
      <button className="col" onClick={(e) => { this.updateCost("price2", e) }}>Add To Cart!</button>

      </div>
      <div className ="row">
      <h1 className="col">{this.state.name3}</h1>
      <button className="col" onClick={(e) => { this.updateCost("price3", e) }}>Add To Cart!</button>
      </div>
       
      <h1>Total: {this.state.total.toFixed(2)}</h1>
    </div>
    )
  }


}

export default Shopping;