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
  ActivityIndicator
} from 'react-native';
import axios from 'axios';

export default class Newsfeeds extends Component<Props> {

  state = { data: null, refreshing: false };

  static navigationOptions = ({ navigation }) => {

    const {params} = navigation.state;

    return {
      title: params ? params.titleParam : 'Loading ...',
    }

  }

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {

        console.log('[compoenentDidMount] axios response : ', response);

        this.setState({ data: response.data });
        this.props.navigation.setParams({ titleParam: 'News feed' })

      });

  }

  render() {
    return (
      <View>
        {!this.state.data ?
          (<View style={{margin:10}} >
            <ActivityIndicator size="large" />
          </View>) :
          (<FlatList
            keyExtractor={(item, index) => '_key_' + index}
            data={this.state.data}
            ListHeaderComponent={<View style={{margin:10}}>
                  <Text style={{fontSize:20}}>News feeds</Text>
                </View>}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.setState({ refreshing: true });
                  setTimeout(() => {
                    this.setState({ refreshing: false });
                  }, 2000)
                }}
              />
            }
            renderItem={(data) => {
              let { item, index } = data;
              return (<View style={flatListStyles.viewBase} >
                <View style={flatListStyles.viewInner} >
                  <Text style={flatListStyles.userFullnametext} >{item.title}</Text>
                </View>
              </View>)
            }} />)}
      </View>
    )
  }
}


const flatListStyles = StyleSheet.create({
  viewBase: {
    backgroundColor: '#E6E6E6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewInner: {
    flex: 1,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 5,
    marginBottom: 4,
    flexDirection: 'row',
  },
  postTitle: {
    color: '#333',
    paddingLeft: 5,
  },
})