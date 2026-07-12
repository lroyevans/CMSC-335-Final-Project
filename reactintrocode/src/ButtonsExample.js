import React from 'react';


class Buttons extends React.Component {
    constructor(props){
        super(props);
    }
   
    render() {
        return (
            <div name="buttons">
                <button name="Toilet Paper" onClick = {()=> this.props.onClick("TP")}>Toilet Paper</button>
                <button name="Milk" onClick = {()=> this.props.onClick("Milk")}>Oat Milk</button>
                <button name="Eggs"onClick = {()=> this.props.onClick("Eggs")}>Eggs</button>
                <button name = "Reset" onClick = {()=> this.props.onClick("Reset")}>Reset</button>
            </div>
        );
    }

}

export default Buttons;