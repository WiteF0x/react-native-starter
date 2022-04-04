import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Root from '../screens/Root';
import Main from '../screens/Home';

const appNavigator = createStackNavigator({
  Root: {
    screen: Root,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
},
{
  initialRouteName: 'Root',
});

export default createAppContainer(appNavigator);