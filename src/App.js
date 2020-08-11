import React, { Component } from 'react';
import './App.scss';
import Profile from "./Componet/profile";
import Avatar from "./Componet/avatar";

class App extends Component {
  render() {
    return <main className="app">
      <Profile/>
    </main>;
  }
}

export default App;
