import React from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  TextInput,
  ListView,
  FlatList,
  View,
  ActivityIndicator,
  TouchableHighlight,
  Image,
  AppRegistry,
  ToolbarAndroid,
  ScrollView
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { AppSizes, AppStyles, AppColors } from '../theme/';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';
import Loading from './Loading';
import SWAPIConfig from '../config/swapi';
import ListPeopleItem from './ListPeopleItem';

var REQUEST_URL = SWAPIConfig.baseUrl + SWAPIConfig.peopleEndpoint;


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          people: [],
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
          }),
          loaded: false
        };
      }


      componentDidMount() {
        this.fetchData();
      }
    
      showDetail(data) {
        var peoplee = [];
        for (i = 0; i < data.results.length; i++) {
          peoplee.push(data.results[i])

        }
        
        this.setState({
          people: peoplee,
        });
        console.log(this.state.people);
        
        
      }


      fetchData() {
        fetch(REQUEST_URL)
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData.results),
              loaded: true
            });
            this.showDetail(responseData);
          })
          .done();
      }



      filterSearch(text){
        
        const newData = this.state.people.filter(function(item){
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
      }

      clearSW = () => this.filterSearch(""); 
    
      render() {
        const getContent = () => {
          if (this.state.loaded) {
            return (
              <ScrollView contentContainerStyle={styles.contentContainer}>
              <SearchBar
           clearIcon={{ color: 'white' }}
           searchIcon={false} 
           onChangeText={(text) => this.filterSearch(text)}
           onClearText={() => this.clearSW()}
           placeholder='Cauta...' />
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(data) => <ListPeopleItem {...data} navigation={this.props.navigation}/>}
                style={styles.listContainer}
                />
                </ScrollView>
            );
          } else {
            return (
              <Loading />
            );
          }
        }
        return (
          <View>
            <ToolbarAndroid
              style={styles.toolbar}
              title='People'
              titleColor='#ffe700'
              />
            {getContent()}
          </View>
        );
      }
      
    }
    


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      contentContainer: {
        paddingVertical: 20,
        marginTop: 30,
        padding: 10,
      },
  
     listContainer: {
      marginHorizontal: 10
    }
    });  