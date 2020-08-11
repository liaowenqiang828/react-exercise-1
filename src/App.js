import React, { Component } from 'react';
import './App.scss';
import Profile from "./Componet/profile";
import Content from "./Componet/content";

class App extends Component {
  render() {
    return <main className="app">
      <Profile/>
      <Content/>
    </main>;
  }
}

export default App;
