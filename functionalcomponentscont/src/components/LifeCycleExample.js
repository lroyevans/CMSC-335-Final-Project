import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
      loading: true,
    };
    console.log('1. Constructor: Component is being initialized.');
  }

  componentDidMount() {
    console.log('3. componentDidMount: Component is now in the DOM.');
    
    this.fakeApiFetch = setTimeout(() => {
      this.setState({ data: 'Hello, World!', loading: false });
    }, 2000);

    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('4. shouldComponentUpdate: Deciding whether to re-render.');
    // Example: Only re-render if the count is an even number or if data changes
    if (nextState.count !== this.state.count) {
      return nextState.count % 2 === 0; 
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('5. getSnapshotBeforeUpdate: Capturing DOM state before change.');
    return 'Snapshot value from the past!'; // This value is passed to componentDidUpdate
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('6. componentDidUpdate: Component just updated.');
    console.log('Snapshot received:', snapshot);

    if (prevState.count !== this.state.count) {
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('7. componentWillUnmount: Cleaning up before component leaves.');
    clearTimeout(this.fakeApiFetch);
    clearInterval(this.timerInterval);
  }

  render() {
    console.log('2. Render: Outputting JSX.');
    const { count, data, loading } = this.state;

    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
        <h2>React Lifecycle Demo</h2>
        <p><strong>Props Title:</strong> {this.props.title}</p>
        <p><strong>Timer (Updates on even numbers):</strong> {count}</p>
        <p><strong>API Data:</strong> {loading ? 'Loading...' : data}</p>
        
        <button onClick={() => this.setState({ count: count + 1 })}>
          Manual Increment
        </button>
      </div>
    );
  }
}

export default Lifecycle;