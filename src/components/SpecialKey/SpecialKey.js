import React, { Component } from "react";
import './SpecialKey.css';

class SpecialKey extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        this.props.delHandler();
    }

    render() {
        return(
            <button className="special-key" onClick={this.clickHandler}>{this.props.value}</button>
        );
    }
}

export default SpecialKey;
