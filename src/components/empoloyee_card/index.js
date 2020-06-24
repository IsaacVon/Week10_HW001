import React from "react";
import "./style.css";

function TableRow(props) {
    return (
      <tr>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.role}</td>
      </tr>
    );
  }
  
  export default TableRow;
  