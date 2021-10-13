import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Root from 'src/screens/Root';
import Main from 'src/screens/Home';

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