import React from 'react';
import Inputs from './Inputs';
import Frame from './Frame';

class App extends React.Component {

    render(){
        return(
            <div>
                <h1>Task Manager</h1>
                <hr></hr>
                <Inputs/>
                <Frame/>
            </div>
        )
    }
}

export default App