import React, { useReducer } from "react";
import { useState } from "react";

const ShortForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(data);
  };
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return state + 1;
    } else if (action.type === "decrement") {
      return state - 1;
    }
  }; // in this reducer function first paramater will get the initial state value, action defined the type of modification and its value such as increament or decreament is the type of action.

  const [state, dispatch] = useReducer(reducer, initialState); // here reduce is a modifier function which will manage the state modification, state is an array, dispatch is a function.

  return (
    <div className="h-screen w-screen flex justify-center items-center space-y-6">
      <form className="space-y-6 shadow-md p-10" onSubmit={submit}>
        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col max-w-xs">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="name"
            id="name"
            onBlur={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="px-4 py-3 bg-indigo-500 text-white rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShortForm;
