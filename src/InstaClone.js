import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
export class InstaClone extends Component {

  constructor(props) {
    super(props)

    this.state = {
      screenWidth: Dimensions.get("window").width
    }
  }

  render() {
    const ImageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageURI = "https://lh3.googleusercontent.com/qU5spqGPXhEGmM5fbwr5Jy_IdsO6qI7McxS6PEenPUsrh13aKZfUWDgajuYF-GDa2Bq4k_2v6BQBqf8XEVfGGuMVXA" + "=s" + ImageHeight;

    return (
      <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
        <View style={styles.tempNav}>
          <Text style={{ marginLeft: 10 }}>
            Instagram
          </Text>
        </View>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{
                url: "https://lh3.googleusercontent.com/GKJQO0StP12fDve0aZczAshqbftw7gr8kPCkEDEsGdU4NyZUZ0MqH46jD_Obb5BRCiH18YvZjLHPD7gJvVuQYe6KIA"
              }}
            />
            <Text style={{ marginLeft: 10 }}>
              Name
            </Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 50, marginTop: -10 }}>
              ...
            </Text>
          </View>
        </View>

        <Image
          style={{ width: this.state.screenWidth, height: 425 }}
          source={{
            url: imageURI
          }}
        />
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
  userBar: {
    width: 100 + "%",
    height: 50,
    backgroundColor: "rgb(255, 255, 255)",
    borderBottomColor: "rgb(233, 33, 233)",
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userPic: {
    width: 40,
    height: 40,
    borderRadius: 15,
  }
});

export default InstaClone
