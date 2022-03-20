import React, { Component } from "react";
import './KeyBoard.css';
import NumKey from "../NumKey/NumKey";
import SpecialKey from '../SpecialKey/SpecialKey';
import ResetEqual from "../ResetEqual/ResetEqual";

class KeyBoard extends Component {

    constructor(props) {
        super(props);
        this.numKeyClickHandle = this.numKeyClickHandle.bind(this);
        this.resetResultProcess = this.resetResultProcess.bind(this);
        this.delClickHandler = this.delClickHandler.bind(this);
    }
    
    numKeyClickHandle(value) {
        this.props.onNumTrigger(value);
    }
    
    resetResultProcess(value) {
        this.props.onResetEqualTrigger(value);
    }

    delClickHandler() {
        this.props.onDelClick();
    }

    renderNumKey(i) {
        return <NumKey value={i} onClickHandler={this.numKeyClickHandle} />;
    }

    renderSpecialKey(i) {
        return <SpecialKey value={i} delHandler={this.delClickHandler} />;
    }

    renderResetResult(i, j) {
        return <ResetEqual styleClass={i} value={j} resetResultHandler={this.resetResultProcess} />
    }

    render() {
        return(
            <div className="keyboard-container">
                <div className="key-row">
                    {this.renderNumKey(7)}
                    {this.renderNumKey(8)}
                    {this.renderNumKey(9)}
                    {this.renderSpecialKey('DEL')}
                </div>
                <div className="key-row">
                    {this.renderNumKey(4)}
                    {this.renderNumKey(5)}
                    {this.renderNumKey(6)}
                    {this.renderNumKey('+')}
                </div>
                <div className="key-row">
                    {this.renderNumKey(1)}
                    {this.renderNumKey(2)}
                    {this.renderNumKey(3)}
                    {this.renderNumKey('-')}
                </div>
                <div className="key-row">
                    {this.renderNumKey('.')}
                    {this.renderNumKey(0)}
                    {this.renderNumKey('/')}
                    {this.renderNumKey('x')}
                </div>
                <div className="key-row">
                    {this.renderResetResult('reset-btn', 'RESET')}
                    {this.renderResetResult('result-btn', '=')}
                </div>
            </div>
        );
    }
}

export default KeyBoard;
