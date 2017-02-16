/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  TouchableOpacity,
  Text
} from 'react-native';
var _navigator;
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'

export default class navigationProject extends Component {
  renderScene(route,navigator){
    if (route.id === 'FirstScreen'){
      return (
        <FirstScreen navigator={navigator}/>

      );
    }
    if (route.id === 'SecondScreen'){
      return (
        <SecondScreen navigator={navigator}/>
        );
    }
  }
  render() {
    return (
      <Navigator
        configureScene={(route)=> {
          return Navigator.SceneConfigs.HorizontalSwipeJump
        }}

  navigationBar={
     <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
          { return (
            <TouchableOpacity style={{margin:10,width:100}} onPress={()=>navigator.pop()}>
              <Text style={{color:"blue"}}>Back</Text>
            </TouchableOpacity>
        )},
         RightButton: (route, navigator, index, navState) =>
           { },
         Title: (route, navigator, index, navState) =>
           { },
       }}
       style={{backgroundColor: 'gray'}}
     />
  }

        initialRoute={{id:"FitstScreen", name:"FirstScreen"}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}



AppRegistry.registerComponent('navigationProject', () => navigationProject);
