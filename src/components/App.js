import React from 'react';
import Inputs from './Inputs';
import Frame from './Frame';

class App extends React.Component {
    state = {
        name: 'Бумеранг не запущен'
    };

    updateData = (value) => {
        this.setState({name: value})
    }

    render(){
        return(
            <div>
                <h1>Task Manager</h1>
                <p>State: {this.state.name}</p>
                <hr></hr>
                <Inputs updateData={this.updateData}/>
                <Frame/>
            </div>
        )
    }
}

export default App