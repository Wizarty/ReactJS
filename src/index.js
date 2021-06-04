// import React from 'react';
// import ReactDOM from 'react-dom';

// class EmployeeComponent extends React.Component {
// constructor(props) {
    // super(props);
    // this.state = {
      // employees: []
    // };
  // }
// componentDidMount() {
	// fetch("https://localhost:44382/Employee/ListGet").then(res => res.json())
      // .then(
        // (result) => {
          // this.setState({
            // employees: result
          // });
        // }
      // );
// }

  
// render() {
    // return (
      // <div>
        // <h2>Employees Data...</h2>
        // <table>
          // <thead>
            // <tr>
              // <th>Id</th>
              // <th>Name</th>
              // <th>Location</th>
              // <th>Salary</th>
            // </tr>
          // </thead>
          // <tbody> 
			// {this.state.employees.map(emp => (
            // <tr key={emp.Id}>
              
			  // <td>{emp.ID}</td>
              // <td>{emp.EmployeeName}</td>
              // <td>{emp.EmployeeBirthDate}</td>
			  // <td>{emp.GenderID}</td>
              // <td>{emp.PrivateNo}</td>
			  // <td>{emp.Phone}</td
              // <td>{emp.Address}</td>
              // <td>{emp.DepartmentID}</td>
			  // <td>{emp.IsDelete}</td>
              // </tr>
			// ))}		  
          // </tbody>
        // </table>
      // </div>
      // );
    // }

// }

// const element=<EmployeeComponent></EmployeeComponent>

// ReactDOM.render(element,document.getElementById("root"));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['ApiKey'] = '067069b8-553c-46a0-b51c-500f0852de66';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);