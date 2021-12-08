import React from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css';

class App extends React.Component {
  state = {
    tasks: [

      {
        id: 0,
        text: 'Test',
        date: '2022-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'cTest',
        date: '2022-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'sTest',
        date: '2022-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'aTest',
        date: '2022-02-16',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: 'eTest',
        date: '2022-02-17',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: 'deTest',
        date: '2022-02-17',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: 'erTest',
        date: '2022-02-17',
        important: true,
        active: true,
        finishDate: null
      },
    ]
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
        <h1>TODO APP</h1>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
