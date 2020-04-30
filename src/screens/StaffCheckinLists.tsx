import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  AsyncStorage,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import {ScrollView, RectButton} from 'react-native-gesture-handler';

import LoadingPlaceholder from '../components/LoadingPlaceholder';
import {RegularText} from '../components/StyledText';
import {FontSizes, Colors} from '../constants';
import {Event, User, CheckinList} from '../typings/data';
import {AppNavigationProp} from '../typings/navigation';

const BORDER_RADIUS = 3;

type Props = {
  event: Event;
  navigation: AppNavigationProp<'StaffCheckinLists'>;
};

type StaffCheckinListRowProps = {
  navigation: AppNavigationProp<'StaffCheckinLists'>;
  item: CheckinList;
  uuid: string;
};

export function StaffCheckinListRow(props: StaffCheckinListRowProps) {
  const _handleCheckinListPress = () => {
    props.navigation.navigate('QRCheckinScanner', {
      checkinList: props.item,
      uuid: props.uuid,
    });
  };
  const {item} = props;
  return (
    <TouchableOpacity onPress={_handleCheckinListPress}>
      <RectButton
        activeOpacity={0.05}
        style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.row}>
          {item.name ? (
            <View>
              <RegularText>{item.name}</RegularText>
            </View>
          ) : null}
        </View>
      </RectButton>
    </TouchableOpacity>
  );
}

export default function StaffCheckinLists(props: Props) {
  const [staffCheckinLists, setStaffCheckinLists] = useState<CheckinList[]>([]);
  const [uuid, setUuid] = useState('');

  async function getTickets() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore2019:tickets');
      if (!value) {
        return;
      }
      const json: User[] = JSON.parse(value) || [];
      let staffCheckinListsArray: CheckinList[] = [];
      let uuid = '';
      json.map((ticket) => {
        if (ticket?.staffCheckinLists && ticket.staffCheckinLists.length > 0) {
          staffCheckinListsArray = ticket.staffCheckinLists as CheckinList[];
        }
        if (ticket.uuid) {
          uuid = ticket.uuid;
        }
      });
      setStaffCheckinLists(staffCheckinListsArray);
      setUuid(uuid);
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  useEffect(() => {
    getTickets();
  }, []);

  const _renderItem = ({item}: {item: CheckinList}) => {
    return (
      <StaffCheckinListRow
        item={item}
        uuid={uuid}
        navigation={props.navigation}
      />
    );
  };
  return (
    <LoadingPlaceholder>
      <FlatList
        renderScrollComponent={(props) => <ScrollView {...props} />}
        data={staffCheckinLists}
        renderItem={_renderItem}
        //<ListItem title={item.lastName} description="Press here to start checking people" icon="folder" key={item.id}/>}

        /**/
      />
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
