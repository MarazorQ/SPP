import { render } from '@testing-library/react';
import React from 'react';

function Inputs(){
    return(
        <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">Task Name</label>
                <input type="text" className="form-control" id="inputPassword2" placeholder="task name"></input>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">status</label>
                <input type="text" className="form-control" id="inputPassword2" placeholder="status" readonly></input>
            </div>
            <div className="form-group mx-sm-3 mb-2">
            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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

export default Inputs