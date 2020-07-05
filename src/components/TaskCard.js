import React from 'react';

const TaskCard = (props) => {
    return (
        <div className='taskCard'>
            {props.task}
        </div>
    )
};

export default TaskCard;