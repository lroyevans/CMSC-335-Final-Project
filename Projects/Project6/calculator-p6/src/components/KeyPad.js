"use strict"
import React, {Component} from 'react';



function KeyPadComponent(props) {
    const func = e => props.update(e);

    return (
        <div className="button">
            <button name="(" onClick={func}>(</button>
            <button name="CE" onClick={func}>CE</button>
            <button name=")" onClick={func}>)</button>
            <button name="C" onClick={func}>C</button><br/>
            <button name="1" onClick={func}>1</button>
            <button name="2" onClick={func}>2</button>
            <button name="3" onClick={func}>3</button>
            <button name="+" onClick={func}>+</button><br/>
            <button name="4" onClick={func}>4</button>
            <button name="5" onClick={func}>5</button>
            <button name="6" onClick={func}>6</button>
            <button name="-" onClick={func}>-</button><br/>
            <button name="7" onClick={func}>7</button>
            <button name="8" onClick={func}>8</button>
            <button name="9" onClick={func}>9</button>
            <button name="*" onClick={func}>*</button><br/>
            <button name="." onClick={func}>.</button>
            <button name="0" onClick={func}>0</button>
            <button name="=" onClick={func}>=</button>
            <button name="/" onClick={func}>/</button><br/>
        </div>
    );
}


export default KeyPadComponent;