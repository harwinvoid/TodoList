import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          name: '测试1',
          active: false,
        },
        {
          name: '测试2',
          active: false,
        }
      ],
    }
  }
  addTask = (value) => {
    const tasks = [...this.state.tasks];
    tasks.push({
      name: value,
      active: true,
    })
    this.setState({
      tasks,
    })
  }
  toggleCheck = (item) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(i=> i.name === item.name);
    tasks[index].active = !tasks[index].active;
    this.setState({
      tasks,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList 
          tasks={this.state.tasks} 
          addTask={this.addTask}
          toggleCheck={this.toggleCheck}></TodoList>
      </div>
    );
  }
}

export default App;
