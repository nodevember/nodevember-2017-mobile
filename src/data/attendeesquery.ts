import gql from 'graphql-tag';

const GET_ATTENDEES = gql`
  query events($slug: String!, $uuid: String!, $q: String!) {
    events(slug: $slug) {
      attendees(q: $q, uuid: $uuid) {
        id
        lastName
        email
        firstName
        answers {
          id
          value
          question {
            id
            title
          }
        }
      }
    }
  }
`;

export default GET_ATTENDEES;
