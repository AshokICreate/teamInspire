//Design: http://ugarov.me/tnc-track-iphone-app-design/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';
import {
    Scene,
    Reducer,
    Router,
    Switch,
    Actions
} from 'react-native-router-flux';
import dimensions from 'Dimensions'
import DismissKeyBoard from 'react-native-dismiss-keyboard'
var width=dimensions.get('window').width;

export default class Home extends React.Component {

  onLogout = () => {
    Actions.pop();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => DismissKeyBoard()}>
        <View style={containerStyle.container}>

            <View style={topContainerStyle.topContainer}>
              <Text style={topContainerStyle.textStyle}>Home</Text>
            </View>

            <View style={middleContainerStyle.middleContainer}>
              <TouchableHighlight underlayColor="#FFFFFF" style={middleContainerStyle.logoutContainerStyle} onPress={this.onLogout}>
                  <Text style={middleContainerStyle.logoutButtonStyle}>Log out</Text>
              </TouchableHighlight>
            </View>

            <View style={bottomContainerStyle.bottomContainer}>

            </View>
        </View>
    </TouchableWithoutFeedback>
    );
  }
}

const containerStyle = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF'
  },
});

const topContainerStyle = StyleSheet.create({
    topContainer: {
      flex: 0.1,
      backgroundColor: '#2F94DD',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle: {
      // fontFamily: 'Roboto-Black',
      fontSize: 20,
      color: '#FFFFFF'
    }
});

const middleContainerStyle = StyleSheet.create({
  middleContainer: {
    flex: 0.8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: width - 20,
    backgroundColor: '#FFFFFF',
  },
  logoutButtonStyle: {
    //fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: '#2F94DD'
  },
});

const bottomContainerStyle = StyleSheet.create({
  bottomContainer: {
    flex: 0.063,
    backgroundColor: '#2F94DD',
  },
});
