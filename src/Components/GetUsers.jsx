import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const GetUsers = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data?.getAllUsers);
    }
  }, [data]);


  return <div>{users.map((user, i) => <h2 key={i}>{user.firstName}</h2>)}</div>;
};

export default GetUsers;
