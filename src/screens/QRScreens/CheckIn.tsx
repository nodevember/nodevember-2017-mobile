import React, {useEffect, useState} from 'react';
import {Alert, AsyncStorage} from 'react-native';

import QR_CHECKIN_QUERY from '../../data/qrCheckinQuery';
import {AppProps} from '../../typings/navigation';
import client from '../../utils/gqlClient';
import QRScreen from './QRScreen';

export default function QRCheckinScannerModalNavigation(
  props: AppProps<'QRCheckinScanner'>
) {
  const [loading, setLoading] = useState(false);
  const params = props.route.params;

  useEffect(() => {
    AsyncStorage.removeItem('@MySuperStore2019:lastCheckedInRef');
  }, []);

  const _handleCheckinBarCodeRead = async (data: string) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const lastCheckedInRef = await AsyncStorage.getItem(
        '@MySuperStore2019:lastCheckedInRef'
      );
      await AsyncStorage.setItem('@MySuperStore2019:lastCheckedInRef', data);

      if (data === lastCheckedInRef) {
        // bail out
        return;
      }

      //{ slug: GQL.slug, uuid: data };
      const variables = {
        uuid: params.uuid,
        checkinListId: params.checkinList.id,
        ref: data,
      };

      //console.log("Scanned!", data);
      //console.log("variables", variables);
      //console.log("uuid state is", this.state.uuid);
      //console.log("checkinlist state is", this.state.checkinList);

      const value = await client.mutate({
        mutation: QR_CHECKIN_QUERY,
        variables,
      });

      console.log('checkin mutation value', value);
      if (value && value.data && value.data.createCheckin === null) {
        Alert.alert(
          'This reference could not be found, make sure you selected the right Checkin List!'
        );
      } else if (value && value.data && value.data.createCheckin) {
        if (
          value.data.createCheckin.checkinMessage === 'Already checked-in today'
        ) {
          Alert.alert(
            'This reference has already been checked today! The person cannot get in as their ticket has already been used by someone else.'
          );
        }
        props.navigation.navigate('CheckedInAttendeeInfo', {
          checkedInAttendee: value.data.createCheckin,
        });
      }
      // expected output: Array [1, 2, 3]
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <QRScreen
      loading={loading}
      title={`Checking ${params.checkinList.name}`}
      onBarCodeScanned={_handleCheckinBarCodeRead}
    />
  );
}
