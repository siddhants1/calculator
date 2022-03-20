import React from "react";
import './ResetEqual.css';

class ResetEqual extends React.Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        this.props.resetResultHandler(this.props.value);
    }

    render() {
        return(
            <button className={this.props.styleClass} onClick={this.clickHandler} >{this.props.value}</button>
        );
    }
}


export default ResetEqual;
