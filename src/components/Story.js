import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import StoryLine from './common/StoryLine';
imageData = [
  {
    id: '1',
    source:
      'https://cdn.pixabay.com/photo/2021/08/30/16/28/dewdrops-6586339_960_720.jpg',
  },
  {
    id: '2',
    source:
      'https://cdn.pixabay.com/photo/2021/08/20/23/49/plant-6561467_960_720.jpg',
  },
  {
    id: '3',
    source:
      'https://cdn.pixabay.com/photo/2021/06/05/13/10/kid-6312635_960_720.jpg',
  },
];

class Story extends Component {
  state = {
    index: 0,
  };
  prevImage = () => {
    if (this.state.index == 0) {
      console.log('do nothing');
    } else {
      this.setState({index: this.state.index - 1});
    }
  };
  nextImage = () => {
    if (this.state.index < imageData.length - 1) {
      this.setState({index: this.state.index + 1});
      console.log(this.state.index, imageData.length - 1);
    } else {
      this.props.navigation.navigate('HomeScreen');
    }
  };
  render() {
    return (
      // <TouchableWithoutFeedback onPress={this.changeImage}>
      <ImageBackground
        style={styles.tinyLogo}
        source={{uri: imageData[this.state.index].source}}
        key={this.state.index}>
        <View style={styles.mainWrapper}>
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.touch} onPress={this.prevImage} />
          </View>
          <View style={styles.wrapper}>
            <TouchableOpacity style={styles.touch} onPress={this.nextImage} />
          </View>
        </View>
        <View style={styles.header}>
          <View style={styles.mainWrapper}>
            <Text
              // name="chevron-back-outline"
              // size={22}
              // color="white"
              style={styles.titleText}
              onPress={() => {
                this.props.navigation.navigate('HomeScreen');
              }}>
              Back
            </Text>
            <Text style={styles.titleText}>Title Of page</Text>
          </View>
        </View>
        <View style={styles.mainWrapper}>
          {imageData.map(item => {
            return (
              <StoryLine id={item.id - 1} activeIndex={this.state.index} />
            );
          })}
        </View>
      </ImageBackground>
      // </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  tinyLogo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  touch: {
    position: 'absolute',
    // backgroundColor: 'red',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height,
    // flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  mainWrapper: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    // opacity: 0.5,
  },
  titleText: {
    fontSize: 22,
    color: 'white',
    margin: 10,
  },
  line: {
    borderBottomColor: 'red',
    borderBottomWidth: 5,
    margin: 5,
    opacity: 0.6,
    flex: 1,
  },
});

export default Story;
