import React, {Component} from 'react';
import '../styles/education.css';
import EducationItem from "./educationItem";

class Education extends Component {
    render() {
        return <div className="education">
            <h3>EDUCATION</h3>
            <EducationItem>1</EducationItem>
            <EducationItem>2</EducationItem>
            <EducationItem>3</EducationItem>
            <EducationItem>4</EducationItem>
            </div>
    }
}

export default Education;
