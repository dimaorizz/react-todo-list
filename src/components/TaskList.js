import React from 'react';
import TaskCard from './TaskCard'

const TaskList = (props) => {
    const tasks = props.tasks.map((task, index) => <TaskCard key={index} task={task}/>);

    return(
        <div className='taskList'>
            {tasks}
        </div>
    )
}

export default TaskList;