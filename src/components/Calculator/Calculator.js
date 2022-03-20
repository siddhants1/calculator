import React, { Component } from "react";
import './Calculator.css';
import Title from "../Title/Title";
import Screen from "../Screen/Screen";
import KeyBoard from "../KeyBoard/KeyBoard";

class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            output: '',
            operand1: '',
            operand2: '',
            operation: '',
            opCodeEncountered: false,
        };
        this.numTriggerHandler = this.numTriggerHandler.bind(this);
        this.resetResultHandler = this.resetResultHandler.bind(this);
        this.calculationLogic = this.calculationLogic.bind(this);
        this.delClickProcess = this.delClickProcess.bind(this);
        this.op1 = '';
        this.op2 = '';
    }

    numTriggerHandler(value) {
        if(typeof value === 'number' || value === '.') {
            if(this.state.opCodeEncountered === false) {
                this.op1 = this.op1 + String(value);
                this.setState({
                    output: this.op1,
                    operand1: this.op1,
                });
            }
            if((this.state.opCodeEncountered === true)) {
                this.op2 = this.op2 + String(value);
                this.setState({
                    output: this.op2,
                    operand2: this.op2,
                });
            }      
        } 
        else if((value === '+') || (value === 'x') || (value === '-') || (value === '/')) {
            this.setState({
                output: value,
                operation: value,
                opCodeEncountered: true,
            });
        }
    }

    calculationLogic() {
        let number1 = Number(this.state.operand1);
        let number2 = Number(this.state.operand2);
        if(this.state.operation === '+') {
            this.setState({
                output: String(number1 + number2),
            });
        }
        if(this.state.operation === '-') {
            this.setState({
                output: String(number1 - number2),
            });
        }
        if(this.state.operation === 'x') {
            this.setState({
                output: String(number1 * number2),
            });
        }
        if(this.state.operation === '/') {
            this.setState({
                output: String(number1 / number2),
            });
        }
    }

    resetResultHandler(value) {
        if(value === '=') {
            if(this.state.operand1 !== '' && this.state.opCodeEncountered !== false && this.state.operand2 !== '') {
                return this.calculationLogic();
            }
        }
        else if(value === 'RESET') {
            this.setState({
                output: '',
                operand1: '',
                operand2: '',
                operation: '',
                opCodeEncountered: false,
            });
            this.op1 = '';
            this.op2 = '';
        } 
    }

    delClickProcess() {
        this.setState({
            output: '',
            operand1: '',
            operand2: '',
            operation: '',
            opCodeEncountered: false,
        });
        this.op1 = '';
        this.op2 = '';
    }

    render() {
        return(
            <div className="calculator-main-container">
                <Title />
                <Screen output={this.state.output} />
                <KeyBoard 
                    onNumTrigger={this.numTriggerHandler} 
                    onResetEqualTrigger={this.resetResultHandler}
                    onDelClick={this.delClickProcess} 
                />
            </div>
        );
    }
}

export default Calculator;
