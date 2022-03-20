import React from "react";
import './Calculator.css';
import Title from "../Title/Title";
import Screen from "../Screen/Screen";
import KeyBoard from "../KeyBoard/KeyBoard";

class Calculator extends React.Component {
    render() {
        return(
            <div className="calculator-main-container">
                <Title />
                <Screen />
                <KeyBoard />
            </div>
        );
    }
}

export default Calculator
