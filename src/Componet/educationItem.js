import React, {Component} from 'react';
import '../styles/educationItem.css';
import Year from "./year";
import Information from "./information";


class EducationItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="educationItem">
            <Year year={this.props.information.year}/>
            <Information brief={this.props.information.brief} detail={this.props.information.detail}/>
        </div>
    }
}

export default EducationItem;
