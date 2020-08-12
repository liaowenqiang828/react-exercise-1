import React, {Component} from 'react';
import '../styles/information.css';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <div className="information">
            <h4 className="h4_inline">{this.props.brief}</h4>
            <p>{this.props.detail}</p>
        </div>
    }
}

export default Information;
