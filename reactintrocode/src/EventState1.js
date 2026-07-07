import React from 'react';
import ReactDOM from 'react-dom/client';
class Counter extends React.Component {
      render() {
        var textStyle = {
          fontSize: 72,
          fontFamily: "sans-serif",
          color: "#333",
          fontWeight: "bold"
        };
    
        return (
          <div style={textStyle}>
            {this.props.display}
          </div>
        );
      }
    }
    
    class CounterParent extends React.Component {
      constructor(props) {
        super(props);
    
        this.state = {
          count: 0
        };
      }
    
      render() {
        var backgroundStyle = {
          padding: 50,
          backgroundColor: "#FFC53A",
          width: 250,
          height: 100,
          borderRadius: 10,
          textAlign: "center"
        };
        var buttonStyle = {
          fontSize: "1em",
          width: 30,
          height: 30,
          fontFamily: "sans-serif",
          color: "#333",
          fontWeight: "bold",
          lineHeight: "3px"
        };
    
        return (
          <div style={backgroundStyle}>
            <Counter display={this.state.count} />
            <button style={buttonStyle}>+</button>
          </div>
        );
      }
    }

    export default CounterParent;