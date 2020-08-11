import React, {Component} from 'react';
import '../styles/content.css';
import About from "./about";
import Education from "./education";

class Content extends Component {
    render() {
        return <div className="content">
            <About></About>
            <Education></Education>
        </div>
    }
}

export default Content;
