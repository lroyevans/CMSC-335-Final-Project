import React, { useState } from 'react';

function Counter({ display }) {
  const textStyle = {
    fontSize: 72,
    fontFamily: "sans-serif",
    color: "#333",
    fontWeight: "bold"
  };

  return (
    <div style={textStyle}>
      {display}
    </div>
  );
}

function CounterParent() {
  // Initialize state
  const [count, setCount] = useState(0);

  const increase = (e) => {
    if (e.shiftKey) {
      setCount(prevCount => prevCount + 10);
    } else {
      setCount(prevCount => prevCount + 1);
    }
  };

  const decrease = (e) => {
    if (e.shiftKey) {
      setCount(prevCount => prevCount - 10);
    } else {
      setCount(prevCount => prevCount - 1);
    }
  };

  const backgroundStyle = {
    padding: 50,
    backgroundColor: "#FFC53A",
    width: 250,
    height: 100,
    borderRadius: 10,
    textAlign: "center"
  };

  const buttonStyle = {
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
      <Counter display={count} />
      <button onClick={increase} style={buttonStyle}>+</button>
      <button onClick={decrease} style={buttonStyle}>-</button>
    </div>
  );
}

export default CounterParent;