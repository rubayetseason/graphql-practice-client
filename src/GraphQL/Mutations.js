import { gql } from "@apollo/client";

export const CREATE_USERS = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;
