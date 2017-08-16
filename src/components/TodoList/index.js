import React, { Component } from 'react';
import './styles.css';

export default class TodoList extends Component {
  handlerEnter = (e) => {
    const {addTask} = this.props;
    if (e.keyCode === 13) {
      addTask(e.target.value);
      e.target.value = '';
    }
  }
  handlerChange = (item) => {
    console.log('====================================');
    console.log(item);
    console.log('====================================');
    const {toggleCheck}  = this.props;
    toggleCheck(item)
  }
  render() {
    const { tasks } = this.props
    return (
      <div className='todo' >
        <h2>A Todo List</h2> 
        <input className='todo--input' onKeyDown={this.handlerEnter} />
        <ul>
          {
            tasks.map((item, index) => (<TaskItem key={item.name} handlerChange={this.handlerChange} item={item} />))
          }
        </ul>
      </div>
    )
  }
}

class TaskItem extends Component {
  handlerChange = () => {
    const {handlerChange} = this.props;
    const { item } = this.props;
    handlerChange(item);
  }
  render() {
    const { item } = this.props;
    return (
      <li className='todo-item'>
        <input type='checkbox' onChange={this.handlerChange}  checked={!item.active} />
        <span className={!item.active && 'del'}>{item.name}</span>
      </li>
    )
  }
}