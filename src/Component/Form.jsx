import React, { useState } from "react";

import { addUser } from "../reduxData/GlobalState";

import { useDispatch } from "react-redux";

export default function FormUser() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    phone: "",
    city: ""
  });

  const changeHandler = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const submitForm = (e) => {
    e.preventDefault();
    // console.log(state);
    dispatch(addUser(state));
    setState({
      name: "",
      phone: "",
      city: ""
    });
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={changeHandler}
        />
        <label htmlFor="name">Phone</label>
        <input
          type="text"
          name="phone"
          value={state.phone}
          onChange={changeHandler}
        />
        <label htmlFor="name">City</label>
        <input
          type="text"
          name="city"
          value={state.city}
          onChange={changeHandler}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
