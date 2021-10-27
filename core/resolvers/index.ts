import { peopleResolver, personResolver } from "./people";
const resolvers = {
  Query: {
    ...peopleResolver.Query,
    ...personResolver.Query,
  },
};

export default resolvers;
