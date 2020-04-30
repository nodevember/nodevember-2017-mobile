import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {Text, Platform, StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Button,
  CardActions,
  CardContent,
  Title,
  Paragraph,
  Card,
  //@ts-ignore TODO use a new react-native-paper release
} from 'react-native-paper';

import GravatarImage from '../components/GravatarImage';
import {Attendee} from '../typings/data';
import {sendEmail, openTwitter, getContactTwitter} from '../utils';
import {saveContactOnDevice} from '../utils/storage';

type Props = {
  contact: Attendee;
  tickets: Attendee[];
};

function ContactCard({contact, tickets}: Props) {
  const bio: string | null = getContactBio();
  const twitter: string | null = null;

  const _handlePressTwitterButton = () => {
    const twitter = getContactTwitter(contact);
    openTwitter(twitter);
  };

  const _handlePressEmailButton = () => {
    const emailTo = contact.email;
    if (tickets[0]?.firstName && tickets[0]?.lastName && emailTo) {
      sendEmail(emailTo, {
        firstName: tickets[0].firstName,
        lastName: tickets[0].lastName,
      });
    }
  };

  async function handleAddContact() {
    saveContactOnDevice(contact);
  }

  function getContactBio() {
    let bio: string | null = null;
    if (contact?.answers) {
      contact.answers.map((answer) => {
        if (answer?.question?.id && answer.question.id === 56) {
          if (answer.value) {
            bio = answer.value;
          }
        }
      });
    }
    return bio;
  }

  return (
    <Card>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {contact.email && (
          <GravatarImage style={styles.avatarImage} email={contact.email} />
        )}
        <View style={{flex: 1}}>
          <CardContent>
            <Title>{contact.firstName + ' ' + contact.lastName}</Title>
            {bio && <Paragraph>{bio}</Paragraph>}
          </CardContent>
          <CardActions>
            {tickets[0]?.firstName && tickets[0]?.lastName && (
              <Button onPress={_handlePressEmailButton}>EMAIL</Button>
            )}
            <Button
              style={styles.buttonRemovePadding}
              onPress={handleAddContact}>
              <Ionicons
                name={
                  Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'
                }
                size={Platform.OS === 'ios' ? 40 : 30}
                style={styles.icon}
              />
            </Button>
            {twitter && (
              <Button
                style={styles.buttonRemovePadding}
                onPress={_handlePressTwitterButton}>
                <Ionicons
                  name="logo-twitter"
                  size={Platform.OS === 'ios' ? 40 : 30}
                  style={[styles.icon, {color: '#00AAE4'}]}
                />
                <Text>@{twitter}</Text>
              </Button>
            )}
          </CardActions>
        </View>
      </View>
    </Card>
  );
}

export default ContactCard;

const styles = StyleSheet.create({
  buttonRemovePadding: {
    padding: 0,
    margin: 0,
  },
  icon: {
    paddingHorizontal: 4,
  },
  avatarImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginLeft: 8,
    marginTop: 8,
  },
  headerRow: {
    flexDirection: 'row',
  },
});
