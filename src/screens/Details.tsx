import Constants from 'expo-constants';
import * as Haptic from 'expo-haptics';
import * as WebBrowser from 'expo-web-browser';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';
import FadeIn from 'react-native-fade-in-image';
import Markdown from 'react-native-markdown-renderer';
import WebView from 'react-native-webview';

import AnimatedScrollView from '../components/AnimatedScrollView';
import CachedImage from '../components/CachedImage';
import CloseButton from '../components/CloseButton';
import NavigationBar from '../components/NavigationBar';
import SaveButton from '../components/SaveButton';
import {RegularText, BoldText, SemiBoldText} from '../components/StyledText';
import {Colors, FontSizes, Layout} from '../constants';
import {Talk, Speaker, Schedule} from '../typings/data';
import {AppProps} from '../typings/navigation';
import {getSpeakerTalk, convertUtcDateToEventTimezoneHour} from '../utils';
import withHeaderHeight from '../utils/withHeaderHeight';

type Props = {
  headerHeight: number;
};

function SavedButtonNavigationItem(props: {talk: Talk}) {
  return (
    <View
      style={{
        // gross dumb things
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        marginTop: Layout.notchHeight > 0 ? -5 : 0,
      }}>
      <SaveButton talk={props.talk} />
    </View>
  );
}

function Details(props: Props & AppProps<'Details'>) {
  const [scrollY] = useState(new Animated.Value(0));
  let _listener: string | null = null;

  useEffect(() => {
    if (Platform.OS === 'ios') {
      _listener = scrollY.addListener(({value}) => {
        if (value < -150) {
          Haptic.impact(Haptic.ImpactFeedbackStyle.Medium);
          props.navigation.goBack();
          if (_listener) {
            scrollY.removeListener(_listener);
            _listener = null;
          }
        }
      });
    }
    return function unmount() {
      if (_listener) {
        scrollY.removeListener(_listener);
        _listener = null;
      }
    };
  }, []);

  /* const _renderTruncatedFooter = handlePress => {
    return (
      <TouchableOpacity
        hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}
        onPress={handlePress}>
        <SemiBoldText style={{color: Colors.blue, marginTop: 5}}>
          Read more
        </SemiBoldText>
      </TouchableOpacity>
    );
  };

  const _renderRevealedFooter = handlePress => {
    return (
      <TouchableOpacity
        hitSlop={{top: 15, left: 15, right: 15, bottom: 15}}
        onPress={handlePress}>
        <SemiBoldText style={{color: Colors.blue, marginTop: 5}}>
          Show less
        </SemiBoldText>
      </TouchableOpacity>
    );
  }; */

  const _handlePressSpeaker = (speaker: Speaker) => {
    props.navigation.navigate('Details', {speaker});
  };

  const _handlePressSpeakerTwitter = async (twitter: string) => {
    try {
      await Linking.openURL(`twitter://user?screen_name=` + twitter);
    } catch (e) {
      WebBrowser.openBrowserAsync('https://twitter.com/' + twitter);
    }
  };

  const params = props.route.params || {};
  let speaker: Speaker | null = null;
  let speakers: Speaker[] = [];
  let talk: Schedule | Talk | null = null;
  let videoURL: string | null = null;
  let room: string | null = null;
  const talkScreen = params.scheduleSlot || params.talk;
  if (talkScreen) {
    if (params.scheduleSlot) {
      talk = params.scheduleSlot;
      if (talk.speakers && talk.speakers.length > 0) {
        speakers = talk.speakers as Speaker[];
      }
      if (talk.youtubeId && talk.youtubeId !== '') {
        videoURL = talk.youtubeId;
      }
      if (talk.room) {
        room = talk.room;
      }
    } else if (params.talk) {
      talk = params.talk;
    }
  } else if (params.speaker) {
    speaker = params.speaker;
    if (speaker.talks && speaker.talks.length > 0) {
      talk = getSpeakerTalk(speaker);
    }
  }

  const scale = scrollY.interpolate({
    inputRange: [-300, 0, 1],
    outputRange: [2, 1, 1],
    extrapolate: 'clamp',
  });
  const translateX = 0;
  const translateY = scrollY.interpolate({
    inputRange: [-300, 0, 1],
    outputRange: [-50, 1, 1],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 30, 200],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff', overflow: 'hidden'}}>
      {Platform.OS === 'ios' ? (
        <Animated.View
          style={{
            position: 'absolute',
            top: -350,
            left: 0,
            right: 0,
            height: 400,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [1, 0, 0],
                }),
              },
            ],
            backgroundColor: Colors.blue,
          }}
        />
      ) : null}
      <AnimatedScrollView
        style={{flex: 1, backgroundColor: 'transparent'}}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {useNativeDriver: true}
        )}>
        <View style={styles.headerContainer}>
          <Animated.View
            style={{
              transform: [{scale}, {translateX}, {translateY}],
            }}>
            <FadeIn placeholderStyle={{backgroundColor: 'transparent'}}>
              {talkScreen ? (
                <View style={styles.headerRowSpeaker}>
                  {speakers
                    ? speakers.map((speaker, index) => (
                        <View key={index} style={styles.headerColumnSpeaker}>
                          {speaker.avatarUrl && (
                            <TouchableOpacity
                              onPress={() => _handlePressSpeaker(speaker)}>
                              <CachedImage
                                source={{uri: speaker.avatarUrl}}
                                style={styles.avatarMultiple}
                              />
                            </TouchableOpacity>
                          )}
                          {speaker.name?.split(' ').map((name, index) => (
                            <View key={index}>
                              <TouchableOpacity
                                key={index}
                                onPress={() => _handlePressSpeaker(speaker)}>
                                <SemiBoldText
                                  style={styles.headerText}
                                  key={'speakers' + speaker.id + name}>
                                  {name}
                                </SemiBoldText>
                              </TouchableOpacity>
                            </View>
                          ))}
                        </View>
                      ))
                    : null}
                </View>
              ) : (
                <>
                  {speaker?.avatarUrl && (
                    <CachedImage
                      source={{uri: speaker.avatarUrl}}
                      style={styles.avatar}
                    />
                  )}
                </>
              )}
            </FadeIn>
          </Animated.View>
          {!talkScreen && speaker?.name ? (
            <SemiBoldText style={styles.headerText}>
              {speaker.name}
            </SemiBoldText>
          ) : null}
          {speaker?.twitter ? (
            <TouchableOpacity
              onPress={() =>
                _handlePressSpeakerTwitter(speaker?.twitter as string)
              }>
              <RegularText style={styles.headerText}>
                @{speaker.twitter}
              </RegularText>
            </TouchableOpacity>
          ) : null}
          {talk ? (
            <BoldText style={styles.talkTitleText}>{talk.title}</BoldText>
          ) : null}
        </View>
        {videoURL ? (
          <View style={styles.videoWrapper}>
            <WebView
              source={{
                uri: `https://www.youtube.com/embed/${videoURL}`,
              }}
              startInLoadingState
              scalesPageToFit
              javaScriptEnabled
              style={{flex: 1, height: 240}}
            />
          </View>
        ) : null}
        <AnimatableView
          animation="fadeIn"
          useNativeDriver
          delay={Platform.OS === 'ios' ? 50 : 150}
          duration={500}
          style={styles.content}>
          {!talkScreen && speaker ? (
            <View>
              <SemiBoldText style={styles.sectionHeader}>Bio</SemiBoldText>
              <Markdown>{speaker.bio}</Markdown>
            </View>
          ) : null}
          {talk ? (
            <SemiBoldText style={styles.sectionHeader}>
              {talk && talk.type === 0 ? 'Talk description' : null}
              {talk && talk.type === 1 ? 'Workshop description' : null}
              {talk && talk.type === 6 ? 'Panel description' : null}
              {talk && talk.type !== 6 && talk.type !== 0 && talk.type !== 1
                ? 'Description'
                : null}
            </SemiBoldText>
          ) : null}
          {talk?.description ? (
            <Markdown>
              {talk.description.replace(
                '**Click here to see covered subjects**',
                ''
              )}
            </Markdown>
          ) : null}
          {talkScreen && speakers?.length > 0 && talk ? (
            <View>
              <SemiBoldText style={styles.sectionHeader}>
                {talk.type === 1 ? 'Trainers' : 'Speakers'}
              </SemiBoldText>

              {speakers.map((speaker, index) => (
                <View key={index}>
                  <SemiBoldText>{speaker.name}</SemiBoldText>
                  <Markdown>{speaker.bio}</Markdown>
                </View>
              ))}
            </View>
          ) : null}
          {room && talk ? (
            <View>
              <SemiBoldText style={styles.sectionHeader}>Time</SemiBoldText>
              <RegularText>
                {convertUtcDateToEventTimezoneHour(talk.startDate)}
              </RegularText>
              <RegularText>{room}</RegularText>
            </View>
          ) : null}
        </AnimatableView>
      </AnimatedScrollView>
      <NavigationBar
        animatedBackgroundOpacity={headerOpacity}
        style={[
          Platform.OS === 'android'
            ? {height: props.headerHeight + Constants.statusBarHeight}
            : null,
        ]}
        renderLeftButton={() => (
          <View
            style={{
              // gross dumb things
              paddingTop: Platform.OS === 'android' ? 30 : 0,
              marginTop: Layout.notchHeight > 0 ? -5 : 0,
            }}>
            <CloseButton onPress={() => props.navigation.goBack()} />
          </View>
        )}
        /* TODO (Handle save talk)
         renderRightButton={() => {
          talk ? <SavedButtonNavigationItem talk={talk} /> : null; 
        }} */
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  avatarMultiple: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  content: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  markdownBio: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: 300,
    height: 200,
  },
  markdownTalkDescription: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: 300,
    height: 600,
  },
  headerRowSpeaker: {
    flexDirection: 'row',
    height: 140,
  },
  headerColumnSpeaker: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  headerContainer: {
    backgroundColor: Colors.blue,
    paddingTop: Constants.statusBarHeight + Layout.notchHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: FontSizes.subtitle,
  },
  talkTitleText: {
    color: '#fff',
    fontSize: FontSizes.title,
    textAlign: 'center',
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: FontSizes.bodyTitle,
    marginTop: 15,
    marginBottom: 3,
  },
  videoWrapper: {},
});

export default withHeaderHeight(Details);
