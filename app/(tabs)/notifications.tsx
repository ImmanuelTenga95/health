import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class notifications extends Component {
  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center', alignContent:'center', flexDirection:'row',marginTop:50}}>
        <Text style={{color:'#fff'}}>This is a notifications Tab</Text>
      </View>
    )
  }
}