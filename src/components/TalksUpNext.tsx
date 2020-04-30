import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  InteractionManager,
  ViewStyle,
  StyleProp,
} from 'react-native';

import {Colors, FontSizes} from '../constants';
import {findNextTalksAfterDate} from '../data';
import {Event, Schedule} from '../typings/data';
import {
  convertUtcDateToEventTimezoneDaytime,
  conferenceHasEnded,
} from '../utils';
import {RegularText, SemiBoldText} from './StyledText';
import TalkCard from './TalkCard';

type Props = {
  event: Event;
  style?: StyleProp<ViewStyle>;
};

function TalksUpNext(props: Props) {
  const [dateTime, setDateTime] = useState<string | null>(null);
  const [nextTalks, setNextTalks] = useState<Schedule[]>([]);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      _fetchTalks();
    });
  }, []);

  function _fetchTalks(): void {
    const nextTalksData = findNextTalksAfterDate(props.event);
    if (nextTalksData) {
      setNextTalks(nextTalksData.slice(0, 3));
      setDateTime(nextTalksData.length ? nextTalksData[0].startDate : '');
    }
  }

  function _renderDateTime() {
    if (conferenceHasEnded()) {
      return null;
    }
    if (dateTime) {
      return (
        <RegularText style={styles.time}>
          {convertUtcDateToEventTimezoneDaytime(dateTime)}
        </RegularText>
      );
    } else {
      // handle after conf thing
    }
  }

  return (
    <View style={[{marginHorizontal: 10}, props.style]}>
      <View style={{flexDirection: 'row'}}>
        <SemiBoldText style={{fontSize: FontSizes.title}}>
          {conferenceHasEnded() ? 'A great talk from 2019' : 'Coming up next'}
        </SemiBoldText>
      </View>
      {_renderDateTime()}
      {nextTalks.map((talk, index) => (
        <TalkCard
          key={index}
          talk={talk}
          style={{marginTop: 10, marginBottom: 10}}
        />
      ))}
    </View>
  );
}

export default TalksUpNext;

const styles = StyleSheet.create({
  time: {
    color: Colors.faint,
    fontSize: FontSizes.subtitle,
  },
});
