/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {

  state = {
    placeName: '',
    places:[]
  }

  placeNameChangeHandler = val =>{
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="An awesome place"
            style={styles.placeInput}
            value={this.state.placeName} 
            onChangeText={this.placeNameChangeHandler}/>
          <Button
            style={styles.placeButton}
            onPress={this._onPressButton}
            title="Add"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  inputContainer:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput:{
    width: "70%"
  },
  placeButton:{
    width: "30%"
  }
});
