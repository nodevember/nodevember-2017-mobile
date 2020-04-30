import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ViewStyle, StyleProp} from 'react-native';
//@ts-ignore TODO use a new react-native-paper release
import {Button, Card, CardContent, Title} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

import {User} from '../typings/data';
import {PrimaryTabNavigationProp} from '../typings/navigation';

type Props = {
  ticket: User;
  style?: StyleProp<ViewStyle>;
};

function TicketCard(props: Props) {
  const navigation = useNavigation<PrimaryTabNavigationProp<'Profile'>>();
  const {ticket} = props;

  const _handlePress = () => {
    navigation.navigate('TicketInstructions', {
      ticket: props.ticket,
    });
  };

  /* const _renderPlaceholderForNextYear = () => {
    return (
      <View style={[styles.button, props.style]}>
        <RegularText style={styles.nextYear}>See you in 2019!</RegularText>
      </View>
    );
  }; */

  return (
    <Card key={ticket.id}>
      <CardContent>
        {ticket.checkinLists && (
          <>
            <Title>ticket gives you access to:</Title>
            {ticket.checkinLists.map((ch) => {
              if (ch?.id && ch?.name) {
                return <Title key={ch.id}>✓ {ch.name}</Title>;
              }
              return null;
            })}
          </>
        )}
        {ticket.ref && <QRCode value={ticket.ref} size={300} />}
        <Button onPress={_handlePress}>Read useful info</Button>
      </CardContent>
    </Card>
  );
}

export default TicketCard;

/* const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
  },
  headerRowAvatarContainer: {
    paddingRight: 10,
  },
  headerRowInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  speakerName: {
    fontSize: FontSizes.bodyTitle,
  },
  organizationName: {
    color: Colors.faint,
    fontSize: FontSizes.bodyLarge,
  },
  ticketInfoRow: {
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  ticketTitle: {
    fontSize: FontSizes.bodyTitle,
  },
  ticketLocation: {
    fontSize: FontSizes.bodyLarge,
    color: Colors.faint,
    marginTop: 10,
  },
  nextYear: {
    textAlign: 'center',
    fontSize: FontSizes.title,
    marginVertical: 10,
  },
  button: {
    padding: 15,
    ...Platform.select({
      ios: {
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {width: 2, height: 2},
      },
      android: {
        backgroundColor: '#fff',
        elevation: 2,
      },
    }),
  },
}); */
