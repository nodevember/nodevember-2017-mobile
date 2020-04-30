import gql from 'graphql-tag';

const QR_CHECKIN_QUERY = gql`
  mutation createCheckin($uuid: String!, $checkinListId: Int!, $ref: String!) {
    createCheckin(uuid: $uuid, checkinListId: $checkinListId, ref: $ref) {
      firstName
      lastName
      id
      type
      ref
      ticket {
        id
        name
      }
      email
      checkinMessage
      checkins {
        checkinListId
        createdAt
        id
      }
    }
  }
`;

export default QR_CHECKIN_QUERY;
