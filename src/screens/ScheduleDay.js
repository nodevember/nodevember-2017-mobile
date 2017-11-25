import React from 'react';
import {
  Text,
  SectionList,
  StyleSheet,
  View,
  AsyncStorage,
} from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import _ from 'lodash';

import { RegularText, SemiBoldText, BoldText } from '../components/StyledText';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import { Colors, Layout } from '../constants';
import MenuButton from '../components/MenuButton';
import SaveButton from '../components/SaveButton';
import { loadSavedTalks, storeSavedTalks } from '../utils/storageSettings';

import FullSchedule from '../data/schedule.json';

class ScheduleRow extends React.Component {
  render() {
    const { item } = this.props;
    const content = (
      <View style={[styles.row, !item.talk && styles.rowStatic]}>
        <View style={{ flexGrow: 2, flexShrink: 1 }}>
          <BoldText>{item.title}</BoldText>
          {item.speaker ? <SemiBoldText>{item.speaker}</SemiBoldText> : null}
          <RegularText>{item.room}</RegularText>
        </View>
        <View style={{ padding: 4 }}>
          <SaveButton
            active={this.props.saved}
            savePress={this.props.toggleSaved}
          />
        </View>
      </View>
    );

    if (item.talk) {
      return (
        <RectButton
          activeOpacity={0.05}
          onPress={this._handlePress}
          style={{ flex: 1, backgroundColor: '#fff' }}
        >
          {content}
        </RectButton>
      );
    } else {
      return content;
    }
  }

  _handlePress = () => {
    this.props.onPress && this.props.onPress(this.props.item);
  };
}

export default function ScheduleDay(options) {
  const schedule = _.find(
    FullSchedule,
    schedule => schedule.title === options.day
  );
  const slotsByTime = _.groupBy(schedule.slots, slot => slot.time);
  const slotsData = _.map(slotsByTime, (data, time) => {
    return { data, title: time };
  });

  class ScheduleDayComponent extends React.Component {
    static navigationOptions = {
      title: Layout.isSmallDevice ? options.day : `${options.day} Schedule`,
      headerStyle: { backgroundColor: Colors.green },
      headerTintColor: 'white',
      headerLeft: <MenuButton />,
      tabBarLabel: options.day,
      tabBarIcon: ({ tintColor }) => (
        <BoldText style={{ fontSize: 20, color: tintColor }}>
          {options.date}
        </BoldText>
      ),
    };
    state = {
      savedTalks: {},
    };

    componentDidMount() {
      loadSavedTalks().then(value =>
        this.setState({ savedTalks: value || {} })
      );
    }

    render() {
      return (
        <LoadingPlaceholder>
          <SectionList
            renderScrollComponent={props => <ScrollView {...props} />}
            stickySectionHeadersEnabled={true}
            renderItem={this._renderItem}
            renderSectionHeader={this._renderSectionHeader}
            sections={slotsData}
            keyExtractor={item => _.snakeCase(item.title)}
            initialNumToRender={10}
          />
        </LoadingPlaceholder>
      );
    }

    _renderSectionHeader = ({ section }) => {
      return (
        <View style={styles.sectionHeader}>
          <RegularText>{section.title}</RegularText>
        </View>
      );
    };

    _renderItem = ({ item }) => {
      const key = _.snakeCase(item.title);
      return (
        <ScheduleRow
          item={item}
          onPress={this._handlePressRow}
          saved={this.state.savedTalks[key]}
          toggleSaved={this._handleSaveToggle.bind(this, key)}
        />
      );
    };

    _handlePressRow = item => {
      this.props.navigation.navigate('Details', { scheduleSlot: item });
    };

    _handleSaveToggle = key => {
      this.setState(
        state => ({
          savedTalks: {
            ...state.savedTalks,
            [key]: !state.savedTalks[key],
          },
        }),
        this._storeSavedTalks
      );
    };

    _storeSavedTalks = () => {
      storeSavedTalks(this.state.savedTalks);
    };
  }

  return StackNavigator(
    {
      Day: {
        screen: ScheduleDayComponent,
      },
    },
    {
      cardStyle: {
        backgroundColor: '#fafafa',
      },
      navigationOptions: {
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
        },
      },
    }
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
