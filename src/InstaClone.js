import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, } from 'react-native'
import {MainFeed} from './components/screens'
export class InstaClone extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <MainFeed />
    )
  }
}

export default InstaClone;
