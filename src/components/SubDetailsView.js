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
} from 'react-native';


type Props = {};
export default class EntryView extends Component<Props> {
    static navigationOptions = {
        title:'Sub Details ( more )'
    }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Sub Details view
        </Text>

        <View style={styles.innerSubView}>
        {this.props.navigation.getParam('subDetail',<Text style={styles.instructions}>No sub details passed ...</Text>)}
        </View>

      </View>
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
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
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