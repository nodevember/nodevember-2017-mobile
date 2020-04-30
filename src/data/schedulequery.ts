import gql from 'graphql-tag';

const GET_SCHEDULE = gql`
  query events($slug: String!) {
    events(slug: $slug) {
      id
      description
      websiteUrl
      name
      venueName
      venueCountry
      venueCity
      cocUrl
      twitterHandle
      offset
      startDate
      endDate
      timezoneId
      slug
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
      collaborators {
        id
        firstName
        lastName
        twitter
        github
        url
        role
        avatarUrl
      }
      speakers {
        id
        name
        twitter
        github
        avatarUrl
        bio
        talks {
          id
          title
          type
          description
          length
          startDate
        }
      }
      groupedSchedule {
        title
        date
        slots {
          id
          title
          likes
          description
          length
          startDate
          youtubeUrl
          youtubeId
          tags
          type
          room
          talk
          keynote
          speakers {
            id
            name
            twitter
            github
            avatarUrl
            bio
          }
        }
      }
      sponsors {
        diamond {
          id
          name
          description
          url
          logoUrl
          jobUrl
        }
        platinum {
          id
          name
          description
          url
          logoUrl
          jobUrl
        }
        gold {
          id
          name
          description
          url
          logoUrl
          jobUrl
        }
        partner {
          id
          name
          description
          url
          logoUrl
          jobUrl
        }
      }
    }
  }
`;

export default GET_SCHEDULE;
