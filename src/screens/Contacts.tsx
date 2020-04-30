import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  AsyncStorage,
  View,
  InteractionManager,
  StyleProp,
  TextStyle,
} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';
import {RectButton} from 'react-native-gesture-handler';

import MyContacts from '../components/MyContacts';
import {SemiBoldText} from '../components/StyledText';
import {Colors, FontSizes} from '../constants';
import {User} from '../typings/data';
import {PrimaryTabNavigationProp} from '../typings/navigation';

type ClipBorderRadiusProps = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

function Contacts() {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <DeferredContactsContent />
      </ScrollView>
    </View>
  );
}

function DeferredContactsContent() {
  const navigation = useNavigation<PrimaryTabNavigationProp<'Contacts'>>();
  const [ready, setReady] = useState(Platform.OS !== 'android');
  const [tickets, setTickets] = useState<User[]>([]);
  const [contacts, setContacts] = useState<User[]>([]);

  async function getTickets() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore2019:contacts');
      if (value) {
        setContacts(JSON.parse(value));
      }
    } catch (err) {
      console.log(err);
      setContacts([]);
    }
    try {
      const value = await AsyncStorage.getItem('@MySuperStore2019:tickets');
      if (value) {
        setTickets(JSON.parse(value));
      }
    } catch (err) {
      console.log(err);
      return [];
    }
    if (!ready) {
      setReady(true);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      InteractionManager.runAfterInteractions(() => {
        getTickets();
      });
    }, [])
  );

  const _handlePressQRButton = () => {
    navigation.navigate('QRContactScanner');
  };

  const _handlePressProfileQRButton = () => {
    navigation.navigate('QRScanner');
  };

  if (!ready) {
    return null;
  }
  return (
    <AnimatableView animation="fadeIn" useNativeDriver duration={800}>
      <MyContacts
        contacts={contacts}
        tickets={tickets}
        style={{marginTop: 20, marginHorizontal: 15, marginBottom: 2}}
      />
      {tickets && tickets.length > 0 ? (
        <ClipBorderRadius>
          <RectButton
            style={styles.bigButton}
            onPress={_handlePressQRButton}
            underlayColor="#fff">
            <SemiBoldText style={styles.bigButtonText}>
              Scan a contact's QR code
            </SemiBoldText>
          </RectButton>
        </ClipBorderRadius>
      ) : (
        <ClipBorderRadius>
          <RectButton
            style={styles.bigButton}
            onPress={_handlePressProfileQRButton}
            underlayColor="#fff">
            <SemiBoldText style={styles.bigButtonText}>
              You need to scan your ticket first
            </SemiBoldText>
          </RectButton>
        </ClipBorderRadius>
      )}
    </AnimatableView>
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
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 17 * 1.5,
  },
  headerSmallText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 7,
    lineHeight: 7 * 1.5,
  },
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
  seeAllTalks: {
    fontSize: FontSizes.normalButton,
    color: Colors.blue,
  },
});

export default Contacts;
