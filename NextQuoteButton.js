import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { PropTypes } from 'prop-types';

class NextQuoteButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.buttonText}>Next Quote</Text>
      </TouchableOpacity>
    )
  }
}

export default NextQuoteButton

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: '#ffffff',
    padding: 10
  },
  buttonText: {
    color:'#ffffff',
    fontSize: 18
  }
})

NextQuoteButton.propTypes = {
  onPress: PropTypes.func.isRequired
}
