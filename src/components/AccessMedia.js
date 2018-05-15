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
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Button,
  CameraRoll
} from 'react-native';
import axios from 'axios';

export default class AccessMedia extends Component<Props> {

  state = { data: null, refreshing: false,photos:[] };

  static navigationOptions = ({ navigation }) => {

    const {params} = navigation.state;

    return {
      title: 'Access media',
    }

  }

  cameraRollhandler = () => {

    console.log('[cameraRollhandler]');

    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
      });

}


  render() {
    return (
      <View>
          <Button onPress={this.cameraRollhandler} title="Get Photos"  />
          <ScrollView>
       {this.state.photos.map((p, i) => {
       return (
         <Image
           key={i}
           style={{
             width: 300,
             height: 100,
           }}
           source={{ uri: p.node.image.uri }}
         />
       );
     })}
     </ScrollView>
      </View>
    )
  }
}