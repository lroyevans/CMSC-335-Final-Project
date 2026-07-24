import React, { Component, useState, createContext } from 'react';
import './App.css';
import Result from './components/Result';
import KeyPad from "./components/KeyPad";



function validateEquation(equation){
    while(equation.includes(".")){
            let i = equation.indexOf(".");
            if(!Number(equation[i+1]) && equation[i + 1] != "0"){
                return false;
            }
            equation = equation.slice(i + 1);
    }
    return true;
}

let evaled = false;

function App(){

    const [res, setRes] = useState("");

    const evaluateInput = equaiton => {
        evaled = true;
        let ret;
        try {
          ret = eval(equaiton);   
        } catch (error) {
            ret = undefined;
        }
        if(ret === undefined || !validateEquation(equaiton)){
            return "ERROR";
        }
        return ret;
    }

    const updateRes = event => {
        let char = event.target.name;
        event.preventDefault();

        if(char === "C"){
            setRes("");
            evaled = false;
        } else if (char === "CE"){
            if(evaled){
                setRes("");
                evaled = false;
            } else{
                setRes(res.slice(0, -1));
            }
        } else if (char === "="){
            if(!evaled){
                setRes(evaluateInput(res));
            }
        } 
        else{
            if(evaled){
                setRes(char);
                evaled = false;
            } else{
                setRes(res + char);
            }
        }
    }

    return (
        <div>
            <div className="calculator-body">
                <h1>Basic Calculator</h1>
                <Result display={res}/>
                <KeyPad update={updateRes}/>
            </div>
        </div>
    );
}

export default App;