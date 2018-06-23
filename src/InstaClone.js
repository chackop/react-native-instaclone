import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
export class InstaClone extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
        <Text>
          My InstaClone
        </Text>
        <Image 
        style={{ width: 100 + '%', height: 100 + '%' }}
        source={{
          url:"https://lh3.googleusercontent.com/qU5spqGPXhEGmM5fbwr5Jy_IdsO6qI7McxS6PEenPUsrh13aKZfUWDgajuYF-GDa2Bq4k_2v6BQBqf8XEVfGGuMVXA" 
          }}  
        />
      </View>
    )
  }
}

export default InstaClone
