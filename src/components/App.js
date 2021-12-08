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
    ]
  }

  deleteTask = (id) => {
    console.log(id)
  }
  changeTaskStatus = (id) => {
    console.log(id)
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
