import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';

class StoryLine extends Component {
  render() {
    return (
      <View
        style={
          this.props.activeIndex === this.props.id
            ? styles.selected
            : styles.line
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    margin: 5,
    opacity: 0.6,
    flex: 1,
  },
  selected: {
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    margin: 5,
    opacity: 1,
    flex: 1,
  },
});

export default StoryLine;
