import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import FadeIn from 'react-native-fade-in-image';
import {RectButton} from 'react-native-gesture-handler';

import {Colors, FontSizes} from '../constants';
import {Schedule} from '../typings/data';
import {PrimaryTabNavigationProp} from '../typings/navigation';
import {conferenceHasEnded} from '../utils';
import CachedImage from './CachedImage';
import {BoldText, RegularText, SemiBoldText} from './StyledText';

type Props = {
  talk: Schedule;
  style?: StyleProp<ViewStyle>;
};

function TalkCard(props: Props) {
  const navigation = useNavigation<PrimaryTabNavigationProp<'Home'>>();
  const speakers = props.talk.speakers;

  const _handlePress = () => {
    navigation.navigate('Details', {scheduleSlot: props.talk});
  };

  const _renderPlaceholderForNextYear = () => {
    return (
      <View style={[styles.button, props.style]}>
        <RegularText style={styles.nextYear}>See you in 2019!</RegularText>
      </View>
    );
  };

  if (conferenceHasEnded() && (!speakers || speakers.length === 0)) {
    return _renderPlaceholderForNextYear();
  }

  return (
    <RectButton
      onPress={_handlePress}
      style={[styles.button, props.style]}
      activeOpacity={0.05}>
      {speakers &&
        speakers.map((speaker) => {
          if (!speaker) {
            return;
          }
          return (
            <View style={styles.headerRow} key={speaker.id as number}>
              {speaker.avatarUrl && (
                <View style={styles.headerRowAvatarContainer}>
                  <FadeIn>
                    <CachedImage
                      source={{uri: speaker.avatarUrl}}
                      style={{width: 40, height: 40, borderRadius: 20}}
                    />
                  </FadeIn>
                </View>
              )}
              <View style={styles.headerRowInfoContainer}>
                <BoldText style={styles.speakerName} numberOfLines={1}>
                  {speaker.name}
                </BoldText>
                {speaker.twitter ? (
                  <SemiBoldText
                    style={styles.organizationName}
                    numberOfLines={1}>
                    @{speaker.twitter}
                  </SemiBoldText>
                ) : null}
              </View>
            </View>
          );
        })}
      <View style={styles.talkInfoRow}>
        {/* <RegularText style={styles.talkTitle}>  // TODO (Handle save talk)
          <SaveIconWhenSaved talk={props.talk} />
          {props.talk.title}
        </RegularText> */}
        {conferenceHasEnded() || !props.talk.room ? null : (
          <RegularText style={styles.talkLocation}>
            {props.talk.room}
          </RegularText>
        )}
      </View>
    </RectButton>
  );
}

export default TalkCard;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
  },
  headerRowAvatarContainer: {
    paddingRight: 10,
  },
  headerRowInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  speakerName: {
    fontSize: FontSizes.bodyTitle,
  },
  organizationName: {
    color: Colors.faint,
    fontSize: FontSizes.bodyLarge,
  },
  talkInfoRow: {
    paddingTop: 10,
  },
  talkTitle: {
    fontSize: FontSizes.bodyLarge,
  },
  talkLocation: {
    fontSize: FontSizes.bodyLarge,
    color: Colors.faint,
    marginTop: 10,
  },
  nextYear: {
    textAlign: 'center',
    fontSize: FontSizes.title,
    marginVertical: 10,
  },
  button: {
    padding: 15,
    ...Platform.select({
      ios: {
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {width: 2, height: 2},
      },
      android: {
        backgroundColor: '#fff',
        elevation: 2,
      },
    }),
  },
});
