import _ from 'lodash';
import React from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import {ScrollView, RectButton} from 'react-native-gesture-handler';

import LoadingPlaceholder from '../components/LoadingPlaceholder';
import {RegularText, SemiBoldText, BoldText} from '../components/StyledText';
import {withData} from '../context/DataContext';
import {Event, Schedule, ScheduleDay as ScheduleDayType} from '../typings/data';
import {
  ScheduleDayProps,
  ScheduleDayNavigationProp,
} from '../typings/navigation';
import {SectionHeaderProps} from '../typings/utils';
import {convertUtcDateToEventTimezoneHour} from '../utils';

type Props = {
  event: Event;
  navigation: ScheduleDayNavigationProp;
};

type ScheduleRowProps = {
  onPress: (item: Schedule) => void;
  item: Schedule;
};

function ScheduleRow(props: ScheduleRowProps) {
  const {item} = props;

  const _handlePress = () => {
    props.onPress && props.onPress(props.item);
  };

  const content = (
    <View style={[styles.row, item.talk && styles.rowStatic]}>
      <BoldText>
        {/* <SaveIconWhenSaved talk={item} />  TODO (Handle save talk )*/}
        {item.title}
      </BoldText>

      {item.speakers
        ? item.speakers.map((speaker, index) => (
            <SemiBoldText key={index}>
              {speaker?.name ? speaker.name : ''}
            </SemiBoldText>
          ))
        : null}
      <RegularText>{item.room}</RegularText>
    </View>
  );

  return (
    <RectButton
      activeOpacity={0.05}
      onPress={_handlePress}
      style={{flex: 1, backgroundColor: '#fff'}}>
      {content}
    </RectButton>
  );
}

function ScheduleDay(props: Props & ScheduleDayProps) {
  const schedule: ScheduleDayType | null | undefined = _.find(
    props.event.groupedSchedule,
    (schedule) => {
      if (schedule?.title) {
        return schedule.title === props.route.params.day;
      }
      return false;
    }
  );
  let slotsByTime: _.Dictionary<Schedule[]> | null = null;
  if (schedule?.slots) {
    slotsByTime = _.groupBy(schedule.slots, (slot) =>
      slot?.startDate ? slot.startDate : ''
    ) as _.Dictionary<Schedule[]>;
  }
  const slotsData = _.map(slotsByTime, (data, time) => {
    return {data, title: convertUtcDateToEventTimezoneHour(time)};
  });

  const _renderSectionHeader = ({section}: SectionHeaderProps<Schedule>) => {
    return (
      <View style={styles.sectionHeader}>
        <RegularText>{section.title}</RegularText>
      </View>
    );
  };

  const _renderItem = ({item}: {item: Schedule}) => {
    return <ScheduleRow item={item} onPress={_handlePressRow} />;
  };

  const _handlePressRow = (item: Schedule) => {
    props.navigation.navigate('Details', {
      scheduleSlot: item,
    });
  };

  return (
    <LoadingPlaceholder>
      <SectionList
        renderScrollComponent={(props) => <ScrollView {...props} />}
        stickySectionHeadersEnabled
        renderItem={_renderItem}
        renderSectionHeader={_renderSectionHeader}
        sections={slotsData}
        keyExtractor={(item) => _.snakeCase(item?.title ? item.title : '')}
        initialNumToRender={10}
      />
    </LoadingPlaceholder>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
  },
  rowStatic: {
    backgroundColor: '#f5f5f5',
    opacity: 0.5,
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingTop: 7,
    paddingBottom: 5,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#eee',
  },
});

export default withData(ScheduleDay);
