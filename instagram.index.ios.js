/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native';

var ImagePicker = require('react-native-image-picker');

export default class instagram extends Component {

  constructor(){
    super()
    this.showPicker = this.showPicker.bind(this)
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2) =>r1 !==r2})
    this.state = {
      localSource:[],
      dataSource:ds.cloneWithRows([

      ]),
    }
  }

  showPicker() {
    const options = {
      quality:1.0,
      maxWidth:500,
      maxHeight:500,
      storageOptions:{
        skipBackup:true
      }
    }
    ImagePicker.showImagePicker(options, (response)=> {
      if (response.didCancel){

      } else {
      let source = {uri:response.uri}
      this.state.localSource.push(source)
      this.setState({dataSource:this.state.dataSource.cloneWithRows(this.state.localSource)})
      }
    })
  }

  render() {
    return (
      <View style ={styles.container}>
        <View style ={{backgroundColor:"rgba(249,249,249,1)"}}>
          <View style ={styles.topBar}>
            <View style = {{width:50, height:40}}>
            </View>

            <Image source ={require('./logo.png')} style={{width:120,height:40,flex:1}} resizeMode={'contain'}/>
            <TouchableOpacity style ={{width:50,height:50,justifyContent:'center',alignItems:'center'}} onPress={this.showPicker}>
              <Image source ={require('./add.png')} style={{width:30,height:30}}/>

            </TouchableOpacity>
          </View>
          </View>
            <View style={styles.separatorLine}/>
            <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
              <View style ={{height:410,padding:8}}>
                <View style ={{height:40,flexDirection:"row"}}>
                  <Image source ={require('./avatar.png')} style={{width:26, height:26, margin:2}}/>
                  <Text> UserName </Text>
                </View>
                <View style={{height:300,left:0,right:0}}>
                  <Image source={rowData} style={{flex:1}} resizeMode={"stretch"}/>
                </View>


              </View>
            }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    top:20,
    flexDirection:"row",
    height:70,
  },
  separatorLine:{
    height:1,
    backgroundColor:"#eee9e9"
  }
});

AppRegistry.registerComponent('instagram', () => instagram);
