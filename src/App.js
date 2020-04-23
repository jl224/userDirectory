import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {

  // show in a table the list of employees

  // handle a form to be able to filter


  // handle sort of a column


  // Setting this.state.friends to the friends json array
  state = {
    empTotal: employees,
    employees,
    search: "",
    order: true

  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log("onchange: ", name, value)
    // Updating the input's state
    let search = value
    this.setState({
      [name]: value,
      employees: this.state.empTotal.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()))
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let search = this.state.search
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.search}`)
    this.setState({
      search: "",
      employees: this.state.employees.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()))


    });
  };
  handleSort = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    console.log("name clicked")
    // Set this.state.friends equal to the new friends array
    //this.setState({ employees });
    console.log("order: ", this.state.order)
    let order = this.state.order
    let empSort = this.state.employees.sort(function (a, b) {
      if (order) {
        if (a.name < b.name) { return -1; }
        else { return 1 }
        //  if (a.name > b.name) { return 1; }
        //  return 0;
      }
      else {
        if (a.name < b.name) { return 1; }
        else { return -1 }
      }
    })
    this.setState({ employees: empSort, order: !this.state.order })
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employees List</Title>

        <form className="form">
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />

          <button onClick={this.handleFormSubmit}>Submit</button>


        </form>


        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th onClick={this.handleSort}>Name</th>
              <th>Title</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp => (
              <tr>
                <td><img src={emp.image} alt={emp.name}></img></td>
                <td>{emp.name}</td>
                <td>{emp.title}</td>
                <td>{emp.address}</td>
                <td>{emp.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Wrapper>
    );
  }
}

export default App;
