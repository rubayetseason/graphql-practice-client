import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USERS } from "../GraphQL/Mutations";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USERS);

  const addUsers = () => {
    createUser({
      variables: {
        firstName,
        lastName,
        email,
        password,
      },
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit" onClick={addUsers}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
