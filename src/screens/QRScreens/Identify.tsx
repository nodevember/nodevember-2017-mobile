import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import React, {useEffect, useState} from 'react';
import {Alert, AsyncStorage} from 'react-native';

import {GQL} from '../../constants';
import QR_QUERY from '../../data/qrQuery';
import UPDATE_PUSH_TOKEN_QUERY from '../../data/updatePushTokenQuery';
import {User} from '../../typings/data';
import {AppProps} from '../../typings/navigation';
import client from '../../utils/gqlClient';
import QRScreen from './QRScreen';

export default function QRScannerModalNavigation(props: AppProps<'QRScanner'>) {
  const [loading, setLoading] = useState(false);

  async function setTickets(tickets: string) {
    try {
      await AsyncStorage.setItem('@MySuperStore2019:tickets', tickets);
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  useEffect(() => {
    if (props.route.params?.uuid) {
      _handleBarCodeRead(props.route.params.uuid);
    }
  }, []);

  async function registerForPushNotificationsAsync(uuid: string) {
    const {status: existingStatus} = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    const token = await Notifications.getExpoPushTokenAsync();
    const variables = {uuid, expoPushToken: token};

    const value = await client.mutate({
      mutation: UPDATE_PUSH_TOKEN_QUERY,
      variables,
    });

    if (value) {
      console.log('updated attendee', value, token, uuid);
    }
    console.log('token', token, uuid);
  }

  const _handleBarCodeRead = async (data: string) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const variables = {slug: GQL.slug, uuid: data};
    try {
      const result = await client.query({
        query: QR_QUERY,
        variables,
      });
      console.log('slug', GQL.slug);
      let me: User;
      if (result?.data?.events?.[0]) {
        me = result.data.events[0].me;
        if (me === null) {
          Alert.alert('Ticket not found!');
          return;
        }
      } else {
        Alert.alert('Oops, something went wrong!');
        return;
      }

      const value = await AsyncStorage.getItem('@MySuperStore2019:tickets');
      let tickets: User[] | null = null;
      const newTickets: User[] = [];
      let found = false;

      if (value === null && me !== null) {
        tickets = [me];
      } else {
        const existingTickets: User[] = JSON.parse(value ? value : '[]');
        existingTickets.map((ticket) => {
          if (ticket && me && me.ref && ticket.ref === me.ref) {
            found = true;
            newTickets.push(me);
          } else {
            if (ticket) {
              newTickets.push(ticket);
            }
          }
        });
        if (!found && me) {
          newTickets.push(me);
        }
        tickets = newTickets;
        if (!tickets || tickets[0] === [null]) {
          tickets = [];
        }
      }

      if (tickets && tickets !== null && tickets !== []) {
        const stringifiedTickets = JSON.stringify(tickets);
        console.log(stringifiedTickets);
        await setTickets(stringifiedTickets);
        registerForPushNotificationsAsync(variables.uuid);
        props.navigation.navigate('Home', {screen: 'Profile'});
      }
      // expected output: Array [1, 2, 3]
    } catch (e) {
      console.log('failed 1');
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  if (props.route.params?.uuid && props.route.params?.uuid !== '') {
    return null;
  }
  return (
    <QRScreen
      title="Scan your ticket QR code"
      loading={loading}
      onBarCodeScanned={_handleBarCodeRead}
    />
  );
}
