import React, { Component } from "react";
import './SpecialKey.css';

class SpecialKey extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button className="special-key">{this.props.value}</button>
        );
    }
}

export default SpecialKey;
