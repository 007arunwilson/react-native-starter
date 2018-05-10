/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableWithoutFeedback onPress={this._onVersionClickHandler}>
          <View>
            <Text style={styles.instructionsStarter}>
              Starter App ver 1.0 beta
          </Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <View style={styles.innerSubView} >
          <View style={styles.innerSubViewLevel1}>
              <Text style={{color:'#ffffff'}} >Lorem ipsum</Text>
          </View>
        </View>
      </View>
    );
  }


  _onVersionClickHandler = () => {

    console.log('Touchable clicked');
    ToastAndroid.showWithGravityAndOffset(
      'This is just a beta version for experiment. \n  Better version yet to come.',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      20
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  instructionsStarter: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  innerSubView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#59A7DA',
  },
  innerSubViewLevel1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
