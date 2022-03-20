import React from "react";
import './Screen.css';

class Screen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="screen-div">
                <h2 className="screen-output">{this.props.output}</h2>
            </div>
        );
    }
}

export default Screen;
