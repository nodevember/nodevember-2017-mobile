import gql from 'graphql-tag';

const QR_QUERY = gql`
  query events($slug: String!, $uuid: String!) {
    events(slug: $slug) {
      me(uuid: $uuid) {
        mobileMessage
        answers {
          id
          value
          question {
            id
            title
          }
        }
        firstName
        lastName
        email
        ref
        shareInfo
        uuid
        id
        type
        canCheckin
        staffCheckinLists {
          id
          name
          mainEvent
        }
        checkinLists {
          id
          name
          mainEvent
        }
      }
    }
  }
`;

export default QR_QUERY;
