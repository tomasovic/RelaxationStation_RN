import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'


export default class Quote extends Component{
  render() {
    return(
      <View>
        <Text style={styles.text}>{this.props.quoteText}</Text>
        <Text style={styles.text}>{this.props.quoteSource}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff'
  }
})
