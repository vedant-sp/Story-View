import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
// import Story from './Story';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="hii"
          onPress={() => {
            this.props.navigation.navigate('Story');
          }}></Button>
      </View>
    );
  }
}

export default HomeScreen;
