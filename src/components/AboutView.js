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
  Button,
  FlatList
} from 'react-native';


type Props = {};
export default class AboutView extends Component<Props> {

  state = {data:[
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 1, "name": "Charil Master", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 2, "name": "Jumbro Merlin", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
    { "id": 3, "name": "Fedora Louis", "last_message": "exploit proactive functionalities", "picture": "url", "time": "29/10/2016" },
  ]};

  static navigationOptions = {
    title: 'About',
  };

  componentDidMount(){

      console.log('[Component Did mount]');

  }

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

  _onNavigateSubDetailClickHandler = () => {

    const dateString = (new Date().getTime());

    const subDetailDataTemplate = (<FlatList
      keyExtractor={(item, index) => '_key_'+index}
      data={this.state.data}
      renderItem={(data) => {
        let { item, index } = data;
        return (<View style={flatListStyles.viewBase} >
        <View style={flatListStyles.viewInner} >
          <Text style={flatListStyles.userFullnametext} >{item.name}</Text>
          </View>
        </View>);
      }}
    />);

    this.props.navigation.navigate('SubDetails', {
      subDetail: subDetailDataTemplate,
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
    paddingTop: 4,
    paddingBottom: 14,
  },
  ScrollViewInner: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const flatListStyles = StyleSheet.create({
    viewBase:{
      backgroundColor:'#E6E6E6',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
    },
    viewInner:{
      flex:1,
      backgroundColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      padding:5,
      marginBottom:4,
    },
    userFullnametext:{
      color:'#333',
    }
})