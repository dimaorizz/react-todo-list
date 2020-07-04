import React from 'react';
import InputTask from './InputTask';

class App extends React.Component {
    state = {
        tasks: []
    }

    onSubmit = (task) => {
        this.setState({ taskInput: this.state.tasks.push(task) });
    }

    render() {
        return (
            <InputTask onSubmit={this.onSubmit} />
        )
    }
}

export default App;