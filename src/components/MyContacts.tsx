import React from 'react';
import {
  Alert,
  Clipboard,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {FontSizes, Colors} from '../constants';
import {User} from '../typings/data';
import {getContactTwitter} from '../utils';
import ContactCard from './ContactCard';
import {SemiBoldText} from './StyledText';

type Props = {
  contacts: User[];
  tickets: User[];
  style?: StyleProp<ViewStyle>;
};

type ClipBorderRadiusProps = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

export default function MyContacts(props: Props) {
  const contacts = props.contacts;

  const _handlePressCopyEmails = () => {
    let contacts = 'first name,last name,email,twitter\n';
    props.contacts.map((contact) => {
      contacts +=
        contact.firstName +
        ',' +
        contact.lastName +
        ',' +
        contact.email +
        ',' +
        getContactTwitter(contact) +
        ' \n';
    });
    Clipboard.setString(contacts);
    Alert.alert(
      'Contacts copied',
      'Your contacts have been copied in csv format, you can past them anywhere',
      [{text: 'OK', onPress: () => Clipboard.setString(contacts)}]
    );
  };

  return (
    <View style={[{marginHorizontal: 10}, props.style]}>
      <SemiBoldText style={{fontSize: FontSizes.title}}>
        My Contacts
      </SemiBoldText>
      {contacts && contacts.length > 0 ? (
        <ClipBorderRadius>
          <RectButton
            style={styles.bigButton}
            onPress={_handlePressCopyEmails}
            underlayColor="#fff">
            <SemiBoldText style={styles.bigButtonText}>
              Copy all emails to clipboard
            </SemiBoldText>
          </RectButton>
        </ClipBorderRadius>
      ) : null}
      {contacts.map((contact) => {
        if (contact?.id && contact?.email) {
          return (
            <ContactCard
              key={contact.id + contact.email}
              contact={contact}
              tickets={props.tickets}
            />
          );
        }
        return null;
      })}
    </View>
  );
}

const ClipBorderRadius = ({children, style}: ClipBorderRadiusProps) => {
  return (
    <View style={[{borderRadius: BORDER_RADIUS, overflow: 'hidden'}, style]}>
      {children}
    </View>
  );
};

const BORDER_RADIUS = 3;

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
});
