import React, { Component } from 'react';
import '../styles/profile.css';
import Avatar from "./avatar";
import Description from "./description";

class Profile extends Component {
    render() {
        return <div className="profile">
            <Avatar/>
            <Description/>
        </div>;
    }
}

export default Profile;
