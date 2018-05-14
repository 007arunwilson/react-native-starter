/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { createStackNavigator } from 'react-navigation';
import EntryView from './src/components/EntryView';
import DetailsView from './src/components/DetailsView';

export default createStackNavigator({
  Entry: {
    screen: EntryView
  },
  Details: {
    screen: DetailsView
  },
},
{
  initialRouteName: 'Entry',
});