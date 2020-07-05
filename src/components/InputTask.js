import React from 'react';

class InputTask extends React.Component {
    state = {
        taskInput: ''
    }

    onTaskSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.taskInput)
        this.setState({ taskInput: '' })
    }

    render() {
        return(
            <div className='searchBar'>
                <form onSubmit={this.onTaskSubmit}>
                    <input className='taskInput' onChange={(e) => this.setState({ taskInput: e.target.value })} value={this.state.taskInput} type='text' placeholder="Pet a dog" />
                </form>
            </div>
        )
    }
}

export default InputTask;