import React from 'react';
import InputTask from './InputTask';
import TaskList from './TaskList';

class App extends React.Component {
    state = {
        tasks: []
    }

    onSubmit = (task) => {
        this.setState({ taskInput: this.state.tasks.push(task) });
    }

    render() {
        return (
            <div>
                <InputTask onSubmit={this.onSubmit} />
                <TaskList tasks={this.state.tasks} />
            </div>
        )
    }
}

export default App;