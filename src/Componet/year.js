import React, {Component} from 'react';
import '../styles/year.css';

class Year extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h4 className="year">{this.props.year}</h4>
    }
}

export default Year;
