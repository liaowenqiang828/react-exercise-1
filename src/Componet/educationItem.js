import React, {Component} from 'react';
import '../styles/educationItem.css';
import Year from "./year";
import Information from "./information";


class EducationItem extends Component {
    render() {
        return <div className="educationItem">
            <Year/>
            <Information/>
        </div>
    }
}

export default EducationItem;
