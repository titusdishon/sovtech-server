import axios from "axios";
export const peopleResolver = {
  Query: {
    async getPersons(_: any, { page }: any) {
      try {
        const res = await axios.get(
          `https://swapi.dev/api/people/?page=${page || 1}`
        );
        const people = await res.data;
        if (!people.previous) {
          people.previous = "";
        }
        if (!people.next) {
          people.next = "";
        }
        return people;
      } catch (err) {
        throw new Error();
      }
    },
  },
};
export const personResolver = {
  Query: {
    async getPerson(_: any, { searchKey }: any) {
      try {
        const res = await axios.get(
          `https://swapi.dev/api/people/?search=${searchKey}`
        );
        const person = await res.data;
        return person.results[0];
      } catch (err) {
        throw new Error();
      }
    },
  },
};
