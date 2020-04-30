import {Dimensions, Platform} from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const {height: D_HEIGHT, width: D_WIDTH} = Dimensions.get('window');
const isIPhoneX =
  Platform.OS === 'ios' && D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH;
const notchHeight = isIPhoneX ? 20 : 0;

const isSmallDevice = D_WIDTH < 326;

export const Layout = {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  notchHeight,
  isSmallDevice,
};

export const Colors = {
  blue: '#4d5fab',
  faint: '#7a7a7a',
};

export const Icons = {
  favorite: `ios-bookmark-outline`,
  favoriteActive: `ios-bookmark`,
};

export const FontSizes = {
  title: isSmallDevice ? 16 : 18,
  subtitle: isSmallDevice ? 14 : 16,
  bodyLarge: 14,
  bodyTitle: isSmallDevice ? 14 : 15,
  normalButton: isSmallDevice ? 15 : 16,
};

export const GQL = {
  uri: 'https://www.react-europe.org/gql',
  slug: 'reacteurope-2019',
  // uri: "http://192.168.1.32:4449/gql",
  //    uri: "https://a6bb05ac.ngrok.io",
  //    slug: "cluster-test"
};
