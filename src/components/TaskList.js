import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <div className="active">
                <h1>Zadania do zrobienia</h1>
                {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
            </div>
            <hr />
            <div className="done">
                <h3>Zadania zrobione <em>({done.length})</em></h3>
                {done.length > 5 && <span style={{ fontSize: 10 }}>Wyświetlone jest tylko pięć elementów</span>}
                {doneTasks.slice(0, 5)}
            </div>
        </>
    );
}

export default TaskList;