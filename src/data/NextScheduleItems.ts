import gql from 'graphql-tag';

const NEXT_SCHEDULE_ITEMS = gql`
  query nextScheduleItems($slug: String!) {
    events(slug: $slug) {
      id
      status {
        hasEnded
        hasStarted
        onGoing
        nextFiveScheduledItems {
          id
          title
          description
          startDate
          speakers {
            id
            name
            twitter
            avatarUrl
            bio
            talks {
              id
              description
              title
              startDate
            }
          }
        }
      }
    }
  }
`;

export default NEXT_SCHEDULE_ITEMS;
