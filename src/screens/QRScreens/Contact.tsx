import React from 'react';
import {AsyncStorage} from 'react-native';

import {GQL} from '../../constants';
import QR_CONTACT_QUERY from '../../data/qrContactQuery';
import {User, Attendee} from '../../typings/data';
import {AppNavigationProp} from '../../typings/navigation';
import {addContact} from '../../utils';
import client from '../../utils/gqlClient';
import {saveNewContact} from '../../utils/storage';
import QRScreen from './QRScreen';

type Props = {
  navigation: AppNavigationProp<'QRContactScanner'>;
};

export default function QRContactScannerModalNavigation(props: Props) {
  const _handleContactBarCodeRead = async (data: string) => {
    const value = await AsyncStorage.getItem('@MySuperStore2019:tickets');
    if (!value) {
      return;
    }
    const tickets: User[] = JSON.parse(value) || [];
    let uuid = '';
    const contactRef = data;
    tickets.map(async (ticket: User) => {
      if (ticket.checkinLists) {
        ticket.checkinLists.map((ch) => {
          if (ch?.mainEvent && ticket?.uuid) {
            uuid = ticket.uuid;
          }
        });
      }
      const variables = {slug: GQL.slug, uuid, q: contactRef};

      const scannedContact = await client.query({
        query: QR_CONTACT_QUERY,
        variables,
      });
      if (scannedContact?.data?.events[0]?.attendees[0]) {
        const contact = scannedContact.data.events[0].attendees[0];
        // console.log('new contact', contact);
        // console.log('new contact query', QR_CONTACT_QUERY);
        // console.log('new contact query variables', variables);
        saveNewContact(contact);
        props.navigation.navigate('Home', {screen: 'Contacts'});
      }
    });
    const variables = {slug: GQL.slug, uuid, q: contactRef};
    const scannedContact = await client.query({
      query: QR_CONTACT_QUERY,
      variables,
    });
    if (scannedContact?.data?.events[0]?.attendees[0]) {
      const contact: Attendee = scannedContact.data.events[0].attendees[0];
      await addContact(contact);
      props.navigation.navigate('Home', {screen: 'Contacts'});
    }
  };

  return (
    <QRScreen
      title="Scan a badge's QR code"
      onBarCodeScanned={_handleContactBarCodeRead}
    />
  );
}
