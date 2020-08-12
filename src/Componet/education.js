import React, {Component} from 'react';
import '../styles/education.css';
import EducationItem from "./educationItem";

class Education extends Component {
    constructor() {
        super();
        this.state = {
            education: [{
                year: 1990,
                brief: "I was born in Katowice",
                detail: "React (also known as React.js or ReactJS) is an open-source JavaScript library"
            },
                {
                    year: 2005,
                    brief: "Secondary school specializing in artistic",
                    detail: "React (also known as React.js or ReactJS) is an open-source JavaScript library"
                },
                {
                    year: 2009,
                    brief: "First level graduation in Graphic Design",
                    detail: "React (also known as React.js or ReactJS) is an open-source JavaScript library"
                },
                {
                    year: 2012,
                    brief: "Second level graduation in Graphic Design",
                    detail: "React (also known as React.js or ReactJS) is an open-source JavaScript library"
                }
            ]
        }
    }
    render() {
        return <div className="education">
            <h3>EDUCATION</h3>
            {this.state.education.map((education, index) => {
                return<EducationItem key={index} information={education}/>
            })}
        </div>
    }
}

export default Education;
