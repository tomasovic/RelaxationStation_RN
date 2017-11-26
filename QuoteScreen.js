import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import NextQuoteButton from './NextQuoteButton'


export default class QuoteScreen extends Component {
  render() {
    const quoteText   = this.props.quoteText;
    const quoteSource = this.props.quoteSource;
    return (
      <View>
        <Text style={styles.text}>{quoteText}</Text>
        <Text style={styles.text}>{quoteSource}</Text>
        <NextQuoteButton onPress={this.props.onNextQuotePress} />
      </View>
    )
  }
}

QuoteScreen.propTypes = {
   quoteText: PropTypes.string.isRequired,
   quoteSource: PropTypes.string.isRequired,
   onNextQuotePress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff'
  }
})
