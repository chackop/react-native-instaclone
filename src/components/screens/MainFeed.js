import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, } from 'react-native'
import config from "../../config";
import { PostFeed } from "../container";
export class MainFeed extends Component {

  constructor(props) {
    super(props)

    this.state = {
      screenWidth: Dimensions.get("window").width,
      liked: false
    }
  }

  likeToggled() {
    this.setState({
      liked: !this.state.liked,
    })
  }

  render() {
    return (
      <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
        <View style={styles.tempNav}>
          <Text style={{ marginLeft: 10 }}>
            Instagram
          </Text>
        </View>
        <PostFeed />
      </View >
    )
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 50,
    marginTop: 20,
    backgroundColor: "rgb(250, 250, 250)",
    borderBottomColor: "rgb(233, 33, 233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainFeed
