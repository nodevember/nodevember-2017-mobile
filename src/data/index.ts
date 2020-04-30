import _ from 'lodash';
import moment from 'moment-timezone';

import {Event, Schedule} from '../typings/data';
import {convertUtcDateToEventTimezone} from '../utils';

export function findNextTalksAfterDate(event: Event) {
  let flattenedTalks: Schedule[] = [];
  if (event.groupedSchedule) {
    flattenedTalks = event.groupedSchedule.reduce(
      (result: Schedule[], group) => {
        if (group?.slots) {
          result = [...result, ...(group.slots as Schedule[])];
        }
        return result;
      },
      []
    );
  }

  if (!event.timezoneId) {
    return null;
  }
  const currentTime = moment.tz(event.timezoneId);
  // You can test going into the future with:
  // let currentTime = moment.tz(event.timezoneId).add(4, 'days');

  const talks = _.filter(flattenedTalks, (talk) => {
    const talkType = talk.type === 0 || talk.type === 1 || talk.type === 8;
    const startDate = convertUtcDateToEventTimezone(talk.startDate);
    if (talkType && startDate) {
      return currentTime.isBefore(startDate);
    }
    return false;
  });
  return talks.slice(0, 3);
}

/* export function findRandomTalk() {
  const talks = _.filter(Talks, (talk) => talk.type === 0);
  return [_.sample(talks)];
}

export function findTalkData(speakerName) {
  return _.find(Talks, (talk) => talk.speaker === speakerName);
} */
