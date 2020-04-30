import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  InteractionManager,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AppNavigationProp, AppStackParamList} from '../../typings/navigation';

type Props = {
  onBarCodeScanned: (data: string) => void;
  loading?: boolean;
  title: string;
};

function QRScreen(props: Props) {
  const navigation = useNavigation<
    AppNavigationProp<keyof AppStackParamList>
  >();
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      _requestCameraPermission();
      InteractionManager.runAfterInteractions(() => {
        setShowQRScanner(true);
      });
    }, [])
  );

  const _requestCameraPermission = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission(status === 'granted');
  };

  const _onBarCodeRead = ({data}: {data: string}) => {
    setShowQRScanner(false);
    props.onBarCodeScanned(data);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {showQRScanner && hasCameraPermission ? (
        <BarCodeScanner
          onBarCodeScanned={props.loading ? () => {} : _onBarCodeRead}
          style={{flex: 1}}
        />
      ) : null}

      <SafeAreaView style={{position: 'absolute', top: 0, left: 0, right: 0}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: Platform.OS === 'ios' ? 15 : 40,
            textAlign: 'center',
            color: '#fff',
          }}>
          {props.title}
        </Text>
      </SafeAreaView>

      <SafeAreaView
        style={{
          position: 'absolute',
          bottom: 10,
          paddingBottom: Platform.OS === 'ios' ? 0 : 15,
          left: 0,
          right: 0,
          alignItems: 'center',
        }}>
        <Button
          onPress={() => navigation.goBack()}
          color={Platform.OS === 'ios' ? '#fff' : ''}
          title="Dismiss"
        />
      </SafeAreaView>
      {props.loading ? (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            },
          ]}>
          <ActivityIndicator
            color="#fff"
            size="large"
            style={{backgroundColor: 'transparent'}}
          />
        </View>
      ) : null}
    </View>
  );
}

export default QRScreen;
