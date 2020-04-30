import * as WebBrowser from 'expo-web-browser';
import _ from 'lodash';
import moment from 'moment-timezone';
import React from 'react';
import {Platform, Linking, AsyncStorage} from 'react-native';

import {
  Speaker,
  Talk,
  Event as EventType,
  User,
  Attendee,
} from '../typings/data';

export function getSpeakerTalk(speaker: Speaker): Talk | null {
  const talk = _.find(speaker.talks, function (talk) {
    if (talk) {
      return talk.type === 0;
    }
    return false;
  });
  if (!talk) {
    if (speaker.talks && speaker.talks[0]) {
      return speaker.talks[0];
    }
    return null;
  }
  return talk;
}

let Event: EventType;

export function setEvent(event: EventType): void {
  Event = event;
}

export function convertUtcDateToEventTimezone(
  date: string
): moment.Moment | null {
  const d = new Date(date);
  if (Event.timezoneId) {
    return moment.tz(d, Event.timezoneId);
  }
  return null;
}

export function convertUtcDateToEventTimezoneHour(date: string): string | null {
  const d = new Date(date);
  if (Event.timezoneId) {
    return moment.tz(d, Event.timezoneId).format('hh:mma');
  }
  return null;
}

export function convertUtcDateToEventTimezoneDaytime(
  date: string
): string | null {
  const d = new Date(date);
  if (Event.timezoneId) {
    return moment.tz(d, Event.timezoneId).format('dddd DD MMM, h:mma');
  }
  return null;
}

export function conferenceHasStarted(): boolean | null {
  if (Event.status?.hasStarted) {
    return Event.status.hasStarted;
  }
  return null;
}

export function conferenceHasEnded(): boolean | null {
  if (Event.status?.hasEnded) {
    return Event.status.hasEnded;
  }
  return null;
}

type Props = {
  children: React.ReactNode;
};

export function HideWhenConferenceHasStarted(props: Props) {
  if (conferenceHasStarted()) {
    return <></>;
  } else {
    return <>{props.children}</>;
  }
}

export function HideWhenConferenceHasEnded(props: Props) {
  if (conferenceHasEnded()) {
    return <></>;
  } else {
    return <>{props.children}</>;
  }
}

export function ShowWhenConferenceHasEnded(props: Props) {
  if (conferenceHasEnded()) {
    return <>{props.children}</>;
  } else {
    return <></>;
  }
}

export const sendEmail = (
  emailTo: string,
  fromName = {firstName: '', lastName: ''}
): void => {
  const emailurl =
    'mailto:' +
    emailTo +
    "?subject=hey it's" +
    ' ' +
    fromName.firstName +
    ' ' +
    fromName.lastName +
    ' ' +
    'from ReactEurope&body=ping';
  try {
    if (Platform.OS === 'android') {
      WebBrowser.openBrowserAsync(emailurl);
    } else {
      Linking.openURL(emailurl);
    }
  } catch (e) {
    WebBrowser.openBrowserAsync('mailto:' + emailTo);
  }
};

export const openTwitter = async (twitter: string): Promise<any> => {
  try {
    await Linking.openURL(`twitter://user?screen_name=` + twitter);
  } catch (e) {
    WebBrowser.openBrowserAsync('https://twitter.com/' + twitter);
  }
};

export const addContact = async (contact: Attendee): Promise<void> => {
  const storedContacts = await AsyncStorage.getItem(
    '@MySuperStore2019:contacts'
  );

  let contacts: Attendee[] = [];
  const newContacts: Attendee[] = [];
  let found = false;
  if (storedContacts === null && contact && contact.firstName) {
    contacts = [contact];
  } else {
    const existingContacts = JSON.parse(storedContacts ? storedContacts : '[]');
    // console.log('how many existing contacts', existingContacts.length);
    existingContacts.map((existingContact: Attendee) => {
      // console.log('existing contact', existingContact);
      if (
        existingContact &&
        existingContact.id &&
        contact &&
        contact.id &&
        existingContact.id === contact.id
      ) {
        found = true;
        newContacts.push(contact);
      } else if (existingContact && existingContact.id) {
        newContacts.push(existingContact);
      }
    });
    if (!found && contact && contact.id) {
      newContacts.push(contact);
    }
    contacts = newContacts;
  }
  const stringifiedContacts = JSON.stringify(contacts);
  return AsyncStorage.setItem(
    '@MySuperStore2019:contacts',
    stringifiedContacts
  );
};

export const saveSchedule = async (schedule: EventType): Promise<void> => {
  return AsyncStorage.setItem(
    '@MySuperStore2019:schedule',
    JSON.stringify(schedule)
  );
};

export const getContactTwitter = (contact: User | Attendee): string => {
  let twitter = '';
  if (contact?.answers) {
    contact.answers.map((answer) => {
      if (
        answer?.question?.title &&
        answer.question.title === 'Twitter' &&
        answer.value
      ) {
        twitter = answer.value;
      }
    });
  }
  return twitter
    .replace('@', '')
    .replace('https://twitter.com/', '')
    .replace('twitter.com/', '');
};
