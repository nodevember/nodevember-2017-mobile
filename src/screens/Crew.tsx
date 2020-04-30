import WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import FadeIn from 'react-native-fade-in-image';
import {ScrollView} from 'react-native-gesture-handler';

import CachedImage from '../components/CachedImage';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import {BoldText, SemiBoldText, RegularText} from '../components/StyledText';
import {withData} from '../context/DataContext';
import {Collaborator, Event} from '../typings/data';

type CrewRowProps = {
  item: Collaborator;
};

type CrewProps = {
  event: Event;
};

function CrewRow(props: CrewRowProps) {
  const {item: crew} = props;

  const _handlePressCrewTwitter = async (twitter: string) => {
    try {
      await Linking.openURL(`twitter://user?screen_name=` + twitter);
    } catch (e) {
      WebBrowser.openBrowserAsync('https://twitter.com/' + twitter);
    }
  };

  return (
    <View style={styles.row}>
      <View style={styles.rowAvatarContainer}>
        <FadeIn>
          {crew.avatarUrl && (
            <CachedImage
              source={{uri: crew.avatarUrl}}
              style={{width: 50, height: 50, borderRadius: 25}}
            />
          )}
        </FadeIn>
      </View>
      <View style={styles.rowData}>
        <BoldText>
          {crew.firstName} {crew.lastName}
        </BoldText>
        {crew.role ? <SemiBoldText>{crew.role}</SemiBoldText> : null}
        {crew.twitter && crew.twitter !== '' ? (
          <TouchableOpacity
            onPress={() => _handlePressCrewTwitter(crew.twitter as string)}>
            <RegularText>@{crew.twitter}</RegularText>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

function Crews(props: CrewProps) {
  let collaborators: Collaborator[] = [];
  if (props.event.collaborators && props.event.collaborators.length > 0) {
    collaborators = props.event.collaborators as Collaborator[];
  }
  const _renderItem = ({item}: {item: Collaborator}) => {
    return <CrewRow item={item} />;
  };

  return (
    <LoadingPlaceholder>
      <FlatList
        renderScrollComponent={(props) => <ScrollView {...props} />}
        renderItem={_renderItem}
        data={collaborators}
        keyExtractor={(item, index) => index.toString()}
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
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  rowAvatarContainer: {
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 0,
  },
  rowData: {
    flex: 1,
  },
});

export default withData(Crews);
