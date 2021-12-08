import React from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css';

class App extends React.Component {
  state = {
    tasks: []
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)
    this.setState({
      tasks
    })

    // let tasks = [...this.state.tasks]
    // tasks = tasks.filter(task => task.id !== id)
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  render() {
    return (
      <div>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
