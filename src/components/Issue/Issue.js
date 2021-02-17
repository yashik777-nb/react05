import React from "react";

export default function Issue(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.issueDescription}</td>
      <td>{props.severity}</td>
      <td>{props.status}</td>
    </tr>
  );
}
