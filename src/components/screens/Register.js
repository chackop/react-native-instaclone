import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import config from '../../config'

export default class Register extends Component {
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

  register() {
    // this.props.navigation.navigate('main')
    fetch(config.baseUrl + 'signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => {
        console.log("success data", JSON.stringify(data));
      })
      .catch((err) => {
        console.log("error data", JSON.stringify(err));
      });
  }

  render() {
    return (
      <View style={{ height: 100 + "%", width: 100 + "%", flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "cyan" }}>
        <Text> REGISTER PAGE </Text>
        <TextInput onChangeText={(text) => this.updateText(text, "login")} style={styles.input} placeholder="Username"
          value={this.state.login} autoCorrect={false}
        />
        <TextInput onChangeText={(text) => this.updateText(text, "password")} style={styles.input} placeholder="Password" secureTextEntry={true}
          value={this.state.password} autoCorrect={false}
        />
        <Button title="Sign Up" onPress={() => {
          this.register();
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