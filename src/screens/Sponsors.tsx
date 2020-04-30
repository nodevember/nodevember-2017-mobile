import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  SectionList,
  StyleSheet,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';
import FadeIn from 'react-native-fade-in-image';
import {ScrollView, RectButton} from 'react-native-gesture-handler';

import CachedImage from '../components/CachedImage';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import {SemiBoldText, RegularText} from '../components/StyledText';
import {Layout, FontSizes, Colors} from '../constants';
import {withData} from '../context/DataContext';
import {Event, Sponsor} from '../typings/data';
import {SectionHeaderProps} from '../typings/utils';

type SponsorsProps = {
  event: Event;
};

type SponsorRowProps = {
  item: Sponsor;
};

type ClipBorderRadiusProps = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const ClipBorderRadius = ({children, style}: ClipBorderRadiusProps) => {
  return (
    <View
      style={[
        {borderRadius: BORDER_RADIUS, overflow: 'hidden', marginTop: 10},
        style,
      ]}>
      {children}
    </View>
  );
};

const BORDER_RADIUS = 3;

function SponsorRow(props: SponsorRowProps) {
  const sponsor = props.item;

  const _handlePress = () => {
    if (sponsor.url) {
      WebBrowser.openBrowserAsync(sponsor.url);
    }
  };

  const _handlePressJobUrl = () => {
    if (sponsor.jobUrl) {
      WebBrowser.openBrowserAsync(sponsor.jobUrl);
    }
  };

  return (
    <RectButton
      onPress={_handlePress}
      activeOpacity={0.05}
      style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.row}>
        <View
          style={[
            styles.rowData,
            {
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: sponsor.description ? 15 : 5,
              marginTop: 10,
            },
          ]}>
          <FadeIn placeholderStyle={{borderRadius: 3}}>
            {sponsor.logoUrl && (
              <CachedImage
                source={{uri: sponsor.logoUrl}}
                style={{
                  width: Layout.window.width / 2,
                  height: 80,
                  borderRadius: 0,
                  resizeMode: 'contain',
                }}
              />
            )}
          </FadeIn>
        </View>
        {sponsor.description ? (
          <View style={styles.rowData}>
            <RegularText style={{marginBottom: 10}}>
              {sponsor.description}
            </RegularText>
          </View>
        ) : null}
        <ClipBorderRadius>
          <RectButton
            style={styles.bigButton}
            onPress={_handlePressJobUrl}
            underlayColor="#fff">
            <SemiBoldText style={styles.bigButtonText}>
              Work with {sponsor.name}
            </SemiBoldText>
          </RectButton>
        </ClipBorderRadius>
      </View>
    </RectButton>
  );
}

function Sponsors(props: SponsorsProps) {
  if (!props.event.sponsors) {
    return <></>;
  }
  const SponsorsData: {[key: string]: Sponsor[]} = props.event.sponsors as {
    [key: string]: Sponsor[];
  };
  let SponsorsByLevel: {title: string; data: Sponsor[]}[] = [];
  const levels = [
    {title: 'Diamond', key: 'diamond'},
    {title: 'Platinum', key: 'platinum'},
    {title: 'Gold', key: 'gold'},
    {title: 'Partners', key: 'partner'},
  ];
  if (SponsorsData) {
    SponsorsByLevel = levels.map(({title, key}) => {
      return {title, data: SponsorsData[key] ? SponsorsData[key] : []};
    });
  }

  const _renderSectionHeader = ({section}: SectionHeaderProps<Sponsor>) => {
    return (
      <View style={styles.sectionHeader}>
        <RegularText>{section.title}</RegularText>
      </View>
    );
  };

  const _renderItem = ({item}: {item: Sponsor}) => {
    return <SponsorRow item={item} />;
  };

  return (
    <LoadingPlaceholder>
      {SponsorsByLevel.length && (
        <SectionList
          renderScrollComponent={(props) => <ScrollView {...props} />}
          stickySectionHeadersEnabled
          sections={SponsorsByLevel}
          renderSectionHeader={_renderSectionHeader}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
          initialNumToRender={4}
        />
      )}
    </LoadingPlaceholder>
  );
}

const styles = StyleSheet.create({
  bigButton: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 15,
    height: 50,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  bigButtonText: {
    fontSize: FontSizes.normalButton,
    color: '#fff',
    textAlign: 'center',
  },
  row: {
    flex: 1,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
  },
  rowAvatarContainer: {
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 0,
  },
  rowData: {
    flex: 1,
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

export default withData(Sponsors);
