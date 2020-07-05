import React from 'react';

const TaskCard = (props) => {
    return (
        <div className='taskCard'>
            <div className='taskContent'>
                {props.task}
            </div>
        </div>
    )
};

export default TaskCard;