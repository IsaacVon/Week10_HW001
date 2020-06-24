import React from 'react';
import { Input } from 'reactstrap';

const Search = props => {
    return (
        <div className="input-group">
        <label>Enter Employee Name</label>
        <Input onChange={props.handleSearch} type="text" className="form-control" aria-describedby="button-addon2"></Input>
        </div>
    )
}

export default Search;