import { render } from '@testing-library/react';
import React from 'react';


class Inputs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({value:event.target.value});
    }

    render(){
        return(
            <form className="form-inline" onSubmit={()=> {this.props.updateData(this.state.value)}}>
                <div className="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Task Name</label>
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Task name" value={this.state.value} onChange={this.handleChange}></input>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Status</option>
                        <option value="1">To Do</option>
                        <option value="2">Doing</option>
                        <option value="3">Done</option>
                        <option value="4">Questions</option>
                    </select>
                <div className="form-group mx-sm-3 mb">
                    <input type="date" className="form-control" placeholder="Date"></input>
                </div>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    {/* <label for="exampleFormControlFile1">Example file input</label> */}
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add new task</button>
            </form>
        )
    }
}

export default Inputs