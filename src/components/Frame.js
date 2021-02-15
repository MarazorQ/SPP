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
        </table>
    )
}

export default Frame