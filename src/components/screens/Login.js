import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Button } from 'react-native'

export default class Login extends Component {
    login() {
        this.props.navigation.navigate('register')
    }
    render() {
        return (
            <TouchableOpacity style={{ height: 100 + "%", width: 100 + "%", flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => this.login()}>
                <Text> Create User </Text>
            </TouchableOpacity>
        )
    }
}