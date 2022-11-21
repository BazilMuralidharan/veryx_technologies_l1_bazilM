import React from "react";
import styled from "styled-components";

const CardHolder = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default function Card({ name, phone, city }) {
  return (
    <CardHolder>
      <table>
        <tr>
          <th>NAME</th>
          <td> {name}</td>
        </tr>
        <tr>
          <th>PHONE</th>
          <td> {phone}</td>
        </tr>
        <tr>
          <th>CITY</th>
          <td> {city}</td>
        </tr>
      </table>
    </CardHolder>
  );
}
