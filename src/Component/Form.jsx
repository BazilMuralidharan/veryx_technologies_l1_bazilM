import React, { useState } from "react";
import styled from "styled-components";

import { addUser } from "../reduxData/GlobalState";

import { useDispatch } from "react-redux";

const FormContainer = styled.div`
  display: grid;
  gap: 5px;
  width: 420px;
  margin: 0 auto;
`;

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
    <form onSubmit={submitForm}>
      <h3>dev: BAZIL MURALIDHARAN</h3>
      <FormContainer>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={changeHandler}
        />
        <label htmlFor="name">Phone</label>
        <input
          type="tel"
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
      </FormContainer>
    </form>
  );
}
