import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ToastAndroid,
  ScrollView,
  Image,
  Button
} from 'react-native';


type Props = {};
export default class EntryView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          About view
        </Text>
        <Text style={styles.instructions}>
        The header provided by stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button).
          </Text>
          <Button onPress={this._onNavigateSubDetailClickHandler} title="Get time info" />
        <TouchableWithoutFeedback onPress={this._onNavigateBackClickHandler}>
          <View>
            <Text style={styles.instructionsStarter}>
              Back
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this._onNavigateTopClickHandler}>
          <View>
            <Text style={styles.instructionsStarter}>
              To Entry
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _onNavigateSubDetailClickHandler = () =>{

    const dateString = (new Date().getTime());

    this.props.navigation.navigate('SubDetails',{
      subDetail:`${dateString} : s data `,
    })

  }

  _onNavigateBackClickHandler = () => {

    this.props.navigation.goBack();

  }

  _onNavigateTopClickHandler = () => {

    this.props.navigation.popToTop();

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
    backgroundColor: '#384751',
  },
  innerSubViewLevel1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:4,
    paddingBottom:14,
  },
  ScrollViewInner: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});