import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import _ from 'lodash';
import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ScrollView, RectButton} from 'react-native-gesture-handler';

import {Colors} from '../constants';
import {Attendee, Event} from '../typings/data';
import {getContactTwitter} from '../utils';
import GravatarImage from './GravatarImage';
import HighlightableText from './HighlightableText';
import {BoldText, SemiBoldText, RegularText} from './StyledText';

type AttendeesSearchResultRowProps = {
  event?: Event;
  attendee: Attendee;
  searchQuery: string;
  onPress: (attendee: Attendee) => void;
};

type AttendeesSearchResultsProps = {
  attendees: Attendee[];
  isLoading: boolean;
  onPress: (attendee: Attendee) => void;
  searchQuery: string;
};

function AttendeesSearchResultRow(props: AttendeesSearchResultRowProps) {
  const event = props.event;
  const SpeakersAndTalks = event && event.speakers ? event.speakers : [];
  const SpeakersData = [{data: SpeakersAndTalks, title: 'Speakers'}];
  const {attendee, searchQuery} = props;

  const [isSpeaker, setIsSpeaker] = useState<boolean>(false);

  if (SpeakersData && SpeakersData.length > 0) {
    const speaker = SpeakersData[0].data.filter((speaker) => {
      if (speaker?.twitter) {
        return getContactTwitter(attendee) === speaker.twitter;
      }
      return false;
    });
    if (speaker[0] && !isSpeaker) {
      setIsSpeaker(true);
    }
  }

  return (
    <RectButton
      onPress={() => props.onPress(attendee)}
      activeOpacity={0.05}
      style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={[styles.row, {borderLeftWidth: isSpeaker ? 5 : 0}]}>
        {isSpeaker && (
          <View style={styles.micIcon}>
            <MaterialCommunityIcons
              name="presentation"
              size={32}
              color="#aab8c2"
            />
          </View>
        )}
        {attendee.email && (
          <View
            style={[
              styles.rowAvatarContainer,
              {paddingLeft: isSpeaker ? 0 : 5},
            ]}>
            <GravatarImage style={styles.avatarImage} email={attendee.email} />
          </View>
        )}
        <View style={styles.rowData}>
          <HighlightableText
            TextComponent={BoldText}
            highlightStyle={{backgroundColor: '#e1e8ed'}}
            searchWords={[searchQuery]}
            textToHighlight={`${attendee.firstName} ${attendee.lastName}`}
          />
          {getContactTwitter(attendee) ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Entypo
                name="twitter"
                size={16}
                color="#1da1f2"
                style={{paddingRight: 3}}
              />
              <HighlightableText
                TextComponent={RegularText}
                highlightStyle={{backgroundColor: '#e1e8ed'}}
                searchWords={[searchQuery]}
                textToHighlight={`@${getContactTwitter(attendee)}`}
              />
            </View>
          ) : null}
        </View>
      </View>
    </RectButton>
  );
}

const AttendeesSearchResultPlaceholderRow = () => (
  <RectButton activeOpacity={0.05} style={{flex: 1, backgroundColor: '#fff'}}>
    <View style={styles.row}>
      <View style={styles.rowAvatarContainer}>
        <MaterialIcons
          name="account-circle"
          size={48}
          style={styles.placeholderAvatarImage}
        />
      </View>
      <View style={styles.rowData}>
        <BoldText
          style={{backgroundColor: '#efefef', height: 14, marginBottom: 8}}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </BoldText>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SemiBoldText style={{color: '#efefef', height: 14, marginRight: 8}}>
            •
          </SemiBoldText>
          <SemiBoldText style={{backgroundColor: '#efefef', height: 14}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </SemiBoldText>
        </View>
      </View>
    </View>
  </RectButton>
);

export default function AttendeesSearchResults(
  props: AttendeesSearchResultsProps
) {
  const {attendees, isLoading} = props;

  const _renderItem = ({item: attendee}: {item: Attendee}) => (
    <AttendeesSearchResultRow
      attendee={attendee}
      onPress={props.onPress}
      searchQuery={props.searchQuery}
    />
  );

  const _renderItemPlaceholder = () => <AttendeesSearchResultPlaceholderRow />;
  const maybeAttendees = isLoading
    ? _.times(10).map((id) => ({id}))
    : attendees;
  const itemRenderer = isLoading ? _renderItemPlaceholder : _renderItem;
  return (
    <FlatList
      renderScrollComponent={(props) => <ScrollView {...props} />}
      renderItem={itemRenderer}
      data={maybeAttendees}
      keyExtractor={(item) => `${item.id}`}
      initialNumToRender={10}
      keyboardDismissMode="on-drag"
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
    borderLeftColor: Colors.blue,
    flexDirection: 'row',
  },
  rowAvatarContainer: {
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 5,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  placeholderAvatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    color: '#efefef',
  },
  rowData: {
    flex: 1,
  },
  list: {
    paddingTop: 80,
  },
  micIcon: {
    position: 'absolute',
    right: 24,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    top: 10,
  },
});
