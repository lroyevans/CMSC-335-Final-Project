import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from "./components/KeyPad";

class App extends Component {

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Basic Calculator</h1>
                    <Result />
                    <KeyPad />
                </div>
            </div>
        );
    }
}

export default App;