/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { createStackNavigator } from 'react-navigation';
import EntryView from './src/components/EntryView';
import DetailsView from './src/components/DetailsView';
import AboutView from './src/components/AboutView';
import SubDetails from './src/components/SubDetailsView';

export default createStackNavigator({
  Entry: {
    screen: EntryView
  },
  Details: {
    screen: DetailsView
  },
  About: {
    screen: AboutView
  },
  SubDetails: {
    screen: SubDetails
  },
},
{
  initialRouteName: 'Entry',
});