import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native'
import config from '../../config'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            credentials: {
                email: "",
                password: ""
            }
        };
    };

    updateText(text, field) {
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState({
            credentials: newCredentials
        })
    }

    login() {
        // console.log(this.state.credentials);
        let credentials = this.state.credentials;
        credentials.email = this.state.credentials.email.toLowerCase();

        fetch(config.baseUrl + 'login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.credentials),
        })
            .then((response) => response.json())
            .then((jsonresponse) => {
                console.log("success data", JSON.stringify(jsonresponse));
                if (jsonresponse.confirmation === "success") {
                    this.props.navigation.navigate('main')
                } else {
                    throw new Error(jsonresponse.message);
                }
            })
            .catch((err) => {
                alert(JSON.stringify(err.message));
            });
    }

    render() {
        return (
            <View style={{ height: 100 + "%", width: 100 + "%", flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "cyan" }}>
                <Text> REGISTER PAGE </Text>
                <TextInput onChangeText={(text) => this.updateText(text, "email")} style={styles.input} placeholder="Username"
                    value={this.state.email} autoCorrect={false}
                    autoCapitalize="none"
                />
                <TextInput onChangeText={(text) => this.updateText(text, "password")} style={styles.input} placeholder="Password" secureTextEntry={true}
                    value={this.state.password} autoCorrect={false}
                    autoCapitalize="none"

                />
                <Button title="Login" onPress={() => {
                    this.login();
                }} />

                <Button title="No Account? Sign Up" onPress={() => {
                    this.props.navigation.navigate('register');
                }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 100 + '%',
        borderColor: "grey",
        borderWidth: 1,
        paddingHorizontal: 50,
        backgroundColor: "white",
        marginBottom: 10,
    }
});