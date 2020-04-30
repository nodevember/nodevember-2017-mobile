import {useFocusEffect, useNavigation} from '@react-navigation/native';
import * as Permissions from 'expo-permissions';
import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  AsyncStorage,
  InteractionManager,
  Alert,
  StyleProp,
  TextStyle,
} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';
import {RectButton} from 'react-native-gesture-handler';

import {SemiBoldText} from '../components/StyledText';
import Tickets from '../components/Tickets';
import {Colors, FontSizes} from '../constants';
import {User} from '../typings/data';
import {PrimaryTabNavigationProp} from '../typings/navigation';

type ClipBorderRadiusProps = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

function Profile() {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <DeferredProfileContent />
      </ScrollView>
    </View>
  );
}

function DeferredProfileContent() {
  const navigation = useNavigation<PrimaryTabNavigationProp<'Profile'>>();
  const [tickets, setTickets] = useState<User[]>([]);
  const [ready, setReady] = useState(Platform.OS !== 'android');

  const getTickets = async () => {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore2019:tickets');
      if (value) {
        const tickets: User[] = JSON.parse(value);
        setTickets(tickets);
      }
    } catch (err) {
      console.log(err);
    } finally {
      if (!ready) {
        setReady(true);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      InteractionManager.runAfterInteractions(() => {
        getTickets();
      });
    }, [])
  );

  const _requestCameraPermission = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    const hasCameraPermission = status === 'granted';
    return hasCameraPermission;
  };

  const _handlePressQRButton = async () => {
    if (await _requestCameraPermission()) {
      navigation.navigate('QRScanner');
    } else {
      Alert.alert(
        'You need to manually enable camera permissions in your operating system settings app'
      );
    }
  };

  if (!ready) {
    return null;
  }
  return (
    <AnimatableView animation="fadeIn" useNativeDriver duration={800}>
      <Tickets
        tickets={tickets}
        style={{marginTop: 20, marginHorizontal: 15, marginBottom: 2}}
      />

      <ClipBorderRadius>
        <RectButton
          style={styles.bigButton}
          onPress={_handlePressQRButton}
          underlayColor="#fff">
          <SemiBoldText style={styles.bigButtonText}>
            {tickets && tickets.length > 0
              ? 'Scan another ticket QR code'
              : 'Scan your ticket QR code'}
          </SemiBoldText>
        </RectButton>
      </ClipBorderRadius>
    </AnimatableView>
  );
}

const ClipBorderRadius = ({children, style}: ClipBorderRadiusProps) => {
  return (
    <View
      style={[
        {borderRadius: BORDER_RADIUS, overflow: 'hidden', marginTop: 10},
        style,
      ]}>
      {children}
    </View>
  );
};

const BORDER_RADIUS = 3;

const styles = StyleSheet.create({
  headerContent: {
    alignItems: 'center',
    marginTop: 5,
    paddingVertical: 10,
  },
  headerVideoLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  headerVideoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.blue,
    opacity: 0.8,
  },
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

export default Profile;
