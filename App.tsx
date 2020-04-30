import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {Assets as StackAssets} from '@react-navigation/stack';
import {AppLoading, SplashScreen, Updates, Linking} from 'expo';
import {Asset} from 'expo-asset';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import React, {useState} from 'react';
import {ApolloProvider} from 'react-apollo';
import {
  Animated,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  Dimensions,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {GQL} from './src/constants';
import DataContext from './src/context/DataContext';
import GET_SCHEDULE from './src/data/schedulequery';
import AppNavigator from './src/navigation/AppNavigator';
import {Event} from './src/typings/data';
import {setEvent, saveSchedule} from './src/utils';
import client from './src/utils/gqlClient';
import {loadSavedTalksAsync} from './src/utils/storage';

export default function App() {
  const [error, setError] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);
  const [isSplashReady, setIsSplashReady] = useState(false);
  const [isSplashAnimationComplete, setIsSplashAnimationComplete] = useState(
    false
  );
  const [initialLinkingUri, setInitialLinkingUri] = useState('');
  const [schedule, setSchedule] = useState<Event | null>(null);
  const [splashVisibility] = useState(new Animated.Value(1));

  /* useEffect(() => {
    Updates.addListener(({type}) => {
      if (type === Updates.EventType.DOWNLOAD_FINISHED) {
        if (this.state.isAppReady) {
          _promptForReload();
        } else {
          _shouldPromptForReload = true;
        }
      }
    });
  }, [])

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isAppReady && this.state.isAppReady) {
      if (this._shouldPromptForReload) {
        this._shouldPromptForReload = false;
        setTimeout(this._promptForReload, 1000);
      }
    }
  } 

  const _promptForReload = () => {
    Alert.alert(
      'A schedule update is available',
      'You need to restart the app to get the new schedule.',
      [
        { text: 'Restart the app now', onPress: () => Updates.reload() },
        { text: "I'll do it later", onPress: () => {} },
      ]
    );
  }; */

  const _loadResourcesAsync = async () => {
    SplashScreen.hide();
    try {
      await Promise.all([_loadAssetsAsync(), _loadDataAsync()]);
    } catch (e) {
      // if we can't load any data we should probably just not load the app
      // and give people an option to hit reload
    } finally {
      setIsAppReady(true);
      Animated.timing(splashVisibility, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setIsSplashAnimationComplete(true);
      });
    }
  };

  const _loadDataAsync = () => {
    return Promise.all([
      loadSavedTalksAsync(),
      _loadEventAsync(),
      _loadLinkingUrlAsync(),
    ]);
  };

  const _loadLinkingUrlAsync = async () => {
    const uri = await Linking.getInitialURL();
    console.log(uri);
    if (uri) {
      setInitialLinkingUri(uri);
    }
  };

  const _loadEventAsync = async () => {
    const diskFetcher = _fetchEventFromDiskAsync();
    const networkFetcher = _fetchEventFromNetworkAsync();
    const quickestResult = await Promise.race([diskFetcher, networkFetcher]);
    if (!quickestResult) {
      let slowestResult = await networkFetcher; // probably the network is slower?
      if (!slowestResult) {
        slowestResult = await diskFetcher; // but it's possible that it's disk too
        if (!slowestResult) {
          // ok seriously we have no data, this is not good. we can't really do
          // anything here, so let's display an error message
          setError(true);
        }
      }
    }
  };

  const _fetchEventFromDiskAsync = async () => {
    const schedule = await AsyncStorage.getItem('@MySuperStore2019:schedule');
    if (!schedule) {
      return null;
    }
    const event: Event = JSON.parse(schedule);
    if (event && event.slug) {
      _setEvent(event);
      return event;
    } else {
      return null;
    }
  };

  const _fetchEventFromNetworkAsync = async () => {
    try {
      const result = await client.query({
        query: GET_SCHEDULE,
        variables: {slug: GQL.slug},
      });
      if (result?.data?.events[0]) {
        const event: Event = result.data.events[0];
        _setEvent(event);
        return event;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  };

  const _setEvent = (event: Event) => {
    setEvent(event);
    saveSchedule(event);
    setSchedule(event);
  };

  const _loadAssetsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'open-sans-bold': require('./src/assets/OpenSans-Bold.ttf'),
        'open-sans': require('./src/assets/OpenSans-Regular.ttf'),
        'open-sans-semibold': require('./src/assets/OpenSans-SemiBold.ttf'),
        ...Ionicons.font,
      }),
      Asset.fromModule(require('./src/assets/logo.png')).downloadAsync(),
      Asset.loadAsync(StackAssets),
    ]);
  };

  const _cacheSplashResourcesAsync = async () => {
    const splash = require('./src/assets/splash-icon.png');
    return Asset.fromModule(splash).downloadAsync();
  };

  if (error) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30, marginBottom: 15, fontWeight: 'bold'}}>
          Bad news
        </Text>
        <Text
          style={{
            color: '#888',
            marginHorizontal: 20,
            marginBottom: 20,
            fontSize: 16,
            textAlign: 'center',
          }}>
          We can't get the React Europe schedule data. We tried to grab it from
          the website and from the disk cache and neither are available.{' '}
          <Text style={{fontWeight: 'bold'}}>
            Try to open the app again when you have a network connection
          </Text>{' '}
          and if it loads we will stash that sweet sweet schedule data away to
          disk so this will never happen again.
        </Text>
        <Button
          title="I'm feeling lucky, try again"
          onPress={() => Updates.reload()}
        />
      </View>
    );
  }

  if (!isSplashReady) {
    return (
      <AppLoading
        startAsync={_cacheSplashResourcesAsync}
        autoHideSplash={false}
        onError={console.error}
        onFinish={() => {
          setIsSplashReady(true);
        }}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        {isAppReady && schedule ? (
          <ApolloProvider client={client}>
            <DataContext.Provider
              value={{
                event: schedule,
                initialLinkingUri,
              }}>
              <NavigationContainer>
                <AppNavigator />
              </NavigationContainer>
            </DataContext.Provider>
          </ApolloProvider>
        ) : null}

        {isSplashAnimationComplete ? null : (
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Constants.manifest.splash.backgroundColor,
              opacity: splashVisibility,
            }}>
            <Animated.Image
              style={{
                width: Dimensions.get('window').width,
                resizeMode: 'contain',
                transform: [{scale: splashVisibility}],
              }}
              source={require('./src/assets/splash-icon.png')}
              onLoad={_loadResourcesAsync}
            />
          </Animated.View>
        )}
        <StatusBar barStyle="light-content" />
      </View>
    </SafeAreaProvider>
  );
}
