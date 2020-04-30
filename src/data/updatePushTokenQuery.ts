import gql from 'graphql-tag';

const UPDATE_PUSH_TOKEN_QUERY = gql`
  mutation updateAttendee($uuid: String!, $expoPushToken: String!) {
    updateAttendee(uuid: $uuid, expoPushToken: $expoPushToken) {
      firstName
      lastName
      id
      email
      canCheckin
    }
  }
`;

export default UPDATE_PUSH_TOKEN_QUERY;
