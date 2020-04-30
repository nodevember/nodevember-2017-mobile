import gql from 'graphql-tag';

const QR_CONTACT_QUERY = gql`
  query events($slug: String!, $uuid: String!, $q: String!) {
    events(slug: $slug) {
      attendees(uuid: $uuid, q: $q) {
        lastName
        firstName
        id
        email
        answers {
          id
          question {
            id
            title
          }
          value
        }
      }
    }
  }
`;

export default QR_CONTACT_QUERY;
