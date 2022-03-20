import React from "react";
import './ResetEqual.css';

class ResetEqual extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button className={this.props.styleClass}>{this.props.value}</button>
        );
    }
}


export default ResetEqual;
