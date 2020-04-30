import {Colors} from '../constants';

function DefaultStackConfig(route: any) {
  return {
    cardStyle: {
      backgroundColor: '#fafafa',
    },
    title: route.name,
    headerStyle: {
      borderBottomWidth: 0,
      shadowRadius: 0,
      backgroundColor: Colors.blue,
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
  };
}

export default DefaultStackConfig;
