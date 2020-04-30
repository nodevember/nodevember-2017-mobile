import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

type Props = {
  onPress: () => void;
};

function CloseButton(props: Props) {
  const {onPress} = props;

  return (
    <BorderlessButton onPress={onPress} style={styles.container} borderless>
      <View style={styles.container}>
        <Ionicons
          name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
          size={Platform.OS === 'ios' ? 40 : 30}
          color="#fff"
          style={styles.icon}
        />
      </View>
    </BorderlessButton>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  icon: {
    margin: 16,
    marginTop: 0,
  },
});

export default CloseButton;
