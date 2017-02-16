import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  TextInput,

} from 'react-native';




export default class myProject extends Component {







  render() {
    return (
      <View style={styles.container}>
      



        <TextInput
          style={{width:300}}
      		placeholder="Hello non-styled placeholder"
      	/>

        <Text style={styles.welcome}>Greetings!</Text>
        <TouchableOpacity onPress={this._handlePress}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'blue', borderRadius:10}}>
            <Text style={{textAlign: 'center', }}>Add Item</Text>
          </View>
        </TouchableOpacity>



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
});

AppRegistry.registerComponent('myProject', () => myProject);
