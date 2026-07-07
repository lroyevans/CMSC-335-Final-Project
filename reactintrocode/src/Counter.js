 import React from 'react'
 
 class Counter extends React.Component {
      constructor(props) {
        console.log("inside counter constructor");
        super(props);
 
        this.state = {
          strikes: 0
        };

        console.log(this);
        this.timerTick = this.timerTick.bind(this);
      }

      timerTick() {
        console.log("inside timerTick");
        console.log(this);
        this.setState({
          strikes: this.state.strikes + 100
        });
      }
 
      componentDidMount() {
        console.log("inside didMount");
        console.log(this);
        setTimeout(this.timerTick, 2000);
      }

      render() {
        return (
          <h1>{this.state.strikes}</h1>
        );
      }
    }
 
    class CounterDisplay extends React.Component {
      render() {
        var divStyle = {
          width: 250,
          textAlign: "center",
          backgroundColor: "black",
          padding: 40,
          fontFamily: "sans-serif",
          color: "#999",
          borderRadius: 10
        };
        console.log("returning from Counter Display");
        return (
          <div style={divStyle}>
            <Counter/>
          </div>
        );
      }
    }

export default CounterDisplay;