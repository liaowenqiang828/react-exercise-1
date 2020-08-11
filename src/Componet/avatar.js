import React, {Component} from 'react';
import '../styles/avatar.css';
import avatar from '../assets/avatar.jpg';

class Avatar extends Component {
    render() {
        return <img src={avatar} className="avatar_class"/>
    }
}

export default Avatar;
