import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TableRow from "./components/empoloyee_card";
import Search from "./components/search";
import Title from "./components/title";
import employees from "./db/employees.json";


class App extends Component {
  state = {
    employees,
    searchResults: []
  };

  handleSearch = (event) => {
    const filteredEmployees = employees.filter(employees => {
      return employees.first_name.toLowerCase().match(event.target.value)
    })
    this.setState({
      searchResults: filteredEmployees
    })
  }

  render() {
    return (

      <>
      <Title>Employee List</Title>
      <Search
        handleSearch={this.handleSearch}/>
  
       <table className="table">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>

            {this.state.searchResults.map((employee) => (
              <TableRow
                removeEmployee={this.removeEmployee}
                id={employee.id}
                firstName={employee.first_name}
                lastName={employee.last_name}
                email={employee.email}
                role={employee.role}
              />
            ))}
          </tbody>
          </table>
    </>
    );
  }
}

export default App;
