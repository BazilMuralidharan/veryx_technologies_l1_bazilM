import React from "react";

export default function Card({ name, phone, city }) {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Phone: {phone}</div>
      <div>City: {city}</div>
    </div>
  );
}
