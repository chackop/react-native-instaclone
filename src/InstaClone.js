import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, } from 'react-native'
import { MainFeed, Login, Camera, Profile, Register } from './components/screens'
import { SwitchNavigator, TabNavigator, StackNavigator } from "react-navigation";

const IntroStack = StackNavigator({
  login: Login,
  register: Register,
})

const Tabs = TabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
})

const MainStack = SwitchNavigator({
  intro: IntroStack,
  main: Tabs,
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
