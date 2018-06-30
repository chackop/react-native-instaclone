import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, } from 'react-native'
import { MainFeed, Login } from './components/screens'
import { SwitchNavigator, TabNavigator } from "react-navigation";

const MainStack = SwitchNavigator({
  login: Login,
  main: MainFeed,
})

export class InstaClone extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <MainStack />
    )
  }
}

export default InstaClone;
