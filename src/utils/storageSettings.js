import { AsyncStorage } from 'react-native';
export const savedTalksStorageKey = '@Nodevember:savedTalks';

export const loadSavedTalks = () => {
  return AsyncStorage.getItem(savedTalksStorageKey).then(value => {
    if (value) {
      return JSON.parse(value);
    }
  });
};

export const storeSavedTalks = savedTalks => {
  return AsyncStorage.setItem(savedTalksStorageKey, JSON.stringify(savedTalks));
};
