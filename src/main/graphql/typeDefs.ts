import { gql } from 'apollo-server';

const base = gql`
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

const testTypeDefs = gql`
  extend type Query {
    helloWorld: Test!
  }

  type Test {
    id: Int!
    message: String!
  }
`;

export default [base, testTypeDefs];
