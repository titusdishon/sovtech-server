import graphql from "graphql-tag";

export const typeDefs = graphql`
  type Person {
    name: String!
    height: String
    mass: String
    gender: String!
    homeworld: String!
  }
  type PeopleResponse {
    count: Int!
    next: String!
    previous: String!
    results: [Person]!
  }
  #queries objects
  type Query {
    getPersons(page: Int!): PeopleResponse
    getPerson(searchKey: String!): Person!
  }
`;
