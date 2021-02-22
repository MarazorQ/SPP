import React from 'react';
import Inputs from './Inputs';
import Frame from './Frame';

class App extends React.Component {
    state = {
        data: {
            value: '',
            status: '',
            date: ''
        },
        dataArr: []
    };

    updateData = (dataToUpdate) => {
        console.log(3234234234, dataToUpdate);
        this.setState({data: dataToUpdate})
        this.setState({dataArr: [...this.state.dataArr, dataToUpdate]})
    }

    render(){
        console.log('000000000', this.state.dataArr)
        return(
            <div>
                <h1>Task Manager</h1>
                <p>State: {this.state.name}</p>
                <hr></hr>
                <Inputs updateData={this.updateData}/>
                <Frame dataArr={this.state.dataArr} data={this.state.data}/>
            </div>
        )
    }
}

export default App