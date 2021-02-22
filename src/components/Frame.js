import React from 'react';

class Frame extends React.Component{
    render(){
        if (!this.props.data.value || !this.props.data.status || !this.props.data.date){
            return (
                <div>No data to show</div>
            )
        }
        console.log("PROPS + ARR", this.props.dataArr);

        return(
            <table className="table table-striped">
                <thead>
                    <th>Task</th>
                    <th className="filter-clm">Status</th>
                    <th>Date of Completion</th>
                    <th>File</th>
                </thead>
                <tbody>
                    {this.props.dataArr.map((i, index) => {
                        return (
                            <tr key={`${index}-${i.value}--${i.date}`}>
                        <th scope="row">1</th>
                        <td>{i.value}</td>
                        <td>{i.status}</td>
                        <td>{i.date}</td>
                        <td><button className="btn btn-primary">Download</button></td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default Frame