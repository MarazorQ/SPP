import { render } from '@testing-library/react';
import React from 'react';


class Inputs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            status: '',
            date: ''

        };
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeValue(event){
        this.setState({value:event.target.value});
    }
    handleChangeStatus(event){
        this.setState({status:event.target.value});
    }
    handleChangeDate(event){
        this.setState({date:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();

        this.props.updateData({
            value: this.state.value, 
            status: this.state.status,
            date: this.state.date
        });
    }

    render(){
        return(
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Task Name</label>
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Task name" value={this.state.value} onChange={this.handleChangeValue}/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" value={this.state.status} onChange={this.handleChangeStatus}>
                        <option selected>Status</option>
                        <option value="1">To Do</option>
                        <option value="2">Doing</option>
                        <option value="3">Done</option>
                        <option value="4">Questions</option>
                    </select>
                <div className="form-group mx-sm-3 mb">
                    <input type="date" className="form-control" placeholder="Date" value={this.state.date} onChange={this.handleChangeDate} />
                </div>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    {/* <label for="exampleFormControlFile1">Example file input</label> */}
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add new task</button>
            </form>
        )
    }
}

export default Inputs