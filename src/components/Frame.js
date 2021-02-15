import React from 'react';

function Frame(){
    return(
        <table className="table table-striped">
            <thead>
                <th>Task</th>
                <th class="filter-clm">Status</th>
                <th>Date of Completion</th>
                <th>File</th>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><button class="btn btn-primary">Download</button></td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><button class="btn btn-primary">Download</button></td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><button class="btn btn-primary">Download</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Frame