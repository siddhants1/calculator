import React, { Component } from "react";
import './NumKey.css';

class NumKey extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onClickHandler(this.props.value);
    }

    render() {
        return(
            <button className="num-key" onClick={this.handleClick}>{this.props.value}</button>
        );
    }
}

export default NumKey;
