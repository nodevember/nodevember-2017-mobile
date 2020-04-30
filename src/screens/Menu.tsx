import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import CachedImage from '../components/CachedImage';
import {Colors, Layout} from '../constants';
import {MenuNavigationProp, MenuStackParamList} from '../typings/navigation';

type Props = {
  navigation: MenuNavigationProp<'Menu'>;
};

function MenuScreen(props: Props) {
  function getIconName(key: keyof MenuStackParamList) {
    if (key === 'Speakers') return 'ios-microphone';
    if (key === 'Crew') return 'ios-information-circle';
    if (key === 'Sponsors') return 'ios-beer';
    if (key === 'Attendees') return 'ios-people';
  }
  const screens: {key: keyof MenuStackParamList}[] = [
    {key: 'Speakers'},
    {key: 'Crew'},
    {key: 'Sponsors'},
    {key: 'Attendees'},
  ];
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={screens}
        ListHeaderComponent={() => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: 240 + Layout.notchHeight,
            }}>
            <CachedImage
              source={require('../assets/hero.png')}
              style={{
                height: 240 + Layout.notchHeight,
                width: Layout.window.width,
                resizeMode: 'cover',
                position: 'absolute',
              }}
            />
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  backgroundColor: 'rgba(0,0,0,0.5)',
                },
              ]}
            />
            <Image
              source={require('../assets/logo.png')}
              style={[
                {
                  width: 220,
                  height: 100,
                  resizeMode: 'contain',
                },
              ]}
            />
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: StyleSheet.hairlineWidth,
              backgroundColor: '#cdcdcd',
            }}
          />
        )}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => props.navigation.navigate(item.key)}>
            <View
              style={{
                flex: 1,
                paddingVertical: 12,
                paddingHorizontal: 16,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicons
                name={getIconName(item.key)}
                size={24}
                color={Colors.blue}
              />
              <Text style={{fontSize: 20, marginHorizontal: 16, flex: 1}}>
                {item.key}
              </Text>
              <Ionicons name="ios-arrow-forward" size={24} color="#999" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default MenuScreen;
