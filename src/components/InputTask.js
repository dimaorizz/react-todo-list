import React from 'react';

class InputTask extends React.Component {
    state = {
        taskInput: ''
    }

    onTaskSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.taskInput)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onTaskSubmit}>
                    <input onChange={(e) => this.setState({ taskInput: e.target.value })} type='text' placeholder="Pet a dog" />
                </form>
            </div>
        )
    }
}

export default InputTask;