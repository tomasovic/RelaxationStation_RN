import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';
import QuoteScreen from './QuoteScreen'
import HomeScreen from './HomeScreen'
import { StackNavigator } from 'react-navigation'

const zenImage = require('./assets/zen.png');
const bgImage = require('./assets/bg.png');

// importing quotes from quotes.json
const { quotes } = require('./quotes.json');


const AppNav = StackNavigator({
  Home: {screen: HomeScreen},
  Quote: { screen: QuoteScreen}
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  static navigationOptions = {
    title: 'First Screen'
  }
  render() {
    // taking one quote from quotes.json
    const quote = quotes[0]
    return (
        <View style={styles.container}>
          <Image source={bgImage}/>
          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=> { alert("I am pressed!") }}>
              <Image source={zenImage} style={styles.buttonImage} />
            {/* <Button title="Go to Home Screen" onPress={()=>{}} /> */}
            <QuoteScreen quoteText={quote.text} quoteSource={quote.source} />
            </TouchableOpacity>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
    alignItems: 'center'
  },
  buttonImage: {
    width: 200,
    height: 200
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
