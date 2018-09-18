import React, { Component } from 'react';
import './App.css';
import AddProject from './components/AddProject.js';
import Project from './components/Project.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {projects: [
      {
        title: 'Foogle',
        category : 'Front-End'
      },
      {
        title: 'Merkuri',
        category: 'Full Stack'
      },
      {
        title: 'Project Management',
        category: 'React'
      }
    ]}
  }
  render() {
    return (
      <div className="App">
        <Project projects={this.state.projects}/>
        <AddProject />
      </div>
    );
  }
}

export default App;
