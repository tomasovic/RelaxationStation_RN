import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  UIManager,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import NextQuoteButton from './NextQuoteButton'
import Quote from './Quote'


// Making custom animation
const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.oopacity
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity
  }
}

export default class QuoteScreen extends Component {
  componentWillUpdate() {
    // This is needed for android phone
    if(Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    // This is RN animation - spring()
    // LayoutAnimation.spring()
    LayoutAnimation.configureNext(tranquil)
  }
  render() {
    return (
      <View>
        <Quote key={this.props.qId} quoteText={this.props.quoteText} quoteSource={this.props.quoteSource} />
        <NextQuoteButton onPress={this.props.onNextQuotePress} />
      </View>
    )
  }
}

QuoteScreen.propTypes = {
   quoteText: PropTypes.string.isRequired,
   quoteSource: PropTypes.string.isRequired,
   onNextQuotePress: PropTypes.func.isRequired,
   qId: PropTypes.number.isRequired
}
