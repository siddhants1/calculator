import React, { Component } from "react";
import './NumKey.css';

class NumKey extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button className="num-key">{this.props.value}</button>
        );
    }
}

export default NumKey;
