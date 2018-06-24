import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from "../../config";
export class Post extends Component {

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
        const ImageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageSelection = this.props.item % 2 === 0 ? "https://lh3.googleusercontent.com/qU5spqGPXhEGmM5fbwr5Jy_IdsO6qI7McxS6PEenPUsrh13aKZfUWDgajuYF-GDa2Bq4k_2v6BQBqf8XEVfGGuMVXA" : "https://lh3.googleusercontent.com/OYRjxGR0g2ukqhmIxZMKDBDQPFcH4R3oiTlSlCiGkmHyrJ3mbpGACKGLTaSs3VgdDXYBVE4AYT_6FgUrb8SRnH5A7w";
        const imageURI = imageSelection + "=s" + ImageHeight + "-c";
        const heartIconColor = this.state.liked ? "rgb(252, 81, 57)" : null;

        return (
            <View style={{ flex: 1, width: 100 + '%' }}>
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
                <TouchableOpacity onPress={() => {
                    this.likeToggled();
                }}
                    activeOpacity={0.7}
                >
                    <Image
                        style={{ width: this.state.screenWidth, height: 400 }}
                        source={{
                            url: imageURI
                        }}
                    />
                </TouchableOpacity>

                <View style={styles.iconBar}>
                    <Image
                        style={[styles.icon, { height: 40, width: 40, tintColor: heartIconColor }]}
                        source={config.images.heartIcon}
                    />
                    <Image
                        style={[styles.icon, { height: 50, width: 50 }]}
                        source={config.images.rightIcon}
                    />
                    <Image
                        resizeMode="stretch"
                        style={[styles.icon, { height: 45, width: 45 }]}
                        source={config.images.chatIcon}
                    />
                </View>
                <View style={styles.iconBar}>
                    <Image
                        style={[styles.icon, { height: 40, width: 40 }]}
                        source={config.images.heartIcon}
                    />
                    <Text>
                        300 likes
          </Text>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    userBar: {
        width: 100 + "%",
        // height: config.styleConstants.rowHeight,
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
    },
    iconBar: {
        // height: config.styleConstants.rowHeight,
        height: 50,
        width: 100 + '%',
        borderColor: "rgb(233, 33, 233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 5,
    },
    // commentBar: {
    //   height: 50,
    //   width: 100 + '%',
    //   borderColor: "rgb(233, 33, 233)",
    //   borderTopWidth: StyleSheet.hairlineWidth,
    //   borderBottomWidth: StyleSheet.hairlineWidth,
    // }
});

export default Post
