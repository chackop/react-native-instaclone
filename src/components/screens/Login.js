import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Login extends Component {
    login() {
        this.props.navigation.navigate('main')
    }
    render() {
        return (
            <TouchableOpacity style={{ height: 100 + "%", width: 100 + "%", flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => this.login()}>
                <Text> Login </Text>
            </TouchableOpacity>
        )
    }
}