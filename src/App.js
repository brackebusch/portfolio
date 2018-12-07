import React, { Component } from 'react';
import Header from './header'
import Divider from './divider'
import Intro from './intro'
import Skills from './skills';
import WorkExperience from './WorkExperience'
import Footer from './footer'
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <Skills />
        <Divider direction='up' color1='#ecf0f1' color2='white'/>
        <WorkExperience />
        <Footer />
      </div>
    );
  }
}

export default App;
